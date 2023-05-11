import styled from "@emotion/styled";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <RootWrapper>{children}</RootWrapper>;
};

const RootWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export default Layout;
