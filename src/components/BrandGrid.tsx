import styled from "styled-components";
import { useAppDispatch } from "../hooks/redux";
import ratingExcellent from "../images/common/ratingExcellent.png";
import { IMenu } from "../modules/modules";
import { menusSlice } from "../store/slices/menuSlice";
import { showDollarPrice } from "../units/functions";
import { ProductsCategory } from "./ProductsCategory";
import { SingleProduct } from "./SingleProduct";

export const BrandGrid: React.FC<{
  menu: IMenu;
  loading: boolean;
  error: string;
  selectedCategory: string | null;
}> = ({ menu, loading, error, selectedCategory }) => {
  const dispatch = useAppDispatch();
  const getCurrentSubMenu = (categoryName: string | undefined) => {
    const currentMenu = menu.menu.find(
      (item) => item.category.categoryName === categoryName
    );
    if (currentMenu === undefined) {
      throw new Error("Sorry, something went wrong, currentMenu is undefined");
    }
    return currentMenu.products;
  };

  return (
    <Wrapper>
      <div className="container-products">
        <div className="product-body">
          <div className="grid-title">
            <div className="brand-title">
              <h1>{menu.brandName}</h1>
              <div className="icons">
                <div className="del-icon-container center">
                  <img
                    className="del-icon"
                    src="https://res.cloudinary.com/glovoapp/w_22,h_22,c_pad,b_transparent,f_auto,q_auto:low,dpr_2.0/filters/sorting/near_me_light"
                    alt=""
                  />
                  <p className="icons-p">{`${menu.deliveryTime1}-${menu.deliveryTime2}'`}</p>
                </div>
                <div className="del-icon-container center">
                  <img
                    className="del-icon"
                    src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/glyphs/store-delivery-light.svg"
                    alt=""
                  />
                  <p className="icons-p">
                    {showDollarPrice(menu.deliveryPrice)} $
                  </p>
                </div>
                <div className="del-icon-container center">
                  <img className="del-icon" src={ratingExcellent} alt="" />
                  <p className="icons-p"> {menu.rate}%</p>
                </div>
              </div>
              <p className="message">{menu.message}</p>
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
            <div
              className="sections center"
              onClick={() => dispatch(menusSlice.actions.unselectCategory())}
            >
              <img
                className="squares"
                src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/sections-square.svg"
                alt="squares"
              />
              <h3 className="sections-title">sections</h3>
            </div>
            {menu.menu.map((item, index) => {
              return (
                <div
                  className="menu-container"
                  onClick={() =>
                    dispatch(
                      menusSlice.actions.selectCategory(
                        item.category.categoryName
                      )
                    )
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
                placeholder={`Search in ${menu.brandName}`}
                className="search-input"
              />
            </form>
            {selectedCategory !== null && (
              <h3 className="category-title__name">{selectedCategory}</h3>
            )}
            <div
              className="products"
              style={{
                margin: `${
                  selectedCategory === null
                    ? "5.4rem 0 0 -0rem"
                    : "2rem 0 0 -0rem"
                }`,
              }}
            >
              {selectedCategory === null
                ? menu.menu.map((item, index) => {
                    return (
                      <div
                        onClick={() =>
                          dispatch(
                            menusSlice.actions.selectCategory(
                              item.category.categoryName
                            )
                          )
                        }
                      >
                        <ProductsCategory
                          key={index}
                          item={item}
                          loading={loading}
                        />
                      </div>
                    );
                  })
                : getCurrentSubMenu(selectedCategory).map((product, index) => {
                    return (
                      <SingleProduct product={product} loading={loading} />
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
      <footer className="transition"></footer>
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
    min-height: 90rem;
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
    height: 12.5rem;
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
    max-width: 100rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 2rem;
    font-weight: 700;
  }

  .category-title__name {
    transform: translateY(1rem);
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
