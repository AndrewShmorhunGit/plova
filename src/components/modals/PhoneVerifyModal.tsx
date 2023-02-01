import styled from "styled-components";
import { IModalState, IOrderState } from "../../modules/modules";
import closeIcon from "../../images/common/closeIcon.svg";
import flagUA from "../../images/order/FlagUA.svg.png";
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
    currentPhoneNumber.length === 9;
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
          <div className="add-phone-container">
            <p className="phone">Phone</p>
            <label className="label" htmlFor="#phone-input">
              <img src={flagUA} alt="flag of UA" className="flag"></img>
              +380
              <input
                className="input"
                type="text"
                value={currentPhoneNumber}
                onChange={(event) => {
                  setCurrentPhoneNumber(event.target.value);
                }}
                id="#phone-input"
              />
            </label>
          </div>

          <div className="error-message-container">
            {error && <p className="error-message">Invalid phone number!</p>}
          </div>

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
    // min-width: 60rem;
    // min-height: 40rem;
    max-height: 45rem;
    border-radius: 1rem;
    flex-direction: column;
    gap: 4rem;
    margin: auto;
    padding: 0;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 2.4rem;
      font-weight: 400;
    }
  }

  .content-info {
    flex-direction: column;
    gap: 2rem;
  }

  .add-phone-container {
    font-size: 2rem;
  }

  .phone {
    justify-content: start;
    padding-bottom: 1rem;
  }

  .error-message-container {
    min-height: 2rem;
  }

  .error-message {
    font-size: 1.2rem;
    color: #db4437;
    margin-top: 0rem;
    margin-left: 0rem;
  }

  .label {
    display: flex;
    min-height: 4rem;
    gap: 0.2rem;
    background: lightgrey;
    align-items: center;
  }

  .flag {
    display: flex;
    background: linear-gradient(180deg, blue 50%, yellow 50%);
    max-hight: 2.4rem;
    max-width: 4.8rem;
    border: solid 1rem lightgrey;
  }

  .input {
    display: flex;
    align-items: center;
    min-height: 4rem;

    padding-left: 1rem;
    font-size: 2rem;
    letter-spacing: 0.2rem;
    color: #212529;
    border: none;
    border-top: solid 4px transparent;
    border-bottom: solid 1px lightgrey;
  }

  .input:hover {
    border-bottom: solid 2px lightgrey;
  }

  .input:focus {
    outline: none;
    border-bottom: solid 2px lightgrey;
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

  @media (max-width: 56.25em) {
    .content {
      max-width: 98dvw;
      max-height: auto;
      gap: 1.6rem;
      padding: 5rem;
      margin: auto 1rem;

      h1 {
        text-align: center;
        font-size: 2.6rem;
        padding-bottom: 1rem;
      }

      p {
        font-weight: 400;
      }
    }

    .btn {
      padding: 2.6rem 10rem;
    }
  }
  @media (max-width: 31.25em) {
    .btn {
      padding: 2.6rem 10rem;
    }
  }
`;
