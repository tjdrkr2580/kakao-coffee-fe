import styled from "@emotion/styled";
import React from "react";
import Header from "./Header";
import { PageMargin } from "@/styles/mixins";
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import { useRecoilValue } from "recoil";
import { modalState } from "@/utils/atoms";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isModal = useRecoilValue(modalState);
  return (
    <RootWrapper>
      <Header />
      <PageMargin />
      {children}
      <AnimatePresence>{isModal === true && <Modal />}</AnimatePresence>
    </RootWrapper>
  );
};

const RootWrapper = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  padding: 0 1.2rem;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  li > a {
    color: ${(props) => props.theme.textColor};
  }
`;

export default Layout;
