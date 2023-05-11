import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Kakao Coffee</h1>
      <HeaderLists>
        <Link href="/">네비1</Link>
        <Link href="/coffee">네비2</Link>
      </HeaderLists>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100vw;
  max-width: 128rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  left: 0;
  top: 0;
  height: 5rem;
  padding: 0.8rem 0;
`;

const HeaderLists = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export default Header;
