import styled from "styled-components";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export const BrandGrid = () => {
  return (
    <Wrapper>
      <div className="product-body">
        <div className="grid-title">
          <div className="brand-title">
            <h1>KFC</h1>
            <div className="icons">
              <p>
                <strong>🕔</strong>
                {`delivery time`}'
              </p>
              <p>
                <strong>
                  <img
                    src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/glyphs/store-delivery-light.svg"
                    alt=""
                  />
                </strong>
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
          <div className="cart">
            <h2 className="empty-chart-title center">Your plova</h2>
            <img
              className="empty-chart-image"
              src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/astronaut-grey-scale.svg"
              alt="spaceman around the food"
            />
            <p className="empty-chart-paragraph center">
              You've not added any products yet. When you do, you'll see them
              here!
            </p>
          </div>
          <div className="empty-chart-bottom center">
            <img
              className="chart-bottom-image"
              src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/feedback/info.svg"
              alt=""
            />
            <p>
              Reach <span>5,00 $</span> to save <span>1,00 $</span> in fees!
            </p>
          </div>
        </div>
        <div className="grid-sections">
          <div className="sections center">
            <img
              className="squares"
              src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/sections-square.svg"
              alt="squares"
            />
            <h3 className="sections-title">sections</h3>
          </div>
          <div className="menu-container">
            <p className="menu">menu</p>
            <strong className="chevron center">
              <BsChevronDown />
            </strong>
          </div>
          <div className="menu-container">
            <p className="menu">long name menu</p>
            <strong className="chevron center">
              {/* { toggle ? <BsChevronDown /> : <BsChevronUp /> ? } */}
              <BsChevronDown />
            </strong>
          </div>
          <div className={`sub-menu-container hide`}>
            <p className="sub-menu">sub-menu</p>
            <p className="sub-menu">sub-menu long name</p>
            <p className="sub-menu">sub-menu</p>
            <p className="sub-menu">sub-menu long name</p>
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
    padding: 2rem 2rem;
    display: flex;
    cursor: pointer;
  }

  .menu-container {
    display: flex;
    border-bottom: solid 1px grey;
    cursor: pointer;
  }

  margin-top: -11rem;
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
    font-family: "Gotham Office";
    font-weight: bold;
  }

  .product-body {
    width: 182.25rem;
    height: auto;
    display: grid;
    grid-template-columns: 0.5fr 3fr 1.5fr;
    grid-template-rows: auto 1fr;
    padding: 0 13.1rem;
    column-gap: 2rem;
    row-gap: 1.6rem;
    height: auto;
  }

  .grid-title {
    min-width: 55.5rem;
    min-height: 20.5rem;
    grid-column: 1/3;
    grid-row: 1/2;
    box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
    background: #fff;
    padding: 3rem 4rem;
    border-radius: 1rem;
  }

  .grid-chart {
    background-color: blue;
    grid-row: 1/-1;
    grid-column: 3/4;
    background-color: #fff;
    box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
    height: 50rem;
    width: 32.5rem;
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

  .grid-sections::-webkit-scrollbar {
    width: 0;
  }

  .transition {
    display: block;
    width: 110%;
    height: 15rem;
    background-color: #1d1d1d;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    margin: 2rem -10rem -5rem -10rem;
  }

  .grid-products {
    background-color: #fff;
    padding: 1rem 2rem;
    height: 75vh;
    overflow-y: scroll;
  }

  .grid-products::-webkit-scrollbar {
    width: 0;
  }

  .sections {
    display: flex;
    padding: 2rem;
    margin-left: -40%;
    text-transform: capitalize;
    color: #00a082;
    font-size: 1.2rem;
  }

  .squares {
    height: 1.4rem;
    width: 1.4rem;
    margin-right: 0.4rem;
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
    // margin-left: -0.5rem;
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

  .cart {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    // padding-top: 4rem;
    padding: 4rem 4rem 4.6rem 4rem;
    min-height: 40rem;
  }

  .empty-chart-paragraph {
    font-size: 1.8rem;
    text-align: center;
    font-weight: 400;
  }

  .empty-chart-image {
    display: flex;
  }

  .empty-chart-bottom {
    height: 6rem;
    padding: 0 1rem 2rem 1rem;
    font-size: 1.35rem;
    font-weight: 300;
    border-top: 4px solid #e9f8f5;
    letter-spacing: 0.05rem;
  }

  .chart-bottom-image {
    height: 1.6rem;
    padding-right: 0.4rem;
  }

  h1 {
    font-size: 4.8rem;
  }

  h2 {
    font-size: 3.2rem;
  }
`;
