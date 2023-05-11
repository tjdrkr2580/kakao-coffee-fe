import Button from "@/element/Button";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Kakao Coffee</h1>
      <HeaderLists>
        <li>
          <Link href="/">네비1</Link>
        </li>
        <li>
          <Link href="/coffee">네비2</Link>
        </li>
        <Button>로그인</Button>
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
  height: 7rem;
  padding: 0.8rem 0;

  h1 {
    font-size: 2.65rem;
  }
`;

const HeaderLists = styled.ul`
  display: flex;
  gap: 1.8rem;
  align-items: center;
  li {
    a {
      font-size: 1.45rem;
    }
  }
`;

export default Header;
