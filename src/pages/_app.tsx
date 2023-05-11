import "@/styles/globals.css";
import styled from "@emotion/styled";
import type { AppProps } from "next/app";
import Layout from "./component/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
