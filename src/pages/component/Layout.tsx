import styled from "@emotion/styled";
import React from "react";
import Header from "./Header";
import { PageMargin } from "@/styles/mixins";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RootWrapper>
      <Header />
      <PageMargin />
      {children}
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
