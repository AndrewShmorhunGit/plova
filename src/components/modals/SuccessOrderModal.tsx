import styled from "styled-components";
import { IModalState } from "../../modules/modules";
import success from "../../images/order/success.png";
import { Link } from "react-router-dom";
export const SuccessOrderModal = ({
  setModalState,
  modalState,
}: {
  setModalState: React.Dispatch<React.SetStateAction<IModalState>>;
  modalState: IModalState;
}) => {
  return (
    <Wrapper>
      <main
        className={
          modalState.successOrder
            ? "modal-container show-modal"
            : "modal-container"
        }
      >
        <div className="content center">
          <button
            className="close-btn"
            onClick={() =>
              setModalState({ ...modalState, successOrder: false })
            }
          ></button>
          <h1>Success Order!</h1>
          <img className="img" src={success} alt="" />
          <p>Your order is added to order list</p>
          <Link
            to={"/"}
            className="btn center"
            onClick={() =>
              setModalState({ ...modalState, successOrder: false })
            }
          >
            Go home
          </Link>
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

  .content {
    background: #fff;
    position: relative;
    max-width: 70rem;
    max-height: 50rem;
    border-radius: 1rem;
    flex-direction: column;
    gap: 4rem;
    margin: auto;
    padding: 5rem;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.8rem;
      font-weight: 400;
    }
  }

  .img {
    height: 14rem;
  }

  .content-info {
    flex-direction: column;
    gap: 2rem;
  }

  .buttons {
    flex-direction: column;
    gap: 1rem;
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

  @media (max-width: 53.125em) {
    .content {
      max-width: 70rem;
      max-height: 50rem;
      border-radius: 1rem;
      padding: 2rem 3rem;
      gap: 3rem;
      text-align: center;
    }
  }

  @media (max-width: 31.25em) {
    .btn {
      padding: 2.6rem 10rem;
    }
  }
`;
