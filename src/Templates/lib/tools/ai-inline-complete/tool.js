// marker.js

export default class IMItool {
  static get isInline() {
    return true
  }

  get state() {
    return this._state
  }
  static get shortcut() {
    return 'Ctrl+M'
  }
  set state(state) {
    this._state = state

    this.button.classList.toggle(this.api.styles.inlineToolButtonActive, state)
  }

  constructor({api}) {
    this.api = api
    this.button = null
    this._state = false

    this.tag = 'MARK'
    this.class = 'cdx-marker'
  }

  render() {
    this.button = document.createElement('button')
    this.button.type = 'button'
    this.button.innerHTML = `<svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer md:pl-[2px]"
    >
      <path
        d="M15.4167 6.1665V1.99984M4.58341 16.9998V12.8332M13.3334 4.08317H17.5001M2.50008 14.9165H6.66675M5.41675 1.1665L4.76303 2.47393C4.54179 2.91642 4.43117 3.13766 4.28339 3.32938C4.15225 3.4995 3.99974 3.65201 3.82962 3.78315C3.6379 3.93093 3.41666 4.04155 2.97418 4.26279L1.66675 4.9165L2.97418 5.57022C3.41666 5.79146 3.6379 5.90208 3.82962 6.04986C3.99974 6.181 4.15225 6.33351 4.28339 6.50363C4.43117 6.69535 4.54179 6.91659 4.76303 7.35907L5.41675 8.6665L6.07046 7.35907C6.2917 6.91659 6.40233 6.69535 6.55011 6.50363C6.68124 6.33351 6.83375 6.181 7.00388 6.04986C7.19559 5.90208 7.41684 5.79146 7.85932 5.57022L9.16675 4.9165L7.85932 4.26279C7.41684 4.04155 7.19559 3.93093 7.00388 3.78315C6.83375 3.65201 6.68124 3.4995 6.55011 3.32938C6.40233 3.13766 6.2917 2.91642 6.07046 2.47394L5.41675 1.1665ZM14.1667 9.49984L13.3741 11.085C13.1529 11.5275 13.0423 11.7488 12.8945 11.9405C12.7634 12.1106 12.6109 12.2631 12.4407 12.3943C12.249 12.542 12.0278 12.6527 11.5853 12.8739L10.0001 13.6665L11.5853 14.4591C12.0278 14.6803 12.249 14.791 12.4407 14.9388C12.6109 15.0699 12.7634 15.2224 12.8945 15.3925C13.0423 15.5842 13.1529 15.8055 13.3741 16.248L14.1667 17.8332L14.9594 16.248C15.1806 15.8055 15.2912 15.5842 15.439 15.3925C15.5701 15.2224 15.7226 15.0699 15.8928 14.9388C16.0845 14.791 16.3057 14.6804 16.7482 14.4591L18.3334 13.6665L16.7482 12.8739C16.3057 12.6527 16.0845 12.542 15.8928 12.3943C15.7226 12.2631 15.5701 12.1106 15.439 11.9405C15.2912 11.7488 15.1806 11.5275 14.9594 11.085L14.1667 9.49984Z"
        stroke="#0B3BEC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>`
    this.button.classList.add(this.api.styles.inlineToolButton)
    this.button.setAttribute('class', 'AIinlineTools')
    let label = document.createElement('span')
    label.innerText = 'AI'
    this.button.appendChild(label)

    return this.button
  }

  surround(range) {
    if (this.state) {
      this.unwrap(range)
      return
    }

    const rect = range.getBoundingClientRect()
    const selectedText = range.extractContents()
    const editorContainer = document.getElementById('editorjs-container')
    const parentRect = editorContainer.getBoundingClientRect()
    const top = rect.top - parentRect.top
    const left = rect.left - parentRect.left
    const height = rect.height

    const timelineData = {
      event: {
        text: selectedText.textContent || '',
        top: top + height + 10,
        left: left,
      },
    }

    this.api.blocks.insert('timeline', timelineData, {}, this.api.blocks.getCurrentBlockIndex() + 1)
    range.insertNode(selectedText)
  }

  wrap(range) {
    const selectedText = range.extractContents()
    const mark = document.createElement(this.tag)

    mark.classList.add(this.class)
    mark.appendChild(selectedText)
    range.insertNode(mark)

    this.api.selection.expandToTag(mark)
  }

  unwrap(range) {
    const mark = this.api.selection.findParentTag(this.tag, this.class)
    const text = range.extractContents()

    mark.remove()

    range.insertNode(text)
  }

  checkState() {
    const mark = this.api.selection.findParentTag(this.tag)

    this.state = !!mark
  }
}
