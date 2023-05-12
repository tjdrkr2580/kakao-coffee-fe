import { atom } from "recoil";
import { v4 } from "uuid";

export const isDarkModeState = atom<boolean>({
  key: "isDarkMode",
  default: false,
});

export const modalState = atom<boolean>({
  key: `state${v4()}`,
  default: true,
});

export const modalTypeState = atom<string>({
  key: `state${v4()}`,
  default: "",
});
