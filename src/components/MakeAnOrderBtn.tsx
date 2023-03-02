import { Link, useLocation } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch";
import {
  getCurrentCard,
  getSlugFromLocation,
  getTotalCardAmount,
  getTotalCardPrice,
  showDollarPrice,
} from "../units/functions";
import { User } from "../modules/modules";
import { userActions } from "../store/actions/userActions";

export const MakeAnOrderBtn = () => {
  const dispatch = useAppDispatch();
  const { carts } = useAppSelector((state) => state.carts);
  const { user } = useAppSelector((state) => state.user);
  const location = useLocation();
  const slug = getSlugFromLocation(location);
  const totalPrice = getTotalCardPrice(slug, carts);
  const currentCart = getCurrentCard(slug, carts);

  const [isUser, setIsUser] = React.useState(false);

  function checkUser(userData: User | null) {
    userData === null ? setIsUser(false) : setIsUser(true);
  }

  React.useEffect(() => {
    checkUser(user);
  }, [user, checkUser]);

  return (
    <Wrapper>
      <main>
        {currentCart !== null && currentCart.order.length > 0 && (
          <div className="center">
            {isUser ? (
              <Link to={`/order/${slug}`}>
                <div className="order-btn btn">
                  <div>Make an Order ({getTotalCardAmount(slug, carts)})</div>
                  <div>
                    for
                    {` ${showDollarPrice(totalPrice)}`}$
                  </div>
                </div>
              </Link>
            ) : (
              <div
                className="order-btn btn"
                onClick={() => dispatch(userActions.toggleRegisterModal())}
              >
                <div>Make an Order ({getTotalCardAmount(slug, carts)})</div>
                <div>
                  for
                  {` ${showDollarPrice(totalPrice)}`}$
                </div>
              </div>
            )}
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
