import styled from "styled-components";
import logo from "../logos/logo.png";
import arrowBack from "../images/design/arrowBack.svg";
import plus from "../images/menu/plusNew.svg";
import minus from "../images/menu/minusNew.svg";
import food from "../images/order/food.svg";
import hardcodedLocation from "../images/order/hardcodedLocation.png";
import flag from "../images/order/addressInputFlag.png";

import { Link, useLocation } from "react-router-dom";
import {
  getCurrentCard,
  getLocalStorageMenu,
  getSlugFromLocation,
  getTotalCardAmount,
  getTotalCardPrice,
  goToTop,
  showDollarPrice,
} from "../units/functions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { cartSlice } from "../store/slices/cartSlice";
import { useEffect, useMemo, useState } from "react";
import { AllergyModal, ExitFromOrderModal } from "../components/index";
import { Dropdown } from "../components/Dropdown";
import { paymentDropdownOptions } from "../units/data";

export const OrderPage = () => {
  const dispatch = useAppDispatch();
  const { carts } = useAppSelector((state) => state.carts);

  const location = useLocation();
  const menu = useMemo(() => getLocalStorageMenu(), []);
  const slug = useMemo(() => getSlugFromLocation(location), [location]);
  const currentCart = useMemo(() => getCurrentCard(slug, carts), [carts]);

  const [allergyModal, setAllergyModal] = useState(false);
  const [confirmExitModal, setConfirmExitModal] = useState(false);

  useEffect(() => {
    goToTop();
  }, []);

  const productsPrice = getTotalCardPrice(slug, carts);
  const brandName = menu?.brandName;
  const smallOrderFeePrice = 1;

  const increase = (productName: string) => {
    dispatch(
      cartSlice.actions.changeCartAmount({
        slug,
        name: productName,
        operation: "inc",
      })
    );
  };

  const properDecrease = (productName: string): void => {
    if (currentCart?.order.length === 1 && currentCart?.order[0].amount === 1) {
      setConfirmExitModal(!confirmExitModal);
      return;
    } else {
      dispatch(
        cartSlice.actions.changeCartAmount({
          slug,
          name: productName,
          operation: "dec",
        })
      );
    }
  };

  const decrease = (productName: string) => {
    dispatch(
      cartSlice.actions.changeCartAmount({
        slug,
        name: productName,
        operation: "dec",
      })
    );
  };

  return (
    <Wrapper>
      {/* ALLERGY MODAL */}
      {allergyModal && <AllergyModal setAllergyModal={setAllergyModal} />}

      {/* CONFIRM EXIT MODAL */}
      {confirmExitModal && (
        <ExitFromOrderModal
          setConfirmExitModal={setConfirmExitModal}
          currentCart={currentCart}
          slug={slug}
          decrease={decrease}
        />
      )}

      <main className="container">
        <div className="order-header">
          <div className="logo-container">
            <Link to="/">
              <img className="logo" src={logo} alt="Plova logo" />
            </Link>
          </div>
        </div>
        <div className="order-grid">
          <div className="info-header">
            <div className="order-header-summary">
              <Link to={`/brand/${slug}`}>
                <img src={arrowBack} alt="arrow left" />
              </Link>
              <h2>Order summary</h2>
            </div>
            <h1>{brandName}</h1>
          </div>

          <div className="order-info">
            <div className="order-details">
              <p className="total-amount">
                {getTotalCardAmount(slug, carts)}
                {getTotalCardAmount(slug, carts) > 1
                  ? " products "
                  : " product "}
                from
                <span>{` ${brandName}`}</span>
              </p>
              <div className="cart-info">
                {currentCart?.order.map((order) => {
                  return (
                    <div key={order.name} className="single-position">
                      <div className="single-product-info">
                        <div className="dec-btn">
                          <img
                            src={minus}
                            alt="minus in circle"
                            onClick={() => properDecrease(order.name)}
                          />
                        </div>

                        <p className="amount">{order.amount}</p>

                        <div className="inc-btn">
                          <img
                            src={plus}
                            alt="plus on circle"
                            onClick={() => increase(order.name)}
                          />
                        </div>
                        <p className="name">{order.name}</p>
                      </div>
                      <p className="price">
                        {showDollarPrice(order.price * order.amount)} $
                      </p>
                    </div>
                  );
                })}

                <div
                  className="allergy-info margin-top"
                  onClick={() => setAllergyModal(!allergyModal)}
                >
                  <img
                    src="https://res.cloudinary.com/glovoapp//CX/backendCheckout/light/allergies-active"
                    alt="pill image"
                  />
                  <div className="allergy-container">
                    <p>Any allergies?</p>
                    <img
                      src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/thin-arrow--right.svg"
                      alt="thin arrow right"
                    />
                  </div>
                </div>
                <div className="cutlery-info">
                  <img
                    src="https://res.cloudinary.com/glovoapp//CX/backendCheckout/light/cutlery"
                    alt="fork and spoon"
                  />
                  <div className="cutlery-container">
                    <div>
                      <h4>Need any cutlery?</h4>
                      <p>
                        Help us minimize waste. Only ask for cutlery when you
                        need it.
                      </p>
                    </div>

                    <div>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="delivery-details">
              <h3>Delivery details</h3>
              <img
                className="location-image"
                src={hardcodedLocation}
                alt="current location on the map"
              />
              <div className="delivery-info margin-top">
                <img src={flag} alt="flag image" />
                <div className="delivery-container">
                  <p>Antonovicha str. 74</p>
                  <img
                    src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/thin-arrow--right.svg"
                    alt="thin arrow right"
                  />
                </div>
              </div>
              <div className="delivery-terms">
                <p>
                  <span>
                    {menu && `${menu.deliveryTime1}-${menu.deliveryTime2} min`}
                  </span>
                </p>
                <p> As soon as possible</p>
              </div>
              <div className="delivery-info margin-top">
                <img
                  src="https://res.cloudinary.com/glovoapp//CX/backendCheckout/light/phone-input"
                  alt="flag image"
                />
                <div className="delivery-container">
                  <p className="phone-number">Add your phone number</p>
                  <img
                    src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/thin-arrow--right.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="payment-method margin-top">
              <h3>Payment method</h3>
            </div>
            <Dropdown options={paymentDropdownOptions} />
          </div>
          <div className="order-summary">
            <div className="sticky-container">
              <div className="summary-title">
                <h2>Summary</h2>
                <img
                  src={food}
                  alt="salad and burger with bottle of beverage"
                />
              </div>
              <div className="summary-position">
                <p>Products</p>
                <p> {showDollarPrice(productsPrice)} $</p>
              </div>
              <div className="summary-position">
                <p>Delivery</p>
                <p>
                  {menu !== null && `${showDollarPrice(menu.deliveryPrice)} $`}
                </p>
              </div>
              {productsPrice < 5 ? (
                <div className="summary-position">
                  <p>Small order</p>
                  <p> {showDollarPrice(smallOrderFeePrice)} $</p>
                </div>
              ) : null}
              <div className="summary-position total-position">
                <p>TOTAL</p>
                <p>
                  {menu &&
                    (productsPrice < 5
                      ? `${showDollarPrice(
                          productsPrice +
                            smallOrderFeePrice +
                            menu.deliveryPrice
                        )} $`
                      : `${showDollarPrice(
                          productsPrice + menu.deliveryPrice
                        )} $`)}
                </p>
              </div>
              <div className="btn-container center">
                <button className="btn center">Confirm Order</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="transition-container">
        <footer className="transition" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  main {
    padding-bottom: 10rem;
  }
  .margin-top {
    margin-top: 3rem;
  }

  .container {
    min-width: 145rem;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .order-header {
    position: sticky;
    top: 0;
    background: transparent;
    height: 10rem;
    z-index: -1;
  }

  .logo-container {
    position: relative;
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(50%);
    height: 4.4rem;
  }

  .order-grid {
    padding: 5rem 15rem;
    display: grid;
    grid-template-columns: 1fr 0.6fr;
    column-gap: 2rem;
  }

  .info-header {
    grid-column: 1/-1;
    min-height: 15rem;
    margin-bottom: 3.6rem;

    img {
      height: 2.4rem;
      cursor: pointer;
    }

    h2 {
      font-size: 3rem;
      font-weight: 500;
    }

    h1 {
      font-size: 4.8rem;
    }
  }

  .order-header-summary {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
  }

  .order-info {
    grid-column: 1/2;
  }

  .order-details {
    padding: 2rem 1rem;
    border-inline: 0.3rem solid;
    border-block-start: 0.3rem solid;

    border-image-source: radial-gradient(
      circle at 50%,
      lightgrey,
      transparent 85%
    );
    border-image-slice: 1;
  }

  .cart-info {
    padding-top: 3rem;
  }

  .total-amount {
    font-size: 1.8rem;
    font-weight: 400;
  }

  .single-position {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem 1rem 0.5rem;
    font-size: 1.6rem;

    .price {
      font-weight: 300;
    }
  }

  .single-product-info {
    display: flex;
    gap: 1.4rem;
    align-items: center;

    .amount {
      font-weight: 600;
    }
    .name {
      font-weight: 400;
    }
  }

  .dec-btn,
  .inc-btn {
    cursor: pointer;
  }

  .location-image {
    width: 100%;
  }

  .sticky-container {
    position: sticky;
    top: 2rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
    height: auto;
    padding: 3rem 3rem;
    border-block-end: 1rem solid;
    padding-block-end: 3rem;
    border-image-source: linear-gradient(110deg, #00a082, #ffc244);
    border-image-slice: 1;
  }

  .order-summary {
    grid-column: 2/3;
  }

  .summary-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: solid 1px lightgrey;

    h4 {
      font-size: 3rem;
      font-weight: 500;
    }

    img {
      height: 7rem;
    }
  }

  .summary-position {
    padding-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.8rem;
    font-weight: 400;
  }

  .total-position {
    font-size: 2rem;
    font-weight: 500;
  }

  .allergy-info,
  .delivery-info {
    height: 3.2rem;
    cursor: pointer;
    display: flex;
    gap: 1.6rem;
  }

  .allergy-container,
  .delivery-container,
  .payment-container {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
    border-bottom: solid 1px lightgrey;

    p {
      font-weight: 400;
      font-size: 1.8rem;
    }

    img {
      height: 1.6rem;
    }
  }

  .cutlery-info {
    height: 3.2rem;
    display: flex;
    gap: 1.6rem;
    margin-top: 4rem;
  }

  .cutlery-container {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem 3rem 0;
    border-bottom: solid 1px lightgrey;

    p {
      padding: 0.5rem 0;
      font-size: 1.2rem;
      font-weight: 300;
    }

    h4 {
      font-weight: 400;
    }

    img {
      height: 1.6rem;
    }

    button {
      cursor: pointer;
    }
  }

  .btn {
    margin-top: 4rem;
    padding: 2rem 8rem;
    font-size: 1.8rem;
    letter-spacing: 0;
  }

  .delivery-details {
    margin-top: 8rem;
  }

  .delivery-terms {
    margin: 2rem 0;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    border: solid 1px orange;
    background-color: #fff3da;
  }

  .payment-method {
    margin-top: 8rem;

    select {
      font-size: 1.8rem;
      width: 90%;
      border: 0;
      border-bottom: 1px solid lightgrey;
      appearance: none;
    }

    option {
      padding: 1rem;
    }
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

  h3 {
    padding-bottom: 2rem;
    font-size: 3rem;
    font-weight: 500;
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 500;
  }

  .single-position-exit-active {
    animation: appear 500ms inverts;
  }

  .single-position-enter-active {
    animation: appear 500ms forwards;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    ,
    100% {
      opacity: 1;
    }
  }
`;
