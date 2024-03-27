import EditorJS, {OutputData} from '@editorjs/editorjs'
// @ts-ignore
import Undo from 'editorjs-undo'
// @ts-ignore
import {EDITOR_TOOLS} from '../../lib/editor-tools'
import {useEffect, useRef} from 'react'

type Props = {
  data?: OutputData
  onChange(val: OutputData): void
  holder: string
}

export default function Editor({data, onChange, holder}: Props) {
  //add a reference to editor
  const ref = useRef<EditorJS>()

  //initialize editorjs
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    //initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        inlineToolbar: ['IMI', 'textAlign', 'bold', 'italic', 'underline', 'strikethrough', 'link', 'inlinecode'],
        tools: EDITOR_TOOLS as any,
        data,
        async onChange(api, _event) {
          const data = await api.saver.save()
          onChange(data)
        },
        onReady: () => {
          new Undo({editor})
        },
      })
      ref.current = editor
      // @ts-ignore
      window.myEditor = editor
    }

    //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div id={holder} className="prose max-w-full" />
}
