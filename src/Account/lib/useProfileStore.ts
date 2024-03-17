import type {} from '@redux-devtools/extension' // required for devtools typing
import {create} from 'zustand'

interface ProfileNavButton {
  buttonId: number
  SetButtonId: (id: number) => void
}
interface PaymentModalUrl {
  paymentUrl: string
  SetPaymentUrl: (url: string) => void
}
interface PaymentPackegeModalUrl {
  paymentPackegeUrl: string
  SetPaymentPackegeUrl: (url: string) => void
}
interface ShowWordsCountByCurrentModel {
  selectedMultiplyPlanButtonId: number
  setSelectedMultiplyPlanButtonId: (value: number) => void
}
// interface SelectedPlanCategories {
//   selectedPlanCategoriesId: number
//   setSelectedPlanCategoriesId: (id: number) => void
// }
// interface PlanPayToggleButton {
//   selectedToggleButtonId: number
//   SetToggleButtonId: (id: number) => void
// }
// interface MultiplyPlanButton {
//   selectedMultiplyPlanButtonId: number
//   SetMultiplyPlanButtonId: (id: number) => void
// }

export const useProfileStore = create<ProfileNavButton & PaymentModalUrl & PaymentPackegeModalUrl & ShowWordsCountByCurrentModel>()((set) => ({
//   & SelectedPlanCategories & PlanPayToggleButton & MultiplyPlanButton
  buttonId: 1,
  SetButtonId: (id) => set({buttonId: id}),
  paymentUrl : "",
  SetPaymentUrl : (url : string) => set(() => ({paymentUrl :url})),
  paymentPackegeUrl : "",
  SetPaymentPackegeUrl : (url : string) => set(() => ({paymentUrl :url})),
  selectedMultiplyPlanButtonId: 1,
  setSelectedMultiplyPlanButtonId: (value : number) => set(() => ({selectedMultiplyPlanButtonId : value}))
  //   selectedPlanCategoriesId: 1,
  //   setSelectedPlanCategoriesId: (id) => set(() => ({selectedPlanCategoriesId: id})),
  //   selectedToggleButtonId: 1,
  //   SetToggleButtonId: (id) => set(() => ({selectedToggleButtonId: id})),
  //   selectedMultiplyPlanButtonId: 1,
  //   SetMultiplyPlanButtonId: (id) => set(() => ({selectedMultiplyPlanButtonId: id})),
}))
