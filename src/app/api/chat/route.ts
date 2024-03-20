import {OpenAIStream, StreamingTextResponse} from 'ai'
import { AddNewMessageDocument } from 'generated'
import { getClient } from 'apollo-server-client'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// export const runtime = 'edge'

export async function POST(req: any) {
  const json = await req.json()
  const {messages, userId, systemPromt, currentAiTextModel, is_client} = json
  if (systemPromt !== 'absent') {
    messages.unshift({role: 'system', content: systemPromt})
    messages.splice(1, 1);
  }
  // TODO: query all nesesery data
  // chat system promt
  // последние 3 сообещения
  // 5 наиболее релевантных сообщения из чата
  // если есть документы - выбираем 5 наиболее релеватных кусков документов
  // Установить язык чата

  // const messages: Array<ChatCompletionMessageParam> = [
  //   {role: 'user', content: 'write top vegetables with calories in table. use markdown'},
  // ]
  // TODO: Get model from chat
  let finalModel : string;
  if (!is_client) {
    finalModel = 'gpt-3.5-turbo-1106'
  } else if (is_client) {
    if (currentAiTextModel === 'gpt-3.5') {
      finalModel = 'gpt-3.5-turbo-0613'
    } else {
      finalModel = 'gpt-4'
    }
  }
  const tokenCoefficients = {
    'gpt-3.5-turbo-1106': 1,
    'gpt-3.5-turbo-0613': 1.2,
    'gpt-4': 1.5
  };
  
  const response = await openai.chat.completions.create({
    model: finalModel!,
    stream: true,
    messages: messages,
  })
  // onComplete -> add message mutatuion
  let tokenCounter = 0
  const stream = OpenAIStream(response, {
    async onStart() {
    },
    async onCompletion(completion) {
      // TODO: rupdate chat title if message count = 2
      // TODO: add message to chat
      // Deduct your tokens here
      // @ts-ignore
      const tokensUsed = Math.round(tokenCounter * (tokenCoefficients[finalModel] || 1));
      await fetch('https://api.imigo.ai/used-tokens', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          tokens: tokensUsed,
        }),
      })
      const id = json.id
      await getClient().mutate({
        mutation : AddNewMessageDocument,
        variables : {chatId: id, content: completion, role: 'assistant'}
      })
    },
    async onToken(token: string) {
      tokenCounter += 1
    },
  })

  return new StreamingTextResponse(stream)
}
