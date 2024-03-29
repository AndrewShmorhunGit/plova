import styled from "styled-components";
import { IModalState } from "../../modules/modules";
import closeIcon from "../../images/common/closeIcon.svg";
import errorImage from "../../images/error/sad_glopi.svg";

export const InValidOrderModal = ({
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
          modalState.inValidOrder
            ? "modal-container show-modal"
            : "modal-container"
        }
      >
        <div className="content center">
          <button
            className="close-btn"
            onClick={() =>
              setModalState({ ...modalState, inValidOrder: false })
            }
          >
            <img src={closeIcon} alt="close X" />
          </button>
          <h1>Need more info</h1>
          <img className="img" src={errorImage} alt="" />
          <p>Please fill out address, phone and payment method</p>
          <button
            className="btn center"
            onClick={() =>
              setModalState({ ...modalState, inValidOrder: false })
            }
          >
            Ok
          </button>
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
      font-size: 2rem;
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

  @media (max-width: 56.25em) {
    .content {
      max-width: 70rem;
      max-height: 50rem;
      border-radius: 1rem;
      padding: 2rem 3rem;
      gap: 2rem;
      text-align: center;
      margin: auto 1rem;
    }
  }

  @media (max-width: 31.25em) {
    .btn {
      padding: 2.6rem 10rem;
    }
  }
`;
