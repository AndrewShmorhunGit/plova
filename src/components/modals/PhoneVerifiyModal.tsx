import styled from "styled-components";
import { IModalState, IOrderState } from "../../modules/modules";
import closeIcon from "../../images/common/closeIcon.svg";
import { useState } from "react";

export const PhoneVerifyMOdal = ({
  setModalState,
  modalState,
  setOrderState,
  orderState,
}: {
  setOrderState: React.Dispatch<React.SetStateAction<IOrderState>>;
  orderState: IOrderState;
  setModalState: React.Dispatch<React.SetStateAction<IModalState>>;
  modalState: IModalState;
}) => {
  const [currentPhoneNumber, setCurrentPhoneNumber] = useState("");
  const [error, setError] = useState(false);
  const valid =
    currentPhoneNumber &&
    Number.isInteger(parseInt(currentPhoneNumber)) &&
    currentPhoneNumber.length === 7;
  return (
    <Wrapper>
      <main
        className={
          modalState.phoneVerify
            ? "modal-container show-modal"
            : "modal-container"
        }
      >
        <div className="content center">
          <button
            className="close-btn"
            onClick={() => setModalState({ ...modalState, phoneVerify: false })}
          >
            <img src={closeIcon} alt="close X" />
          </button>
          <h1>Verify your phone number</h1>
          <p className="phone">Phone</p>
          <label className="label" htmlFor="#phone-input">
            +380
          </label>
          <input
            className="input"
            type="text"
            value={currentPhoneNumber}
            onChange={(event) => {
              setCurrentPhoneNumber(event.target.value);
            }}
            id="#phone-input"
          />
          {error && !valid && (
            <p className="error-message">Hey! Not valid number!</p>
          )}
          <button
            className={
              valid ? "btn btn-active center" : "btn btn-not-allowed center"
            }
            onClick={() => {
              valid && setModalState({ ...modalState, phoneVerify: false });
              valid &&
                setOrderState({
                  ...orderState,
                  phoneNumber: `+380${currentPhoneNumber}`,
                });
              !valid && setError(true);
            }}
          >
            Confirm
          </button>
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
    min-width: 80rem;
    height: 50rem;
    border-radius: 1rem;
    flex-direction: column;
    gap: 4rem;
    margin: 5rem auto;
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

  .btn-not-allowed {
    background: #c1c1c1;
    p {
      color: white;
      font-weight: 600;
      font-size: 1.8rem;
    }
  }

  .btn-not-allowed:hover {
    cursor: not-allowed;
  }

  .btn-active {
    background-color: #00a082ff;
    p {
      color: white;
      font-weight: 600;
      font-size: 1.8rem;
    }
  }

  .btn-active:hover {
    background-color: #006653ff;
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
`;
