import styled from "styled-components";

const FoodNearGallery = () => {
  return <Wrapper>FoodNearGallery</Wrapper>;
};

const Wrapper = styled.main`
  .city-highlights[data-v-8eb533ce] {
    width: 100%;
  }
  .city-highlights__curve[data-v-8eb533ce] {
    position: absolute;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
  img {
    border-style: none;
  }
  .city-highlights__curve--mobile[data-v-8eb533ce] {
    display: none;
  }
  @media (min-width: 1025px) .landing-highlights[data-v-8eb533ce] {
    padding-top: var(--helio-space-2XL);
  }
  .landing-highlights[data-v-8eb533ce] {
    position: relative;
  }
  .container {
    margin: 0 auto;
    max-width: 1120px;
    padding: 0;
    position: relative;
    width: 100%;
    box-sizing: border-box;
  }

  // element.style {
  //   --background-image: url(https\:\/\/res\.cloudinary\.com\/glovoapp\/image\/fetch\/\/q_auto\/https\:\/\/glovoapp\.com\/images\/svg\/highlights\.svg);
  // }

  .highlights-title[data-v-2da59028] {
    color: var(--helio-color-primaryText);
    font-size: 20px;
    line-height: 1.4;
    font-weight: 400;
    width: 100%;
    text-align: center;
    margin: 0;
  }
  h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  .collection {
    padding: 10px 0;
    flex-wrap: wrap;
  }
  .cols {
    display: flex;
    flex-wrap: wrap;
    margin-left: -0.75%;
    margin-right: -0.75%;
  }
  .landing-highlights__view-all[data-v-62430906] {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin: 0 auto 100px;
    text-align: center;
    cursor: pointer;
    background: var(--helio-color-softAccentBackground);
    border-radius: 34px;
    padding: 8px 16px;
    color: var(--helio-color-accent);
    font-size: 18px;
    line-height: 1.4;
    font-weight: 700;
  }
`;

export default FoodNearGallery;
