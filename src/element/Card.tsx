import { beverageType } from "@/types/data";
import styled from "@emotion/styled";

const Card = ({ beverage }: { beverage: beverageType }) => {
  return (
    <CardWrapper>
      <h1>{beverage?.beverageName}</h1>
      <span>{beverage?.beverageCost} 원</span>
    </CardWrapper>
  );
};

const CardWrapper = styled.section`
  cursor: pointer;
  width: 20rem;
  height: 13rem;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.8rem;
  transition: 0.15s filter, 0.15s transform;
  justify-content: space-between;
  border-top: 0.6rem solid ${(props) => props.theme.textColor};
  border-right: 0.4rem solid ${(props) => props.theme.textColor};
  h1 {
    color: ${(props) => props.theme.coffeeColor};
    font-size: 2.3rem;
  }
  span {
    text-align: right;
    font-size: 1.6rem;
    font-weight: 700;
    color: ${(props) => props.theme.coffeeColor};
  }
  &:hover {
    filter: brightness(85%);
    transform: scale(1.05);
  }
`;

export default Card;
