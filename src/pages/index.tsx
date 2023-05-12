import React from "react";
import HeadInfo from "./component/HeadInfo";
import { getBeverages, getPopularBeverages } from "@/utils/api";
import { homeProps } from "@/types/data";
import styled from "@emotion/styled";

const Home = ({ beverages, popularBeverages }: homeProps) => {
  return (
    <>
      <HeadInfo />
      <HomeWrapper>안녕</HomeWrapper>
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
