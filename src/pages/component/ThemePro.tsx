import { RootState } from "@/store/store";
import { darkTheme, lightTheme } from "@/styles/theme";
import { ThemeProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import { ReactNode } from "react";

const ThemePro = ({ children }: { children: ReactNode }) => {
  const darkmode = useSelector((state: RootState) => state.theme.darkmode);
  return (
    <ThemeProvider theme={darkmode === true ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemePro;
