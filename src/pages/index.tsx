import React from "react";
import HeadInfo from "./component/HeadInfo";
import { getBeverages, getPopularBeverages } from "@/utils/api";
import { beverageType, homeProps } from "@/types/data";
import styled from "@emotion/styled";
import Card from "@/element/Card";

const Home = ({ beverages, popularBeverages }: homeProps) => {
  return (
    <>
      <HeadInfo />
      <HomeWrapper>
        <CardList>
          {beverages.map((beverage: beverageType) => (
            <Card key={beverage.beverageId} beverage={beverage} />
          ))}
        </CardList>
      </HomeWrapper>
    </>
  );
};

export default Home;

const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  width: 95vw;
  max-width: 120rem;
  height: 100%;
  margin: 0 auto;
`;

const CardList = styled.section`
  margin: 0 auto;
  gap: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export async function getServerSideProps() {
  const beverages = await getBeverages();
  const popularBeverages = await getPopularBeverages();
  return {
    props: {
      beverages,
      popularBeverages,
    },
  };
}
