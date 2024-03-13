import {useVirtualizer} from '@tanstack/react-virtual'
import {type Message} from 'ai/react'
import AiMessage from './messages/AiMessage'
import MyMessage from './messages/MyMessage'
import {useTheme} from 'next-themes'
import {memo, useCallback, useEffect, useRef, useState} from 'react'
import {useWindowSize} from 'usehooks-ts'
import {ChatSettingsModal} from '../ChatSettingsModal'
import PromtMessage from "./messages/PromptMessage"
import { ScrollToEndButton } from './buttons/ScrollToEndButton'
export const DynamicChat = memo(function DynamicChat(props: {
  messages: NonNullable<Message[]>
  isLoading: boolean
  stop(): void
  reload(): void
  userId: string
  
}) {
  const {width} = useWindowSize()
  const parentRef = useRef<HTMLDivElement>(null)
  const {theme} = useTheme()
  const [scrollContainerHeight, setScrollContainerHeight] = useState<number>(0)
  const [scrollTop, setScrollTop] = useState<number>(0)
  const [_showScrollToEnd, setShowScrollToEnd] = useState<boolean>(false)

  // const [showFadeOutEffect, setShowFadeOutEffect] = useState(false);
  const count = props.messages?.length
  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 45,
  })

  const items = virtualizer.getVirtualItems()

  const scrollToEnd = useCallback(() => {
    if (virtualizer && props.messages && props.messages.length > 0) {
      virtualizer.scrollToIndex(props.messages.length - 1)
    }
  }, [virtualizer, props.messages])

  const checkShowScrollToEnd = useCallback(() => {
    return scrollContainerHeight - scrollTop > 260
  }, [scrollContainerHeight, scrollTop])

  useEffect(() => {
    if (parentRef.current) {
      setScrollContainerHeight(parentRef.current.getBoundingClientRect().height)
    }

    let timerId: NodeJS.Timeout | number
    timerId = setTimeout(() => {
      scrollToEnd()
    }, 200)

    return () => clearTimeout(timerId)
  }, [scrollToEnd, props.messages])

  useEffect(() => {
    if (parentRef.current) {
      let newScrollTop = parentRef.current.scrollTop
      setScrollTop(newScrollTop)
    }
    setShowScrollToEnd(checkShowScrollToEnd)
  }, [checkShowScrollToEnd])

  // TODO: Merge AiMessage & MyMessage
  // TODO: Add markdown parser for message
  const onScroll = () => {
    if (parentRef.current) {
      const currentScrollTop = parentRef.current.scrollTop
      // TODO : fix "showFadeOutEffect" feature on the second iteration
      const scrollHeight = parentRef.current.scrollHeight
      const clientHeight = parentRef.current.clientHeight
      const currentScrollBottom = scrollHeight - currentScrollTop - clientHeight
      // setScrollTop(currentScrollTop)
      setShowScrollToEnd(currentScrollBottom > 60)
      // setShowFadeOutEffect(currentScrollBottom > 50);
    }
  }

  useEffect(() => {
    const currentParent = parentRef.current
    if (currentParent) {
      currentParent.addEventListener('scroll', onScroll)
    }
    return () => {
      if (currentParent) {
        currentParent.removeEventListener('scroll', onScroll)
      }
    }
  }, [scrollContainerHeight])

  const mockAiModelsData = [
    {
      id: 'off',
      title: 'Отключено',
    },
    {
      id: 'IMI',
      title: 'IMI',
    },
    {
      id: 'DALL',
      title: 'DALL•E v3',
    },
    {
      id: 'Midj',
      title: 'Midjourney',
    },
  ]

  return (
    <div className="size-full md:relative">
      <div
        ref={parentRef}
        className="List"
        style={{
          height: '100%',
          width: '100%',
          overflowY: 'auto',
          contain: 'strict',
          paddingRight: width > 1280 ? '9px' : width > 980 ? '9px' : width > 550 ? '3px' : '3px',
          overflowX: 'hidden',
        }}
        id={theme === 'light' ? 'chatWindowLight' : 'chatWindowDark'}
      >
        <div
          style={{
            height: virtualizer.getTotalSize(),
            width: '100%',
            position: 'relative',
          }}
        >
          <div
            // id={showFadeOutEffect ? "fadeOutEffect" : ""}
            id="fadeOutEffect"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${items[0]?.start ?? 0}px)`,
            }}
          >
            {/* модалка на портале как и в ноушене */}
            <ChatSettingsModal />
            {items.map((virtualRow) => (
              <div key={virtualRow.key} data-index={virtualRow.index} ref={virtualizer.measureElement} className="flex">
                {props.messages[virtualRow.index]?.role === 'assistant' ? (
                  <AiMessage
                    stop={stop}
                    reload={() => props.reload()}
                    key={props.messages[virtualRow.index]?.id}
                    message={props.messages[virtualRow.index]!}
                    isLastMessage={
                      props.messages[virtualRow.index]?.id === props.messages[props.messages.length - 1]?.id
                    }
                    isLoading={props.isLoading}
                    userId={props.userId}
                  />
                ) : props.messages[virtualRow.index]?.role === 'user' ? (
                  <MyMessage
                    key={props.messages[virtualRow.index]?.id}
                    id={props.messages[virtualRow.index]!.id}
                    title={props.messages[virtualRow.index]!.content}
                  />
                ) 
                  :
                  <PromtMessage proptTitle={props.messages[virtualRow.index]!.content} promtImage={props.messages[virtualRow.index]!.ui as string}/>
                }
                
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* {showFadeOutEffect && <div className="fadeOutEffect"></div>} */}
      {_showScrollToEnd && props.messages.length > 15 && (
        <ScrollToEndButton callBack={scrollToEnd} />
      )}
    </div>
  )
})
