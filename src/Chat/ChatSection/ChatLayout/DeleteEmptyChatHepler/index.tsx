'use client'

import {deleteChatAction} from '../../../graphql/action'
import {useRouter} from 'next/navigation'
import {memo, useCallback, useEffect} from 'react'
interface HelperProps {
  messages: Array<{id: string; content: string; role: string}>
  chatId: string
}
// этот компонент является помощником для удаления пустого чата при выходе из него и не более
// Смысл хэлпера в том, что он будет на любой странице чата, и будет следить был ли клик по тегу "а"
// Если клик был действительно по тегу "а" и количество сообщений в чате 0 - удаляем чат
// Используй обертку с тегом "а" (он же <Link>) в любом компоненте, который влечет за собой выход из текущего чата(навигация в шапке, айтемы из историй чата, выпадашка настроек в шапке)
export const DeleteEmptyChatHelper = memo(function DeleteEmptyChatHelper(props: {
  chatId: string
  messages: Array<{id: string; content: string; role: string}>
}) {
  const router = useRouter()

  const handleDeleteChat = useCallback(
    (chatId: string) => {
      deleteChatAction(chatId).then(() => router.refresh())
    },
    [router],
  )

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement // Приведение типа target к HTMLElement
      const closestAnchor = target.closest('a') // Ищем ближайший элемент a
      if (closestAnchor instanceof HTMLAnchorElement && props.messages.length <= 1) {
        handleDeleteChat(props.chatId)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [props.messages.length, props.chatId])
  return <></>
})
