import styled from "styled-components";

const Footer = () => {
  return <h1>Footer</h1>;
};

const Wrapper = styled.main`
  .app-footer[data-v-f7231328] {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: var(--helio-primitiveColor-grey900);
    z-index: 9;
    border-image-source: var(--footer-wave-desktop);
    background-clip: padding-box;
    border-image-slice: 68 0 0;
    border-top: 68px solid transparent;
  }
`;
export default Footer;
