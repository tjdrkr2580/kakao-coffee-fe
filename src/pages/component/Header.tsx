import Button from "@/element/Button";
import { isDarkModeState, modalState } from "@/utils/atoms";
import styled from "@emotion/styled";
import Link from "next/link";
import { BsSun } from "react-icons/bs";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalTypeState } from "../../utils/atoms";

const Header = () => {
  const [darkmode, setDarkmode] = useRecoilState(isDarkModeState);
  const setModal = useSetRecoilState(modalState);
  const setModalType = useSetRecoilState(modalTypeState);
  const toggleMode = () => {
    setDarkmode(!darkmode);
    window.localStorage.setItem("isDarkmode", String(darkmode));
  };
  const onloginModal = () => {
    setModalType("sign");
    setModal(true);
  };
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
        <li onClick={toggleMode}>
          <BsSun size={22} />
        </li>
        <Button onClick={onloginModal}>로그인</Button>
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
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  height: 7rem;
  padding: 0.8rem 0;
  backdrop-filter: 1rem;
  h1 {
    font-family: var(--paci);
    font-size: 2.65rem;
  }
`;

const HeaderLists = styled.ul`
  display: flex;
  gap: 1.8rem;
  align-items: center;
  li {
    cursor: pointer;
    a {
      font-size: 1.45rem;
    }
  }
`;

export default Header;
