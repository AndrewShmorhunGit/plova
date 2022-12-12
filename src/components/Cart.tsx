import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { addToCart, getCartBySlug } from "../units/cartsManager";
import { getSlugFromLocation } from "../units/functions";

export const Cart = () => {
  const location = useLocation();
  const cart = getCartBySlug(getSlugFromLocation(location));
  // console.log(cart);

  useEffect(() => {
    console.log(getCartBySlug(getSlugFromLocation(location)));
  }, [addToCart]);

  return (
    <Wrapper>
      <div className="chart">
        <h2 className="empty-chart-title center">Your plova</h2>
        {!cart && (
          <>
            <img
              className="empty-chart-image"
              src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/astronaut-grey-scale.svg"
              alt="spaceman around the food"
            />
            <p className="empty-chart-paragraph center">
              You've not added any products yet. When you do, you'll see them
              here!
            </p>
          </>
        )}
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
`;
