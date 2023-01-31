import { Link } from "react-router-dom";
import styled from "styled-components";
import penErasing from "../../images/order/penErasing.svg";
import { ICart, IModalState } from "../../modules/modules";

export const ExitFromOrderModal = ({
  setModalState,
  modalState,
  currentCart,
  slug,
  decrease,
}: {
  setModalState: React.Dispatch<React.SetStateAction<IModalState>>;
  modalState: IModalState;
  currentCart: ICart | null;
  slug: string;
  decrease: Function;
}) => {
  return (
    <Wrapper>
      <main
        className={
          modalState.confirmExit
            ? "modal-container show-modal"
            : "modal-container"
        }
      >
        <div className="content center">
          <div className="content-info center">
            <h1>Remove product</h1>
            <img className="deco-image" src={penErasing} alt="pen erasing" />
            <p>Do you want to remove this product from your order?</p>
            <div className="buttons center">
              <Link
                to={`/brand/${slug}`}
                className="btn center confirm"
                onClick={() =>
                  decrease(currentCart?.order[0].name) &&
                  setModalState({ ...modalState, confirmExit: false })
                }
              >
                Confirm
              </Link>

              <button
                className="btn center"
                onClick={() =>
                  setModalState({ ...modalState, confirmExit: false })
                }
              >
                Cancel
              </button>
            </div>
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
    z-index: -1;
    overflow: auto;
    opacity: 0;
    transition: all 0.5s ease;
  }

  .show-modal {
    z-index: 99;
    opacity: 1;
  }

  .content {
    background: #fff;
    position: relative;
    min-width: 70rem;
    min-height: 50rem;
    border-radius: 1rem;
    margin: auto auto;
    padding: 0;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.8rem;
      font-weight: 400;
    }
  }

  .content-info {
    padding: 0 3rem;
    text-align: center;
    flex-direction: column;
    gap: 2rem;
  }

  .buttons {
    flex-direction: column;
    gap: 2rem;
  }

  .btn {
    padding: 2.6rem 14rem;
    border-radius: 10rem;
    margin: 0;
  }

  .confirm {
    background: transparent;
    color: grey;
    border: 1px solid #e9f8f5;
  }

  @media (max-width: 56.25em) {
    .content {
      min-width: 55rem;
      min-height: 37.5rem;
      border-radius: 1rem;
      h1 {
        font-size: 2.6rem;
      }
      p {
        font-size: 1.6rem;
      }
    }

    .btn {
      padding: 2.6rem 10rem;
      border-radius: 10rem;
      margin: 0;
    }

    .deco-image {
      max-height: 10rem;
    }
  }

  @media (max-width: 37.5em) {
    .content {
      min-width: 100dvw;
      min-height: 45rem;
    }
  }
`;
