// import CheckList from "@editorjs/checklist"
// import Code from "@editorjs/code"
// import Delimiter from "@editorjs/delimiter"
// import Embed from "@editorjs/embed"
import TextAlign from '@canburaks/text-align-editorjs'
import Header from '@editorjs/header'
// // import Image from "@editorjs/image"
// import InlineCode from "@editorjs/inline-code"
// import Link from "@editorjs/link"
// import List from "@editorjs/list"
import InlineCode from '@editorjs/inline-code'
import Paragraph from '@editorjs/paragraph'
import Underline from '@editorjs/underline'
import Strikethrough from 'editorjs-strikethrough'
import AItool from './tools/ai-inline-complete/tool'
import Timeline from './tools/timeline/tool'
// // import Quote from "@editorjs/quote"
// import SimpleImage from "@editorjs/simple-image"
// import Table from "@editorjs/table"

// import Paragraph from "@editorjs/paragraph"

export const EDITOR_TOOLS = {
  IMI: AItool,
  textAlign: TextAlign,
  underline: Underline,
  strikethrough: Strikethrough,
  inlinecode: InlineCode,
  header: {
    class: Header,
    inlineToolbar: true,
    config: {
      placeholder: 'Enter a header',
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 1,
    },
  },
  // code: Code,
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  timeline: Timeline,
  // checklist: CheckList,
  // embed: Embed,
  // //   image: Image,
  // inlineCode: InlineCode,
  // link: Link,
  // list: List,
  // table: Table,
  // //   quote: Quote,
  // simpleImage: SimpleImage,
  // delimiter: Delimiter,
}
