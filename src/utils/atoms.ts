import { atom } from "recoil";

export const isDarkModeState = atom<boolean>({
  key: "isDarkMode",
  default: false,
});
