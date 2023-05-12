import { darkTheme, lightTheme } from "@/styles/theme";
import { isDarkModeState } from "@/utils/atoms";
import { ThemeProvider } from "@emotion/react";
import { ReactNode, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

const ThemePro = ({ children }: { children: ReactNode }) => {
  const isDarkmode = useRecoilValue(isDarkModeState);
  const setDarkmode = useSetRecoilState(isDarkModeState);
  useEffect(() => {
    if (window.localStorage.getItem("isDarkmode") === "false") {
      setDarkmode(true);
    } else {
      setDarkmode(false);
    }
  }, []);
  return (
    <ThemeProvider theme={isDarkmode === true ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemePro;
