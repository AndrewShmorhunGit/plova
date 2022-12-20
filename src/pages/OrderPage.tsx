import styled from "styled-components";
import logo from "../logos/logo.png";
import arrowBack from "../images/design/arrowBack.svg";
import { Link, useLocation } from "react-router-dom";
import {
  getCurrentCard,
  getSlugFromLocation,
  getTotalCardAmount,
  getTotalCardPrice,
  showDollarPrice,
} from "../units/functions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import plus from "../images/menu/plusNew.svg";
import minus from "../images/menu/minusNew.svg";
import food from "../images/order/food.svg";
import { cartSlice } from "../store/slices/cartSlice";

export const OrderPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const slug = getSlugFromLocation(location);
  const { carts } = useAppSelector((state) => state.carts);
  const { menu } = useAppSelector((state) => state.menu);
  const currentCart = getCurrentCard(slug, carts);

  const brandName = menu?.brandName;

  const increase = (productName: string) => {
    dispatch(
      cartSlice.actions.changeCartAmount({
        slug,
        name: productName,
        operation: "inc",
      })
    );
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

  const productsPrice = getTotalCardPrice(slug, carts);
  const smallOrderFeePrice = 1;
  return (
    <Wrapper>
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
              <img src={arrowBack} alt="arrow left" />
              <h3>Order summary</h3>
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
                    <div className="single-position" key={order.name}>
                      <div className="single-product-info">
                        <div className="dec-btn">
                          <img
                            src={minus}
                            alt="minus in circle"
                            onClick={() => decrease(order.name)}
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
                <div className="allergy-info margin-top">
                  <img
                    src="https://res.cloudinary.com/glovoapp//CX/backendCheckout/light/allergies-active"
                    alt="pill image"
                  />
                  <div className="allergy-container">
                    <p>Any allergies?</p>
                    <img
                      src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/thin-arrow--right.svg"
                      alt=""
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
                      <h3>Need any cutlery?</h3>
                      <p>
                        Help us minimize waste. Only ask for cutlery when you
                        need it.
                      </p>
                    </div>
                    <button>button</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="delivery-details">
              <h3> Delivery details</h3>
            </div>
            <div className="payment-method">Payment method</div>
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
                <button className="btn center"> Confirm Order</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="transition"></footer>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .margin-top {
    margin-top: 2rem;
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

    h3 {
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

  .sticky-container {
    position: sticky;
    top: 2rem;
    border-radius: 2rem;
    border: solid red 1px;
    height: auto;
    padding: 3rem 3rem;
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

    h2 {
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

  .allergy-info {
    height: 3.2rem;
    cursor: pointer;
    display: flex;
    gap: 1.6rem;
  }

  .allergy-container {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: solid 1px lightgrey;

    p {
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

    h3 {
      font-size: 1.8rem;
      font-weight: 500;
    }

    p {
      padding: 0.5rem 0;
      font-size: 1.2rem;
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
    h3 {
      font-size: 3rem;
      font-weight: 500;
    }
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
`;
