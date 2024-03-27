/* eslint-disable react-hooks/exhaustive-deps */
import {SendBtnNotion} from "./SendBtnNotion"
import {Dialog, DialogContent} from '../../../../common/UIkit/EditorModal'
import {AnswerDropDown} from '../editorComponents/AnswerDropDown'
import {QuestionDropDown} from "../editorComponents/QuestionDropDown"
import {Button} from '../../../../common/UIkit/button'
import {useClickOutside, useQuestionBlockHeight} from '../../customHooks'
import {useTemplateStore} from '../../useTemplateStore'
import {default as React, useLayoutEffect, useMemo, useRef, useState} from 'react'
import ReactDOM from 'react-dom'
import DynamicAnwerBlock from '../timeline/DynamicAnwerBlock'
import DynamicTextarea from '../timeline/DynamicTextArea'
const EventTimeline = (props) => {
  const {
    setAnswer,
    answer,
    setQuestion,
    showQuestionHelper,
    setShowQuestionHelper,
    setShowAnswerHelper,
    showAnswerHelper,
    showModal,
    setShowModal,
    setCanIgnoreHelpers,
  } = useTemplateStore()

  const DEFAULT_INITIAL_DATA = useMemo(() => {
    if (!props.data.event?.top) {
      const wrapper = document.getElementsByClassName('walkthrough-timeline')
      const firstElement = wrapper[0]
      const rect = firstElement.getBoundingClientRect()
      const editorContainer = document.getElementById('editorjs-container')
      const parentRect = editorContainer.getBoundingClientRect()
      const top = rect.top - parentRect.top
      const left = rect.left - parentRect.left
      return {
        event: {
          text: 'New Block',
          top: top + 5,
          left: left,
        },
      }
    }
    return {
      event: {
        text: 'NODATA',
        top: 0,
        left: 0,
      },
    }
  }, [props])
  //это локальная история с ответами
  const [answers, setAnswers] = useState([])

  // выделенный текст (вопрос) лежит в --> props.data.event.text
  const [timelineData, setTimelineData] = React.useState(props.data.event?.top ? props.data : DEFAULT_INITIAL_DATA)

  const updateTimelineData = (newData) => {
    setTimelineData(newData)
    if (props.onDataChange) {
      props.onDataChange(newData)
    }
  }
  // загоняем answer от AI в стейт локальный и в стор + зачищаем в сторе поле question для корректной поставновки условий в useClickOutside
  const onAddEvent = () => {
    answers.push(
      'какой то ответ какой то ответ рабы текст рыба текст какой то ответ какой то ответ рабы текст рыба текст ',
    )
    setAnswers([...answers])
    setAnswer(answers[0])
    setShowQuestionHelper(false)
    setShowAnswerHelper(true)
    setQuestion('')
  }
  // обработчик ввода вопроса к AI
  const onContentChange = (fieldName) => (e) => {
    const newData = {
      ...timelineData,
    }
    const newText = e.currentTarget.value || ' '
    newData.event[fieldName] = newText
    updateTimelineData(newData)
  }
  // вставляем блок с подсказками при вопросе AI
  useLayoutEffect(() => {
    if (insertedBlock.current && answer === '') {
      setShowQuestionHelper(true)
      setQuestion(props.data.event.text)
    }
  }, [])
  //кастомный хук для динамического рассчета высоты поля ввода вопроса AI для рассчета свойства top всплывашки с подсказками и автоподбором функционала по совпаднию
  const inputComponentRef = useRef()
  const questionBlockHeight = useQuestionBlockHeight(inputComponentRef)

  //кастомный хук для дестроя текущего компонента при клике вне его области до отправки запроса к AI и открытия/закрытия модалки// закртие инпута для запроса к AI
  const [insertedBlock] = useClickOutside(answer)

  // дестрой компонента из модалки
  const discardSession = () => {
    insertedBlock.current.remove()
    setShowModal(false)
    setAnswer('')
    setShowQuestionHelper(true)
    setShowAnswerHelper(false)
    setCanIgnoreHelpers(false)
  }

  // console.log(answer, "answer")
  // console.log(question, "question")
  // console.log(showAnswerHelper, "showAnswerHelper")
  // console.log(showQuestionHelper, "showQuestionHelper")

  return ReactDOM.createPortal(
    <div
      ref={insertedBlock}
      id="insertedBlock"
      style={{position: 'absolute', top: timelineData.event.top, zIndex: 100, width: '100%', left: '28px'}}
    >
      <Dialog open={showModal}>
        <DialogContent className="flex items-center justify-center">
          <div
            className="flex h-[150px] w-[360px] flex-col rounded-[18px] bg-white p-[16px] "
            style={{justifyContent: 'space-around'}}
          >
            <span className="font-TTNormsMedium text-[16px] text-[#101828]">
              Вы хотите отказаться от контента, созданного IMI?
            </span>
            <div className="flex h-[44px] w-full justify-between">
              <Button variant={'editorModalDiscard'} size="editorModal" onClick={() => discardSession()}>
                Отказаться
              </Button>
              <Button variant={'editorModalCancel'} size="editorModal" onClick={() => setShowModal(false)}>
                Отмена
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {answers.length > 0 &&
        answers.map((ans, i) => {
          return <DynamicAnwerBlock value={ans} key={i} />
        })}
      <div className=" absolute flex h-auto w-[600px] items-center justify-between rounded-[16px] bg-[#EDF2F6] p-[6px] dark:bg-[#17181C] ">
        <div className="flex h-auto w-full items-center" ref={inputComponentRef}>
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{color: '#0B3BEC'}}
            className="mr-[10px]"
          >
            <path
              d="M15.4167 6.1665V1.99984M4.58341 16.9998V12.8332M13.3334 4.08317H17.5001M2.50008 14.9165H6.66675M5.41675 1.1665L4.76303 2.47393C4.54179 2.91642 4.43117 3.13766 4.28339 3.32938C4.15225 3.4995 3.99974 3.65201 3.82962 3.78315C3.6379 3.93093 3.41666 4.04155 2.97418 4.26279L1.66675 4.9165L2.97418 5.57022C3.41666 5.79146 3.6379 5.90208 3.82962 6.04986C3.99974 6.181 4.15225 6.33351 4.28339 6.50363C4.43117 6.69535 4.54179 6.91659 4.76303 7.35907L5.41675 8.6665L6.07046 7.35907C6.2917 6.91659 6.40233 6.69535 6.55011 6.50363C6.68124 6.33351 6.83375 6.181 7.00388 6.04986C7.19559 5.90208 7.41684 5.79146 7.85932 5.57022L9.16675 4.9165L7.85932 4.26279C7.41684 4.04155 7.19559 3.93093 7.00388 3.78315C6.83375 3.65201 6.68124 3.4995 6.55011 3.32938C6.40233 3.13766 6.2917 2.91642 6.07046 2.47394L5.41675 1.1665ZM14.1667 9.49984L13.3741 11.085C13.1529 11.5275 13.0423 11.7488 12.8945 11.9405C12.7634 12.1106 12.6109 12.2631 12.4407 12.3943C12.249 12.542 12.0278 12.6527 11.5853 12.8739L10.0001 13.6665L11.5853 14.4591C12.0278 14.6803 12.249 14.791 12.4407 14.9388C12.6109 15.0699 12.7634 15.2224 12.8945 15.3925C13.0423 15.5842 13.1529 15.8055 13.3741 16.248L14.1667 17.8332L14.9594 16.248C15.1806 15.8055 15.2912 15.5842 15.439 15.3925C15.5701 15.2224 15.7226 15.0699 15.8928 14.9388C16.0845 14.791 16.3057 14.6804 16.7482 14.4591L18.3334 13.6665L16.7482 12.8739C16.3057 12.6527 16.0845 12.542 15.8928 12.3943C15.7226 12.2631 15.5701 12.1106 15.439 11.9405C15.2912 11.7488 15.1806 11.5275 14.9594 11.085L14.1667 9.49984Z"
              stroke="#0B3BEC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* <DynamicTextarea value={timelineData.event.text} onChange={onContentChange("text")} />   
          timelineData.event.text - передаем AI выделенный текст
          */}
          <DynamicTextarea onChange={onContentChange('text')} />
        </div>

        {!props.readOnly && <SendBtnNotion callBack={onAddEvent} disabled={showAnswerHelper} />}
      </div>
      {showQuestionHelper && <QuestionDropDown questionBlockHeight={questionBlockHeight} />}
      {showAnswerHelper && <AnswerDropDown questionBlockHeight={questionBlockHeight} />}
    </div>,
    document.getElementById('editor-wrapper'),
  )
}

export default EventTimeline
