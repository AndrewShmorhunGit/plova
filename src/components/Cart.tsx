import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../hooks/redux";

import { Link } from "react-router-dom";
import {
  getCurrentCard,
  getSlugFromLocation,
  getTotalCardAmount,
  getTotalCardPrice,
  showDollarPrice,
} from "../units/functions";
import { CartUnit } from "./index";

export const Cart = () => {
  const location = useLocation();
  const slug = getSlugFromLocation(location);
  const { carts } = useAppSelector((state) => state.carts);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carts));
  }, [carts]);

  const currentCart = getCurrentCard(slug, carts);

  return (
    <Wrapper>
      <main className="cart">
        <div className="chart-top">
          <h2 className="empty-chart-title center">
            {currentCart === null || currentCart.order.length === 0
              ? "Your plova"
              : "Your order"}
          </h2>
          {currentCart === null || currentCart.order.length === 0 ? (
            <div className="cart-units-container">
              <div className="center">
                <img
                  className="empty-chart-image"
                  src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/astronaut-grey-scale.svg"
                  alt="spaceman around the food"
                />
              </div>
              <div>
                <p className="empty-chart-paragraph center">
                  You've not added any products yet. When you do, you'll see
                  them here!
                </p>
              </div>
            </div>
          ) : (
            <div
              className="cart-units-container"
              style={{ overflowY: "scroll" }}
            >
              {currentCart &&
                currentCart.order.map((singleOrder, index) => {
                  return (
                    <CartUnit
                      key={index}
                      singleOrder={singleOrder}
                      slug={slug}
                    />
                  );
                })}
            </div>
          )}
        </div>
        <div className="chart-bottom center">
          <div style={{ display: "flex" }}>
            <img
              className="chart-bottom-image"
              src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/feedback/info.svg"
              alt=""
            />
            <p>
              Reach <span>5,00 $</span> to save <span>1,00 $</span> in fees!
            </p>
          </div>
          {currentCart !== null && currentCart.order.length > 0 && (
            <div className="center">
              <Link to={`/order/${slug}`} className="order-btn btn">
                Make an Order ({getTotalCardAmount(slug, carts)}) <br />
                for {showDollarPrice(getTotalCardPrice(slug, carts))}$
              </Link>
            </div>
          )}
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .cart {
    background-color: #fff;
    box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
    height: auto;
    width: 32rem;
    border-radius: 1rem;
  }

  .chart-top {
    display: flex;
    flex-direction: column;
    gap: 3.6rem;
    padding: 4.4rem 0.5rem 0rem 2rem;
  }

  .empty-chart-paragraph {
    font-size: 1.6rem;
    line-height: 1.5;
    text-align: center;
    font-weight: 400;
    color: #4d4d4d;
    padding: 0 3rem;
  }

  .empty-chart-image {
    width: 85%;
    margin-bottom: 3rem;
  }

  .cart-units-container {
    display: flex;
    flex-direction: column;
    gar: 5rem;
    max-height: 40rem;
    min-height: 28.5rem;
    margin: 0rem 0rem 2rem 0rem;

    ::-webkit-scrollbar {
      width: 1rem;
    }

    ::-webkit-scrollbar-track {
      background: #e9f8f5;
      border-radius: 1rem;
    }

    ::-webkit-scrollbar-thumb {
      background: #00a082;
      opacity: 50%;
      border-radius: 1rem;
    }
  }

  .chart-bottom {
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 0rem;
    font-size: 1.2rem;
    font-weight: 400;
    border-top: 4px solid #e9f8f5;
    color: #4d4d4d;
    min-height: 5rem;
  }

  .chart-bottom-image {
    margin-bottom: 0.1rem;
    max-height: 1.4rem;
    padding-right: 0.4rem;
  }

  .order-btn {
    height: auto;
    max-width: auto;
    padding: 2rem 4rem;
    font-size: 1.8rem;
    letter-spacing: 0rem;
    border-radius: 100rem;
  }
`;
