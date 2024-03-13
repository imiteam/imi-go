import type {} from '@redux-devtools/extension' // required for devtools typing
import {create} from 'zustand'

interface ShowSideSheet {
  isSheetOpen: boolean
  setSheetOpen: (isOpen: boolean) => void
}

interface ShowChatSettings {
  isShowChatSettings: boolean
  setShowChatSettings: () => void
  setHideChatSettings: () => void
  activeModalSubPage: string
  setActiveModalSubPage: (value: string) => void
  getInstructions: boolean
  setGetInstructions: (value: boolean) => void
}

interface CurrentRoleIdStore {
  currentRoleId: number
  setCurrentRoleId: (id: number) => void
}

interface HideAsideStore {
  hideAside: boolean
  setHideAside: () => void
}

interface ChatModels {
  activeModel: string
  setActiveModel: (value: string) => void
}

interface CurrentChat {
  chatId: string | undefined
  description: string | undefined
  icon: string | undefined
  model: string | undefined
  system_promt: string | undefined
  title: string | undefined
}

// TODO : change to tabs and handle it with router!

interface IsActiveSubPageStore {
  isActiveSubPage: string
  setIsActiveSubPage: (state: string) => void
}

interface RoleSearchStore {
  roleSearch: string | undefined
  setRoleSearch: (state: string) => void
}

interface HistorySearchStore {
  historySearch: string | undefined
  setHistorySearch: (state: string) => void
}

export const useChatStore = create<
  CurrentRoleIdStore &
    HideAsideStore &
    IsActiveSubPageStore &
    CurrentChat &
    RoleSearchStore &
    HistorySearchStore &
    ShowSideSheet &
    ShowChatSettings &
    ChatModels
>()((set) => ({
  chatId: undefined,
  description: undefined,
  icon: undefined,
  model: 'gpt-3.5',
  system_promt: undefined,
  title: 'Новый чат',
  currentRoleId: 1,
  setCurrentRoleId: (id) => set(() => ({currentRoleId: id})),
  hideAside: false,
  setHideAside: () =>
    set((prev) => {
      return {hideAside: !prev.hideAside}
    }),
  isActiveSubPage: 'chats',
  setIsActiveSubPage: (state) => set(() => ({isActiveSubPage: state})),
  roleSearch: undefined,
  setRoleSearch: (state: string) => set(() => ({roleSearch: state})),
  historySearch: undefined,
  setHistorySearch: (state: string) => set(() => ({historySearch: state})),
  isSheetOpen: false,
  setSheetOpen: (isOpen: boolean) => set({isSheetOpen: isOpen}),
  isShowChatSettings: false,
  setShowChatSettings: () => set({isShowChatSettings: true}),
  setHideChatSettings: () => set({isShowChatSettings: false}),
  activeModalSubPage: 'basic',
  setActiveModalSubPage: (value: string) => set({activeModalSubPage: value}),
  activeModel: 'off',
  setActiveModel: (value: string) => set({activeModel: value}),
  getInstructions: false,
  setGetInstructions: (value: boolean) => set({getInstructions: value}),
}))
