'use client'

import {Question} from './Question'

export const QuestionBlock = ({questions}: {questions: Array<{question: string; answer: string}>}) => {
  return (
    <div id="questionBlock" className="flex h-auto w-full flex-col ">
      {questions.map((q, index) => {
        return <Question question={q} key={index} />
      })}
    </div>
)
}
