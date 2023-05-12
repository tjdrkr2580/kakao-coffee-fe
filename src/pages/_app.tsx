import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./component/Layout";
import { Pacifico } from "next/font/google";
import ThemePro from "./component/ThemePro";
import { RecoilRoot } from "recoil";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--paci",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemePro>
        <main className={pacifico.variable}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </ThemePro>
    </RecoilRoot>
  );
}
