import styled from "@emotion/styled";
import React from "react";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RootWrapper>
      <Header />
      {children}
    </RootWrapper>
  );
};

const RootWrapper = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
`;

export default Layout;
