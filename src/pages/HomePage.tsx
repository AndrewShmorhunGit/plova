import styled from "styled-components";
// import { Link } from "react-router-dom";
import {
  FastServices,
  FoodNearGallery,
  Partnership,
  PopularNear,
} from "../components";

export const HomePage = () => {
  return (
    <Wrapper>
      <FastServices />
      <FoodNearGallery />
      <PopularNear />
      <Partnership />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  main {
    // min-hight: 50vh;
    // font-size: 2rem;
  }
`;
