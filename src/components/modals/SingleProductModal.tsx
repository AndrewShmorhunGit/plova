import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { cartSlice } from "../../store/slices/cartSlice";
import { getSlugFromLocation, showDollarPrice } from "../../units/functions";
import { Product } from "../SingleProduct";
import closeIcon from "../../images/common/closeIcon.svg";
import plus from "../../images/menu/plusNew.svg";
import minus from "../../images/menu/minusNew.svg";
import minusDisabled from "../../images/menu/minusNewDisabled.svg";

export const SingleProductModal = ({
  setShowModalProduct,
  product,
}: {
  setShowModalProduct: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product;
}) => {
  const dispatch = useAppDispatch();
  const slug = getSlugFromLocation(useLocation());

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
            <img src={closeIcon} alt="close X" />
          </button>

          <div className="data-div">
            <div className="center">
              <img
                className="product-image"
                src={product.image}
                alt="product"
              />
            </div>
            <h2 className="product-name">{product.name}</h2>
            <p className="price">{showDollarPrice(product.price)} $</p>
            <p className="description">{product.description}</p>
            <div className="counter center">
              <img
                className="dec-btn"
                src={counter !== 1 ? minus : minusDisabled}
                alt="minus-button"
                style={{
                  cursor: `${counter !== 1 ? "pointer" : "not-allowed"}`,
                }}
                onClick={() => dec()}
              />
              <p>{counter}</p>
              <img
                className="inc-btn"
                src={plus}
                alt="plus-button"
                onClick={() => inc()}
              />
            </div>
          </div>
          <div className="button-container center">
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
    max-width: 100%;
    max-height: 100%;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    z-index: -1;
    overflow: auto;
    opacity: 0;
    transition: all 0.5s ease;
  }

  .show-modal {
    z-index: 99;
    opacity: 1;
  }
  .modal-container::-webkit-scrollbar {
    width: 0;
  }

  .content {
    background: #fff;
    position: relative;
    min-width: 60rem;
    min-height: 50rem;
    border-radius: 1rem;
    flex-direction: column;
    padding: 2rem;
    margin: auto;
    gap: 1rem;
  }

  .product-image {
    min-width: 25rem;
    max-height: 30rem;
    border-radius: 2rem;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
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
    margin-right: -6rem;
    padding-right: 3rem;
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
    padding: 1rem 0;
  }

  .inc-btn {
    cursor: pointer;
  }

  .button-container {
  }

  .add-btn {
    padding: 3rem 6rem;
    border-radius: 10rem;
    font-size: 1.8rem;
    max-width: auto;
    margin-bottom: 1rem;
  }

  @media (max-width: 75em) {
    .product-image {
      max-height: 22rem;
    }
  }

  @media (max-width: 40.625em) {
    .content {
      min-width: 100vw;
      min-height: 100%;
      margin: 1rem 1rem;
      gap: 2rem;
    }

    .data-div {
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
      max-width: auto;
      overflow-y: scroll;
      padding: 0.5rem;
    }

    .modal-container {
      overflow: scroll;
    }
  }

  @media (max-width: 28.125em) {
    .content {
      min-width: 100vw;
      min-height: 100%;
      margin: auto;
      gap: 2rem;
      border-radius: 0rem;
    }

    .data-div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: auto;
      overflow-y: scroll;
      margin-right: 0rem;
      padding: 0 3rem;
    }

    .modal-container {
      overflow: auto;
    }
  }
`;
