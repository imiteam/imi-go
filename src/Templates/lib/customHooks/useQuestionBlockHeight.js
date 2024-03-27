import useResizeObserver from '@react-hook/resize-observer'
import {useState} from 'react'
// хук динамически ретурнет текущую высоту дом элемента чей реф передан в хук

const useQuestionBlockHeight = (ref) => {
  const [questionBlockHeight, setQuestionBlockHeight] = useState(0)

  useResizeObserver(ref, (entry) => {
    setQuestionBlockHeight(entry.contentRect.height)
  })

  return questionBlockHeight
}

export default useQuestionBlockHeight
