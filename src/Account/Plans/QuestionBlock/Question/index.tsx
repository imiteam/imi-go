'use client'
import {useState} from 'react'
import { QuestionArrowIcon } from './QuestionArrowIcon';

export const Question = ({question}: {question: {question: string; answer: string}}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const showAnswer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="mb-[32px] flex h-auto w-full flex-col justify-between border-b-[1px] border-b-[white] dark:border-b-[#000000]" onClick={() => showAnswer()}>
      <div className={`flex h-auto min-h-[60px] w-full items-center justify-between `}>
        <span
          className="h-full font-TTNormsMedium text-[#101828] dark:text-[#F5F5F6] md:text-[16px] md:leading-[19px]
                                md:vsm:text-[14px] lg:text-[18px]
                                lg:leading-[28px]"
        >
          {question.question}
        </span>
        <div
          className="planSm:ml-[10px flex h-full items-start
                                pt-[7px] planSm:pt-[3px]"
        >
          <QuestionArrowIcon isActive={isOpen} callBack={showAnswer} />
        </div>
      </div>
      {isOpen && (
        <span
          className="font-TTNormsRegular text-[#475467] dark:text-[#98A2B3] md:pb-[15px] md:text-[14px] md:leading-[19px]
                            md:vsm:text-[12px] lg:pb-[25px] lg:text-[16px]
                            lg:leading-[19px]"
        >
          {question.answer}
        </span>
      )}
    </div>
  )
}
