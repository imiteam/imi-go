import { useAddParagraph } from 'Templates/lib/customHooks'
import { useTemplateStore } from 'Templates/lib/useTemplateStore'
import {Fragment} from 'react'
import { InsertDoc } from './buttons/InsertDoc'
import { OpenChat } from './buttons/OpenChat'
import { Copy } from './buttons/Copy'
import { Delete } from './buttons/Delete'
import { ResultSeparator } from '../ResultSeparator'

export default function ResultItem({
  title,
  index,
  isSolidResult,
  lastIndex,
}: {
  title: string
  index: number
  isSolidResult: boolean
  lastIndex: number
}) {
  const answerFromAi = useTemplateStore((state) => state.answer)
  const addParagraph = useAddParagraph(answerFromAi)
  const wordsCount = title.split(' ').length
  const symbolCount = title.length
  return (
    <Fragment>
      <div className="h-auto w-[452px] rounded-[16px] bg-[#EDF2F6] py-[16px] dark:bg-[#17181C]">
        <div className="h-auto w-full px-[16px] font-TTNormsRegular text-[14px] leading-[20px] text-[#101828] dark:text-[#F5F5F6]">
          {title}
        </div>
        <div className="my-[10px] flex h-[18px] w-full items-center">
          <div className="h-[1px] w-2.5 bg-[#00000030] align-middle dark:bg-[#FFFFFF30]"></div>
          <span className="mx-[6px] size-auto font-TTNormsRegular text-[12px] leading-[18px] text-[#0000005d] dark:text-[#ffffff31]">
            {wordsCount} слов / {symbolCount} символов
          </span>
          <div className="h-[1px] w-auto grow bg-[#00000030] align-middle dark:bg-[#FFFFFF30]"></div>
        </div>
        <div className="flex h-[40px] w-full items-center justify-between px-[16px]">
          <InsertDoc callBack={() => addParagraph()} />
          <OpenChat callBack={() => {}} />
          <Copy callBack={() => {}} />
          <Delete callBack={() => {}} />
        </div>
      </div>
      {isSolidResult && index !== lastIndex && <ResultSeparator />}
    </Fragment>
  )
}