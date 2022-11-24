import styled from "styled-components";
import ratingExcellent from "../images/common/ratingExcellent.png";
import { showDollarPrice } from "../units/functions";
// import { useSearchBrandDataQuery } from "../store/plova/plova.api";
import { chornomorkaMenu } from "../units/menu/chornomorkaMenu";
const data = chornomorkaMenu;

export const BrandGrid = () => {
  // const { isLoading, isError, storeData } =
  //   useSearchBrandDataQuery("BigMenuDataSet.ts");

  return (
    <Wrapper>
      <div className="container-products">
        <div className="product-body">
          <div className="grid-title">
            <div className="brand-title">
              <h1>{data.brandName}</h1>
              <div className="icons">
                <div className="del-icon-container center">
                  <img
                    className="del-icon"
                    src="https://res.cloudinary.com/glovoapp/w_22,h_22,c_pad,b_transparent,f_auto,q_auto:low,dpr_2.0/filters/sorting/near_me_light"
                    alt=""
                  />
                  <p className="icons-p">{`${data.deliveryTime1}-${data.deliveryTime2}'`}</p>
                </div>
                <div className="del-icon-container center">
                  <img
                    className="del-icon"
                    src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/glyphs/store-delivery-light.svg"
                    alt=""
                  />
                  <p className="icons-p">
                    {/* {showDollarPrice(data.deliveryPrice)} $ */}
                    {showDollarPrice(10.35)} $
                  </p>
                </div>
                <div className="del-icon-container center">
                  <img className="del-icon" src={ratingExcellent} alt="" />
                  <p className="icons-p"> {data.rate}%</p>
                </div>
              </div>
              <p className="message">{data.message}</p>
            </div>
          </div>
          <div className="grid-chart">
            <div className="chart">
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
            {data.menu.map((item, index) => {
              return (
                <div
                  className="menu-container"
                  onClick={() =>
                    console.log(`clicked ${item.category.categoryName}`)
                  }
                >
                  <p className="menu">{item.category.categoryName}</p>
                </div>
              );
            })}
          </div>
          <div className="grid-products">
            <form action="onSubmit" className="search-form">
              <label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="15"
                  fill="none"
                >
                  <circle
                    cx="6"
                    cy="6.721"
                    r="5"
                    stroke="#9B9B9B"
                    stroke-width="1.6"
                  />
                  <path
                    stroke="#9B9B9B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.6"
                    d="M9.396 10.723L12 13.72"
                  />
                </svg>
              </label>
              <input
                type="text"
                placeholder="Search in 'BrandName'"
                className="search-input"
              />
            </form>
            <div className="products">
              {data.menu.map((item, index) => {
                return (
                  <div
                    className="product-category"
                    onClick={() =>
                      console.log(`clicked ${item.category.categoryName}`)
                    }
                  >
                    <p className="category-name">
                      {item.category.categoryName}
                    </p>
                    <div className="product-image-div">
                      <img
                        className="product-category-image"
                        src={item.category.categoryImage}
                        alt=""
                      />
                      <img
                        className="arrow"
                        src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/image_preview_card/arrow.svg"
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}

              {/* <div className="single-product">
              <div className="sp-div1">
                <div className="single-product-image"></div>
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
                <div className="single-product-add">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    fill="none"
                  >
                    <circle cx="12.059" cy="12" r="12" fill="#E9F8F5" />
                    <path
                      fill="#00A082"
                      d="M12.059 6.2a1 1 0 01.993.884l.007.116V11h3.8a1 1 0 01.993.884l.007.116a1 1 0 01-.884.993L16.86 13h-3.8v3.8a1 1 0 01-.884.994l-.116.006a1 1 0 01-.993-.883l-.007-.117V13h-3.8a1 1 0 01-.993-.883L6.259 12a1 1 0 01.883-.993L7.26 11h3.8V7.2a1 1 0 01.883-.993l.117-.007z"
                    />
                  </svg>
                </div>
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
            </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="transition"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: -10rem;

  strong {
    padding-right: 0.5rem;
    font-family: "Gotham Office";
    // font-weight: 800;
    color: black;
  }

  .product-body {
    max-width: 156rem;
    height: auto;
    display: grid;
    grid-template-columns: 0.5fr 4.25fr 1.5fr;
    grid-template-rows: auto 1fr;
    column-gap: 1rem;
    row-gap: 1.6rem;
    height: auto;
  }

  .grid-title {
    max-width: 109rem;
    max-height: 20.7rem;
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
    height: 48rem;
    width: 32rem;
    border-radius: 1rem;
  }
  .grid-sections {
    background-color: #fff;
    text-transform: uppercase;
    width: 17.5rem;
    height: 80rem;
    overflow-y: scroll;
    padding-bottom: 5rem;
  }

  .grid-products {
    background-color: #fff;
    padding: 1rem 0rem 0rem 0rem;
    height: 90rem;
    max-width: 120rem;
    overflow-y: scroll;
  }

  .grid-sections::-webkit-scrollbar {
    width: 0;
  }

  .grid-products::-webkit-scrollbar {
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

  .brand-title {
    .message {
      font-size: 1.4rem;
      font-weight: 500;
      padding: 2rem 0rem;
      color: #1aa98f;
    }

    h1 {
      padding-top: 0.2rem;
    }
  }

  .icons {
    padding-top: 2rem;
    display: flex;
    gap: 2rem;
  }

  .del-icon-container {
    height: 2.6rem;
    p {
      letter-spacing: 0.1rem;
      font-size: 1.4rem;
      font-weight: 400;
    }
  }

  .del-icon {
    height: 2.8rem;
    padding-right: 0.8rem;
  }

  .sections {
    display: flex;
    padding: 1.6rem;
    margin-left: -6rem;
    text-transform: capitalize;
    color: #00a082;
    font-size: 1.2rem;
  }

  .squares {
    height: 1.2rem;
    width: 1.3rem;
    margin-right: 0.4rem;
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
    border-bottom: solid 1px #e7e7e7;
    cursor: pointer;
  }

  .menu {
    padding: 1.8rem 0rem 1.8rem 2.3rem;
    display: flex;
    text-transform: capitalize;
    font-weight: 400;
    color: #3a3a3a;
    font-size: 1.4rem;
  }

  .chevron {
    padding-left: 3rem;
  }

  .search-form {
    background-color: #f5f5f5;
    padding: 1.25rem 1rem 1.2rem 1.8rem;
    border-radius: 10rem;
    label {
      padding-right: 1rem;
    }
  }

  .search-input {
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
    margin: 5.4rem 0 0 -0rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 2rem;
    font-weight: 700;
  }

  .product-category {
    background-color: #fff;
    margin: 0 0.9rem;
    border-radius: 1rem;
    padding: 3rem 0 1rem 3rem;
    height: 15rem;
    font-weight: 700;
    font-size: 1.8rem;
    letter-spacing: 0.05rem;
    border: none;
    position: relative;
    box-shadow: 0 1px 5px rgb(0 0 0 / 15%);
    cursor: pointer;
    transition: all 0.5s;
    overflow: hidden;
  }

  .product-image-div {
    position: absolute;
    left: 0.5rem;

    .product-category-image {
      position: absolute;
      width: 12.8rem;
      height: 14rem;
      left: 31rem;
      top: -4.5rem;
      mask-image: url(https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/image_preview_card/blob.svg);
      object-fit: cover;
      background-color: #f5f5f5;
    }

    .arrow {
      position: absolute;
      top: 4.4rem;
      left: 36.5rem;
      z-index: 5;
    }
  }

  .category-name {
    padding-top: 1rem;
    font-size: 1.8rem;
    text-transform: capitalize;
  }

  .single-product {
    height: 16rem;
    margin: 1rem 1rem;
    padding: 1rem 1rem 1rem 1rem;
    background-color: #fff;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    text-transform: none;
    cursor: pointer;
    transition: all 0.5s;
    border: 1px solid #e7e7e7;
  }

  .single-product:hover {
    transform: scale(1.025);
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

  .chart {
    display: flex;
    flex-direction: column;
    gap: 3.6rem;
    padding: 4.4rem 4.5rem 4rem 4.5rem;
    max-height: 43rem;
  }

  .empty-chart-paragraph {
    font-size: 1.6rem;
    line-height: 1.5;
    text-align: center;
    font-weight: 400;
    color: #4d4d4d;
  }

  .empty-chart-image {
    display: flex;
    height: 18rem;
    width: 100%;
  }

  .empty-chart-bottom {
    height: 4.75rem;
    min-width: 20rem;
    padding: auto 10%;
    font-size: 1.2rem;
    font-weight: 400;
    border-top: 4px solid #e9f8f5;
    color: #4d4d4d;
  }

  .chart-bottom-image {
    margin-bottom: 0.1rem;
    max-height: 1.4rem;
    padding-right: 0.4rem;
  }

  h1 {
    font-size: 4.8rem;
    font-family: "Gotham", "Arial", sans-serif;
    font-weight: bold;
    // letter-spacing: 1rem;
  }

  h2 {
    font-size: 3rem;
    letter-spacing: 0.05rem;
  }
`;
