import {useTemplateStore} from '../useTemplateStore'
import {useEffect, useRef} from 'react'
//возвращаемый зуком реф должен присвоиться дом элементу который дестроится при клике вне него
const useClickOutside = (answer) => {
  const ref = useRef()
  const {
    showAnswerHelper,
    showQuestionHelper,
    setShowAnswerHelper,
    setShowQuestionHelper,
    setQuestion,
    canIgnoreHelpers,
    setShowModal,
  } = useTemplateStore()

  useEffect(() => {
    const handleClickOutside = (event) => {
      const current = ref.current
      if (current && !current.contains(event.target) && showQuestionHelper && !canIgnoreHelpers) {
        current.remove()
        setQuestion('')
        setShowQuestionHelper(true)
        setShowAnswerHelper(false)
        document.removeEventListener('mousedown', handleClickOutside)
      } else if (current && !current.contains(event.target) && showAnswerHelper && !canIgnoreHelpers) {
        setShowModal(true)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer])

  return [ref]
}

export default useClickOutside
