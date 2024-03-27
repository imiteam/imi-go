import {useEffect, useRef} from 'react'

export default function DynamicTextarea({onChange}) {
  const textareaRef = useRef()

  useEffect(() => {
    const textarea = textareaRef.current
    textarea.style.height = '34px'
    textarea.style.height = `${textarea.scrollHeight}px`

    const handleInput = () => {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }

    textarea.addEventListener('input', handleInput)

    return () => {
      textarea.removeEventListener('input', handleInput)
    }
  }, [])

  return (
    <textarea
      ref={textareaRef}
      style={{resize: 'none'}}
      onChange={onChange}
      autoFocus
      // value={value}
      className="h-auto min-h-[34px] w-[650px] bg-[#EDF2F6] py-[8px] pr-[20px] font-TTNormsRegular text-[12px] leading-[18px] text-[#101828] focus:outline-none dark:bg-[#17181C] dark:text-[#F5F5F6]"
      id="notionTextArea"
    />
  )
}
