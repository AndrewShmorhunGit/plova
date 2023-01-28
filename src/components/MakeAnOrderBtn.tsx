import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../hooks/useAppDispatch";
import {
  getCurrentCard,
  getSlugFromLocation,
  getTotalCardAmount,
  getTotalCardPrice,
  showDollarPrice,
} from "../units/functions";

export const MakeAnOrderBtn = () => {
  const { carts } = useAppSelector((state) => state.carts);
  const location = useLocation();
  const slug = getSlugFromLocation(location);
  const totalPrice = getTotalCardPrice(slug, carts);
  const currentCart = getCurrentCard(slug, carts);
  return (
    <Wrapper>
      <main>
        {currentCart !== null && currentCart.order.length > 0 && (
          <div className="center">
            <Link to={`/order/${slug}`}>
              <div className="order-btn btn">
                <div>Make an Order ({getTotalCardAmount(slug, carts)})</div>
                <div>
                  for
                  {` ${showDollarPrice(totalPrice)}`}$
                </div>
              </div>
            </Link>
          </div>
        )}
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  a {
    text-decoration: none;
  }

  @media (max-width: 62.5em) {
    .order-btn {
      display: block;
      // flex-direction: row;
      gap: 0.8rem;
    }
  } ;
`;
