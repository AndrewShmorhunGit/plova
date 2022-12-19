import styled from "styled-components";
import logo from "../logos/logo.png";
import arrowBack from "../images/design/arrowBack.svg";
import { Link, useLocation } from "react-router-dom";
import {
  getCurrentCard,
  getSlugFromLocation,
  getTotalCardAmount,
  showDollarPrice,
} from "../units/functions";
import { useAppSelector } from "../hooks/redux";

export const OrderPage = () => {
  const location = useLocation();
  const slug = getSlugFromLocation(location);
  const { carts } = useAppSelector((state) => state.carts);
  const { menu } = useAppSelector((state) => state.menu);
  const currentCart = getCurrentCard(slug, carts);

  const brandName = menu?.brandName;

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
              <p>
                {getTotalCardAmount(slug, carts)} product list from
                <span>{` ${brandName}`}</span>
              </p>
              <div className="cart-info">
                {currentCart?.order.map((order) => {
                  return (
                    <div className="single-position" key={order.name}>
                      <div>
                        <div className="inc-btn"></div>
                        <p>{order.amount}</p>
                        <div className="dec-btn"></div>
                        <p>{order.name}</p>
                      </div>
                      <p>{showDollarPrice(order.price * order.amount)} $</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="delivery-details">Delivery details</div>
            <div className="payment-method">Payment method</div>
          </div>
          <div className="order-summary">Summary</div>
        </div>
      </main>
      <footer className="transition"></footer>
    </Wrapper>
  );
};

const Wrapper = styled.main`
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

  .order-summary {
    grid-column: 2/3;
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
