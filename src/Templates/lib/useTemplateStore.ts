// const [isFavoriteTemp, setIsFavoriteTemp] = useState<boolean>(false);
// const [isActiveSubPage, setIsActiveSubPage] = useState<string>("generation")
// const chooseFavoriteTemp = () => {
//     setIsFavoriteTemp(!isFavoriteTemp)
// }
// const chooseActiveSubPage = (activeSubPage : string) => {
//     setIsActiveSubPage(activeSubPage)
// }

import type {} from '@redux-devtools/extension' // required for devtools typing
import { GetRolesQuery, GetTemplateCategoriesQuery } from 'generated';

import {create} from 'zustand'

type TemplateSubPageBtn = {
  activeSubPage: string
  setIsActiveSubPage: (pageName: string) => void
}
type TemplateCategories = {
  templates: GetTemplateCategoriesQuery | null
  setTemplates: (templates: GetTemplateCategoriesQuery) => void
}
type Role = {
  roles: GetRolesQuery['roles'] | null
  setRoles: (roles: GetRolesQuery['roles']) => void
}

type Answer = {
  answer: string
  setAnswer: (value: string) => void
  showAnswerHelper: boolean
  setShowAnswerHelper: (show: boolean) => void
  canIgnoreHelpers: boolean
  setCanIgnoreHelpers: (ignore: boolean) => void
}
type Question = {
  question: string
  setQuestion: (value: string) => void
  showQuestionHelper: boolean
  setShowQuestionHelper: (show: boolean) => void
}
type Modal = {
  showModal: boolean
  setShowModal: (show: boolean) => void
}
export const useTemplateStore = create<TemplateSubPageBtn & TemplateCategories & Role & Answer & Question & Modal>()(
  (set) => ({
    activeSubPage: 'generation',
    setIsActiveSubPage: (pageName) => set(() => ({activeSubPage: pageName})),
    roles: null,
    setRoles: (roles) => set(() => ({roles: roles})),
    templates: null,
    setTemplates: (templates) => set(() => ({templates: templates})),
    answer: '',
    setAnswer: (value) => set(() => ({answer: value})),
    showAnswerHelper: false,
    setShowAnswerHelper: (show) => set(() => ({showAnswerHelper: show})),
    question: '',
    setQuestion: (value) => set(() => ({question: value})),
    showQuestionHelper: true,
    setShowQuestionHelper: (show) => set(() => ({showQuestionHelper: show})),
    showModal: false,
    setShowModal: (value) => set(() => ({showModal: value})),
    canIgnoreHelpers: false,
    setCanIgnoreHelpers: (value) => set(() => ({canIgnoreHelpers: value})),
  }),
)
