import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../hooks/redux";
import { getCurrentCard } from "../store/actions/cartActions";
import { getSlugFromLocation } from "../units/functions";
import { CartUnit } from "./index";

export const Cart = () => {
  const location = useLocation();
  const slug = getSlugFromLocation(location);
  const { carts } = useAppSelector((state) => state.carts);

  const currentCart = getCurrentCard(slug, carts);

  return (
    <Wrapper>
      <div className="chart">
        <h2 className="empty-chart-title center">
          {currentCart === null ? "Your plova" : "Your order"}
        </h2>
        {currentCart === null ? (
          <div className="cart-inits-container">
            <div>
              <img
                className="empty-chart-image"
                src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/astronaut-grey-scale.svg"
                alt="spaceman around the food"
              />
            </div>
            <div>
              <p className="empty-chart-paragraph center">
                You've not added any products yet. When you do, you'll see them
                here!
              </p>
            </div>
          </div>
        ) : (
          <div className="cart-units-container">
            {currentCart &&
              currentCart.order.map((singleOrder, index) => {
                return (
                  <CartUnit key={index} singleOrder={singleOrder} slug={slug} />
                );
              })}
          </div>
        )}
      </div>
      <div className="chart-bottom center">
        <div className="center">
          <img
            className="chart-bottom-image"
            src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/feedback/info.svg"
            alt=""
          />
          <p>
            Reach <span>5,00 $</span> to save <span>1,00 $</span> in fees!
          </p>
        </div>
        {currentCart !== null && (
          <div className="center">
            <button className="order-btn btn">
              Make an Order (`1`) <br /> for (totalPrice)
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .margin-bottom {
    margin-bottom: -10rem;
  }

  .chart {
    display: flex;
    flex-direction: column;
    gap: 3.6rem;
    padding: 4.4rem 2rem 4rem 2rem;
    min-height: 30rem;
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

  .cart-units-container {
    overflow-y: scroll;
    max-height: 30rem;
    min-height: 20rem;

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
    position: sticky;
    top: 2rem;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 0rem;
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

  .order-btn {
    height: auto;
    max-width: auto;
    padding: 2rem 4rem;
    font-size: 1.8rem;
    letter-spacing: 0rem;
    border-radius: 100rem;
  }
`;
