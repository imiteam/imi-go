// добавление ответа от AI в editor с последующим удалением текущего блока и ответа из стейта
import {useTemplateStore} from '../useTemplateStore'

const useAddParagraph = (answerFromAi) => {
  const {setAnswer, setShowQuestionHelper, setShowAnswerHelper, setCanIgnoreHelpers} = useTemplateStore()
  const addParagraph = () => {
    //@ts-ignore
    window.myEditor.blocks.insert('paragraph', {text: answerFromAi}, {}, true)
    //@ts-ignore
    window.insertedBlock = document.getElementById('insertedBlock')
    debugger
    //@ts-ignore
    if (window.insertedBlock) {
      setAnswer('')
      setShowAnswerHelper(false)
      setShowQuestionHelper(true)
      setCanIgnoreHelpers(false)
      //@ts-ignore
      window.insertedBlock.remove()
    }
  }

  return addParagraph
}

export default useAddParagraph
