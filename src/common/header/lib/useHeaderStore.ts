// import type {} from '@redux-devtools/extension' // required for devtools typing
import { create } from "zustand";

interface ShowMobileMenu {
  showMobileMenu: boolean;
  setShowMobileMenu: (show: boolean) => void;
}

export const useHeaderStore = create<ShowMobileMenu>()((set) => ({
  showMobileMenu: false,
  setShowMobileMenu: (show) => set(() => ({ showMobileMenu: show })),
}));
