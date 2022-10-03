import styled from "styled-components";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export const BrandGrid = () => {
  return (
    <Wrapper>
      <div className="product-body">
        <div className="grid-title">
          <div className="brand-title">
            <h1>Brand name</h1>
            <div className="icons">
              <p>
                <strong>🕔</strong>
                {`delivery time`}'
              </p>
              <p>
                <strong>🚀</strong>
                {`deliv price`} $
              </p>
              <p>
                <strong>👍</strong>
                {`rate`} %
              </p>
            </div>
            <p className="message">message</p>
          </div>
        </div>
        <div className="grid-chart">
          <h1>Chart</h1>
        </div>
        <div className="grid-sections">
          <h3 className="sections-title">🍱 sections</h3>
          <div className="menu-container">
            <p className="menu">menu</p>
            <strong className="chevron center">
              <BsChevronDown />
            </strong>
          </div>
          <div className="menu-container">
            <p className="menu">longname menu</p>
            <strong className="chevron center">
              <BsChevronDown />
            </strong>
          </div>
          <div className="sub-menu-container hide">
            <p className="sub-menu">sub-menu</p>
            <p className="sub-menu">sub-menu longname</p>
            <p className="sub-menu">sub-menu</p>
            <p className="sub-menu">sub-menu longname</p>
            <p className="sub-menu">sub-menu</p>
          </div>
          <div className="menu-container">
            <p className="menu">menu</p>
            <strong className="chevron center">
              <BsChevronUp />
            </strong>
          </div>
          <div className="sub-menu-container">
            <p className="sub-menu">sub-menu</p>
            <p className="sub-menu">sub-menu longname</p>
            <p className="sub-menu">sub-menu</p>
            <p className="sub-menu">sub-menu longname</p>
            <p className="sub-menu">sub-menu</p>
          </div>
          <div className="menu-container">
            <p className="menu">menu</p>
          </div>
          <div className="menu-container">
            <p className="menu">menu</p>
          </div>
          <div className="menu-container">
            <p className="menu">menu</p>
          </div>
          <div className="menu-container">
            <p className="menu">menu</p>
          </div>
          <div className="menu-container">
            <p className="menu">menu</p>
          </div>
          <div className="menu-container">
            <p className="menu">menu</p>
          </div>
          <div className="menu-container">
            <p className="menu">menu</p>
          </div>
        </div>
        <div className="grid-products">
          <form action="onSubmit" className="search-form">
            <label>🔍</label>
            <input
              type="text"
              placeholder="Search in BrandName"
              className="search-input"
            />
          </form>
          <h2 className="sub-title">menu(active)</h2>
          <div className="products">
            <div className="product">
              <p>menu</p>
              <img
                src="https://res.cloudinary.com/glovoapp/image/fetch//f_auto,q_auto/https://glovoapp.com/images/image_preview_card/placeholder.png"
                alt=""
                className="product-image"
              />
            </div>
            <div className="product">
              <p>menu</p>
              <img
                src="https://res.cloudinary.com/glovoapp/image/fetch//f_auto,q_auto/https://glovoapp.com/images/image_preview_card/placeholder.png"
                alt=""
                className="product-image"
              />
            </div>
            <div className="single-product">
              <div className="sp-div1">
                <p className="single-product-image">image</p>
                <div>
                  <h4 className="single-product-name">single product</h4>
                  <p className="single-product-description">
                    Product description. Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Pariatur, eos.
                  </p>
                </div>
              </div>
              <div className="sp-div2">
                <p className="single-product-price">price</p>
                <p className="single-product-add">➕</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="transition"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hide {
    display: none;
  }

  .sub-menu {
    background-color: #f5f5f5;
    height: auto;
    // width: 10rem;
    padding: 2rem 2rem;
    display: flex;
    cursor: pointer;
  }

  .menu-container {
    display: flex;
    border-bottom: solid 1px grey;
    cursor: pointer;
  }

  margin-top: -10.5rem;
  margin-bottom: 5rem .brand-title {
    font-size: 3.6rem;
    p {
      font-size: 2rem;
    }
    .message {
      font-size: 1.6rem;
      padding: 1.6rem 0;
    }
  }

  .icons {
    padding-top: 2rem;
    display: flex;
    gap: 2rem;
    font-size: 2rem;
  }

  strong {
    padding-right: 0.5rem;
  }

  .product-body {
    width: 87vw;
    height: auto;
    display: grid;
    grid-template-columns: 0.5fr 3fr 1.5fr;
    grid-template-rows: auto 1fr;
    padding: 0 7.5vw;
    column-gap: 1.6rem;
    row-gap: 1.6rem;
    height: auto;
  }

  .grid-title {
    min-width: 60vw;
    grid-column: 1/3;
    grid-row: 1/2;
    box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
    background: #fff;
    padding: 3rem 3rem;
    border-radius: 1rem;
  }
  .grid-chart {
    background-color: blue;
    grid-row: 1/-1;
    grid-column: 3/4;
    background-color: #fff;
    box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
    height: 45rem;
    width: 30rem;
    border-radius: 1rem;
  }
  .grid-sections {
    background-color: #fff;
    text-transform: uppercase;
    width: 18rem;
    height: 80vh;
    overflow-y: scroll;
    position: relative;
    padding-bottom: 5rem;
  }

  .transition {
    margin-bottom: -7rem;
    width: 120%;
    height: 16rem;
    background-color: #1d1d1d;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    position: absolute;
    bottom: -22rem;
    left: -10%;
  }

  .grid-products {
    background-color: #fff;
    padding: 1rem 2rem;
    height: auto;
  }

  .sections-title {
    padding: 2rem 2rem;
  }

  .menu {
    height: auto;
    width: 10rem;
    padding: 2rem 2rem;
    display: flex;
  }

  .chevron {
    padding-left: 3rem;
  }

  .search-form {
    background-color: #f5f5f5;
    padding: 1rem 0 1rem 2rem;
    border-radius: 10rem;
  }

  label {
    padding-right: 1rem;
    margin-left: -0.5rem;
  }

  .search-input {
    width: 75rem;
    font-size: 1.6rem;
    background-color: #f5f5f5;
    border: none;
  }

  .search-input:focus {
    outline: none;
  }

  .sub-title {
    padding: 2rem 0 0 3rem;
    text-transform: uppercase;
  }

  .products {
    margin-top: 3.6rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    // background-color:#f5f5f5;
    text-transform: uppercase;
  }

  .product {
    background-color: #fff;
    margin: 1rem 1rem;
    border-radius: 1rem;
    padding: 3rem 0 1rem 3rem;
    height: 16rem;
    font-weight: 700;
    font-size: 1.8rem;
    letter-spacing: 0.05rem;
    border: none;
    position: relative;
    box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
    cursor: pointer;
    transition: all 0.5s;
  }

  .product-image {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .single-product {
    height: 16rem;
    margin: 1rem 1rem;
    padding: 1rem 1rem 1rem 1rem;
    background-color: #fff;
    box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    text-transform: none;
    cursor: pointer;
    transition: all 0.5s;
  }

  .product:hover,
  .single-product:hover {
    transform: scale(1.05);
  }

  .sp-div1 {
    display: flex;
    gap: 2rem;
  }

  .sp-div2 {
    display: flex;
    justify-content: space-between;
    padding-top: 2.8rem;
  }

  .single-product-image {
    display: block;
    background-color: red;
    border-radius: 1rem;
    min-height: 9rem;
    min-width: 9rem;
  }

  .single-product-name {
    padding-bottom: 1rem;
    font-size: 1.6rem;
    font-weight: 500;
  }

  .single-product-description {
    font-size: 1.4rem;
  }
`;
