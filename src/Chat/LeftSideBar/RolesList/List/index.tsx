'use client'
import {createChatAction} from '../../../graphql/action'
import {useTheme} from 'next-themes'
import React, {memo, useCallback} from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'
import {FixedSizeList, ListChildComponentProps} from 'react-window'
import chatBotMiniItem from './RolesItem'
import { useChatStore } from 'Chat/lib/useChatStore'


export const List = memo(function List(props: {roles: any; userId: string}) {

  const {theme} = useTheme()
  const model = useChatStore.getState().model
  const handleCreateNewChat = useCallback(async (role: any) => {
    try {
      await createChatAction({ 
        model: model!,
        title: role.title,
        userId: props.userId,
        systemPromt: role.name,
      })
    } catch (error) {
      console.error(error)
    }
  }, [])

  const Row: React.FC<ListChildComponentProps> = ({index, style}) => {
    const itemData: {
      src?: string | undefined
      title: string | undefined
      chooseRole: () => void
      directus_img: string
      id: number
    } = {
      src: props.roles[index]?.directus_img_min?.filename_disk ?? '',
      title: props.roles[index]?.title ?? 'Sample role',
      directus_img: props.roles[index]?.directus_img?.filename_disk ?? '',
      ...props.roles[index],
      chooseRole: () => handleCreateNewChat(props.roles[index]),
      id: props.roles[index]!.id,
    }
    return <div style={{...style}}>{chatBotMiniItem(itemData)}</div>
  }

  return (
    <AutoSizer>
      {({height, width}) => (
        <FixedSizeList
          className={theme === 'light' ? 'RolesWindowLight' : 'RolesWindowDark'}
          height={height}
          itemCount={props.roles.length}
          itemSize={38}
          width={width}
          style={{overflowX: 'hidden'}}
        >
          {Row}
        </FixedSizeList>
      )}
    </AutoSizer>
  )
})
