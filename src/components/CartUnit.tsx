import styled from "styled-components";
import { useAppDispatch } from "../hooks/redux";
import { Order } from "../modules/modules";
import { cartSlice } from "../store/slices/cartSlice";
import { showDollarPrice } from "../units/functions";
import plus from "../images/menu/plusNew.svg";
import minus from "../images/menu/minusNew.svg";

export const CartUnit = ({
  singleOrder,
  slug,
}: {
  singleOrder: Order;
  slug: string;
}) => {
  const dispatch = useAppDispatch();
  const increase = () => {
    dispatch(
      cartSlice.actions.changeCartAmount({
        slug,
        name: singleOrder.name,
        operation: "inc",
      })
    );
  };

  const decrease = () => {
    dispatch(
      cartSlice.actions.changeCartAmount({
        slug,
        name: singleOrder.name,
        operation: "dec",
      })
    );
  };
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
          <div className="buttons">
            <img
              onClick={() => decrease()}
              className="dec-btn"
              src={minus}
              alt=""
            />

            {/* <button className="edit-btn">Edit</button> */}

            <img
              onClick={() => increase()}
              className="inc-btn"
              src={plus}
              alt=""
            />
          </div>
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
    padding: 1rem 1rem 0.5rem 1rem;
    border-bottom: 1px solid #e9f8f5;
    margin-right: 0.5rem;
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

  .buttons {
    grid-column: 1/-1;
    // grid-row: 1/;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
