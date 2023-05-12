import Button from "@/element/Button";
import { RootState } from "@/store/store";
import { toggleDarkmode } from "@/store/themeReducer";
import styled from "@emotion/styled";
import Link from "next/link";
import { BsSun, BsMoon } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const darkmode = useSelector((state: RootState) => state.theme.darkmode);
  const handleToggle = () => {
    dispatch(toggleDarkmode());
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
        <li onClick={handleToggle}>
          {darkmode === false ? <BsSun size={22} /> : <BsMoon size={22} />}
        </li>
        <Button>시작하기</Button>
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
