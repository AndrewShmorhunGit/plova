import styled from "styled-components";
import { Order } from "../modules/modules";
import { showDollarPrice } from "../units/functions";

export const CartUnit = ({
  singleOrder,
  slug,
}: {
  singleOrder: Order;
  slug: string;
}) => {
  return (
    <Wrapper>
      <div className="center">
        <div className="orders-container">
          <div>
            <p className="amount"> x{singleOrder.amount} </p>
          </div>
          <div>
            <p className="name">{singleOrder.name}</p>
          </div>
          <div>
            <p className="total-price">
              {showDollarPrice(singleOrder.price * singleOrder.amount)}$
            </p>
          </div>
          <img
            className="dec-btn"
            src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/minus-new.svg"
            alt=""
          />

          <button className="edit-btn">Edit</button>

          <img
            className="inc-btn"
            src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/plus-new.svg"
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .orders-container {
    max-width: 100%;
    display: grid;
    grid-template-columns: 0.5fr 4fr 1fr;
    column-gap: 2rem;
    font-weight: 500;
    padding: 1rem 1rem 0 1rem;
  }

  .amount {
    font-size: 2rem;
    font-weight: 600;
  }

  .name {
    font-size: 1.8rem;
    font-weight: 400;
    padding-bottom: 1rem;
  }

  .total-price {
    font-size: 1.8rem;
    font-weight: 600;
  }

  .dec-btn,
  .inc-btn {
    cursor: pointer;
  }

  .edit-btn {
    color: #00a082;
    font-weight: 600;
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    width: 5rem;
    padding: 0;
  }
`;
