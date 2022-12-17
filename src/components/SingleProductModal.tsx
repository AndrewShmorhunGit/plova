import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../hooks/redux";
import { cartSlice } from "../store/slices/cartSlice";
import { getSlugFromLocation, showDollarPrice } from "../units/functions";
import { Product } from "./SingleProduct";

export const SingleProductModal = ({
  setShowModalProduct,
  product,
}: {
  setShowModalProduct: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product;
}) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const slug = getSlugFromLocation(location);

  const [counter, setCounter] = useState(1);

  const inc = () => {
    let newCounter = setCounter(counter + 1);
    return newCounter;
  };

  const dec = () => {
    if (counter <= 1) {
      return 1;
    } else {
      let newCounter = setCounter(counter - 1);
      return newCounter;
    }
  };

  const newOrder = {
    amount: counter,
    name: product.name,
    price: product.price,
  };

  return (
    <Wrapper>
      <main className="modal-container show-modal">
        <div className="content center">
          <div className="margin"></div>
          <button
            className="close-btn"
            onClick={() => setShowModalProduct(false)}
          >
            <img
              src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/close-icon.svg"
              alt=""
            />
          </button>

          <div className="data-div">
            <div className="center">
              <img className="product-image" src={product.image} alt="" />
            </div>
            <h2 className="product-name">{product.name}</h2>
            <p className="price">{showDollarPrice(product.price)} $</p>
            <p className="description">{product.description}</p>
            <div className="counter center">
              <img
                className="dec-btn"
                src={
                  counter !== 1
                    ? `https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/minus-new.svg`
                    : "https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/minus-new-disabled.svg"
                }
                alt="minus-button"
                style={{
                  cursor: `${counter !== 1 ? "pointer" : "not-allowed"}`,
                }}
                onClick={() => dec()}
              />
              <p>{counter}</p>
              <img
                className="inc-btn"
                src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/plus-new.svg"
                alt="plus-button"
                onClick={() => inc()}
              />
            </div>
          </div>
          <div className="center">
            <button
              className="add-btn btn center"
              onClick={() =>
                dispatch(cartSlice.actions.addToCart({ slug, newOrder })) &&
                setShowModalProduct(false)
              }
            >
              Add {counter} for {showDollarPrice(counter * product.price)} $
            </button>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .modal-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    padding: 0rem 0 0 2rem;
    z-index: -1;
    overflow: auto;
  }
  .show-modal {
    z-index: 99;
    opacity: 1;
  }
  .modal-container::-webkit-scrollbar {
    width: 0;
  }

  .product-image {
    margin: 2rem;
    min-height: 30rem;
    min-width: 30rem;
    border-radius: 2rem;
  }

  .content {
    background: #fff;
    position: relative;
    min-width: 60rem;
    // min-height: 60rem;
    border-radius: 1rem;
    flex-direction: column;
    margin: 10vh auto;
    gap: 1rem;
  }

  .margin {
    margin-top: 3rem;
  }

  .close-btn {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: grey;
    cursor: pointer;
  }

  .price {
    font-size: 3rem;
    font-weight: 400;
  }

  .data-div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 45rem;
    overflow-y: scroll;
  }

  .data-div::-webkit-scrollbar {
    width: 1rem;
  }

  .data-div::-webkit-scrollbar-track {
    background: #e9f8f5;
    border-radius: 1rem;
  }

  .data-div::-webkit-scrollbar-thumb {
    background: #00a082;
    opacity: 50%;
    border-radius: 1rem;
  }

  .description {
    font-weight: 400;
    font-size: 1.6rem;
  }

  .counter {
    font-size: 2rem;
    gap: 1.6rem;
    padding: 2rem 0;
  }

  .inc-btn {
    cursor: pointer;
  }

  .add-btn {
    padding: 3rem 6rem;
    border-radius: 10rem;
    font-size: 1.8rem;
    max-width: auto;
    margin-bottom: 5rem;
  }
`;
