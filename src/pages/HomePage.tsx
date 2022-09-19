import styled from "styled-components";
import { Link } from "react-router-dom";
import { FastServices, FoodNearGallery } from "../components";

export const HomePage = () => {
  return (
    <Wrapper>
      <FastServices />
      <FoodNearGallery />
      <main>
        <h2>HomePage</h2>
        <Link to="/brand">
          <h4>BrandPag</h4>
        </Link>
        <Link to="/category">
          <h4>CategoryPage</h4>
        </Link>
        <Link to="/path-to-direction">
          <h4>SearchPage</h4>
        </Link>
        <Link to="/card">
          <h4>CreditCardPage</h4>
        </Link>
        <Link to="/join">
          <h4>CooperationPage</h4>
        </Link>
        <Link to="/asdasf">
          <h4>ErrorPage</h4>
        </Link>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  main {
    // min-hight: 50vh;
    // font-size: 2rem;
  }
`;
