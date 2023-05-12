import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./component/Layout";
import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "@/styles/theme";
import { Pacifico } from "next/font/google";
import { Provider } from "react-redux";
import store, { RootState } from "../store/store";
import { useSelector } from "react-redux";
import ThemePro from "./component/ThemePro";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--paci",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemePro>
        <main className={pacifico.variable}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </ThemePro>
    </Provider>
  );
}
