import styled from "styled-components";

const NavBar = () => {
  return <h1>NavBar</h1>;
};

const Wrapper = styled.main`
  .header-layout[data-v-5cc31767] {
    padding: 30px 7.5%;
    margin: 0 auto;
  }
  .header-layout__top[data-v-5cc31767] {
    display: flex;
  }
  .header-layout__left[data-v-5cc31767] {
    flex: 1 0 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  a {
    background-color: transparent;
  }
  a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
  }
  .header-layout__center[data-v-5cc31767] {
    flex: 0 1 406px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
  }
  .header-search[data-v-100b3502] {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    flex-direction: column;
  }
  .header-search__input[data-v-100b3502] {
    height: 44px;
    background: var(--helio-color-secondaryBackground);
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    width: 100%;
  }
  .header-layout__right[data-v-5cc31767] {
    flex: 1 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .header-actions-desktop[data-v-24fe238e] {
    transition: 0.3s;
    display: flex;
    height: 44px;
    position: relative;
  }
  .helio-button.primary[data-v-6eb16235] {
    --button-loader-color: var(--helio-color-buttonText);
    position: relative;
    text-align: center;
    padding-left: var(--helio-space-M);
    padding-right: var(--helio-space-M);
    height: 48px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-family: "Gotham", "Arial", "Helvetica Neue", Helvetica, sans-serif;
    font-display: fallback;
    font-weight: 700;
    background-color: var(--helio-color-accent);
    color: var(--helio-color-buttonText);
    box-shadow: 0 3px 5px 0 var(--helio-color-shadow);
    border: none;
    cursor: pointer;
    text-decoration: none;
  }
  .header-actions-desktop__button[data-v-24fe238e] {
    min-width: 138px;
    white-space: nowrap;
  }
  button,
  input {
    overflow: visible;
    overflow-x: visible;
    overflow-y: visible;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button {
    appearance: auto;
    writing-mode: horizontal-tb !important;
    font-style: ;
    font-variant-ligatures: ;
    font-variant-caps: ;
    font-variant-numeric: ;
    font-variant-east-asian: ;
    font-weight: ;
    font-stretch: ;
    font-size: ;
    font-family: ;
    text-rendering: auto;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    box-sizing: border-box;
    background-color: buttonface;
    margin: 0em;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonborder;
    border-image: initial;
  }
`;

export default NavBar;
