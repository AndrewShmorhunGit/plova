import styled from "styled-components";
import ratingExcellent from "../images/common/ratingExcellent.png";
import magnifyingGlass from "../images/design/magnifyingGlass.svg";
import storeDelivery from "../images/common/storeDelivery.svg";
import clocks from "../images/common/clocks.avif";
import { IMenu } from "../modules/modules";
import { showDollarPrice } from "../units/functions";
import { Cart, Products, Sections } from "./index";

export const BrandGrid: React.FC<{
  menu: IMenu;
  loading: boolean;
  error: string;
  selectedCategory: string | null;
}> = ({ menu, selectedCategory }) => {
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
        <div className="grid-body">
          <div className="grid-title">
            <div className="brand-title">
              <h1>{menu.brandName}</h1>
              <div className="icons">
                <div className="del-icon-container center">
                  <img className="del-icon" src={clocks} alt="" />

                  <p className="icons-p">{`${menu.deliveryTime1}-${menu.deliveryTime2}'`}</p>
                </div>
                <div className="del-icon-container center">
                  <img
                    className="del-icon"
                    src={storeDelivery}
                    alt="delivery moped"
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
            <div className="sticky-container">
              <Cart />
            </div>
          </div>
          <div className="grid-sections">
            <div className="sticky-container">
              <Sections menu={menu} selectedCategory={selectedCategory} />
            </div>
          </div>
          <div className="grid-products">
            <form action="onSubmit" className="search-form">
              <label>
                <img src={magnifyingGlass} alt="" />
              </label>
              <input
                type="text"
                placeholder={`Search in ${menu.brandName}`}
                className="search-input"
              />
            </form>

            <Products
              selectedCategory={selectedCategory}
              menu={menu}
              loading={false}
              getCurrentSubMenu={getCurrentSubMenu}
            />
          </div>
        </div>
      </div>
      <div className="white-space"></div>
      <div className="transition-container">
        <footer className="transition" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: -10rem;

  strong {
    padding-right: 0.5rem;
    font-family: "Gotham Office";
    color: black;
  }

  .grid-body {
    max-width: 156rem;

    display: grid;
    grid-template-columns: 0.5fr 4.25fr 1.5fr;
    grid-template-rows: auto 1fr;
    column-gap: 1rem;
    row-gap: 1.6rem;
  }

  .grid-title {
    max-width: 109rem;
    max-height: 40rem;
    grid-column: 1/3;
    grid-row: 1/2;
    box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
    background: #fff;
    padding: 3rem 4rem;
    border-radius: 1rem;
  }

  .grid-chart {
    grid-row: 1/-1;
    grid-column: 3/4;
  }

  .sticky-container {
    position: sticky;
    top: 1rem;
  }

  .grid-sections {
    background-color: #fff;
    text-transform: uppercase;
    width: 17.5rem;
    height: auto;
    padding-bottom: 5rem;
  }

  .grid-products {
    background-color: #fff;
    padding: 1rem 0rem 1rem 0rem;
    height: auto;
    max-width: 120rem;
  }

  .grid-sections::-webkit-scrollbar {
    width: 0;
  }

  .grid-products::-webkit-scrollbar {
    width: 0;
  }

  .white-space {
    min-height: 2rem;
  }

  .transition-container {
    overflow: hidden;
    width: 100vw;
  }

  .transition {
    display: block;
    width: 110%;
    height: 12.5rem;
    background-color: #1d1d1d;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    margin: 0rem -5rem -5rem -5rem;
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

  .search-form {
    width: 99%;
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

  h1 {
    font-size: 4.8rem;
    font-family: "Gotham", "Arial", sans-serif;
    font-weight: bold;
  }

  h2 {
    font-size: 3rem;
    letter-spacing: 0.05rem;
  }
`;
