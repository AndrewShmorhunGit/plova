import styled from "styled-components";
import closeIcon from "../../images/common/closeIcon.svg";
import flagUA from "../../images/order/FlagUA.svg.png";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import { userActions } from "../../store/actions/userActions";

import { usersApi } from "../../api/usersApi";
import { SignInResponse } from "../../modules/modules";

export const EditUserPhoneModal = () => {
  const [currentPhoneNumber, setCurrentPhoneNumber] = React.useState("");
  const [error, setError] = React.useState(false);
  const valid =
    currentPhoneNumber &&
    +currentPhoneNumber &&
    currentPhoneNumber.length === 9;
  const dispatch = useAppDispatch();
  const { phoneModal, currentUser } = useAppSelector((state) => state.user);

  React.useEffect(() => {
    if (!error) return;
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [error]);

  const handleSubmit = (currentUser: SignInResponse, phone: string) => {
    !valid && setError(true);
    valid && dispatch(userActions.togglePhoneModal());

    usersApi
      .editProfile(currentUser.user.id, currentUser.accessToken, {
        phone: `+380${phone}`,
      })
      .then((user) => {
        if (user)
          dispatch(
            userActions.setUserPhone({
              phone: `+380${phone}`,
            })
          );
        else {
          throw new Error("Bad getUser request");
        }
      });
  };

  return (
    <Wrapper>
      <main
        className={
          phoneModal ? "modal-container show-modal" : "modal-container"
        }
      >
        <div className="content center">
          <button
            className="close-btn"
            onClick={() => dispatch(userActions.togglePhoneModal())}
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
              currentUser && handleSubmit(currentUser, currentPhoneNumber);
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
    padding: 6rem 6rem;

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
    // min-height: 2rem;
    position: relative;
    width: 100%;
    p {
      font-size: 1.6rem;
    }
  }

  .error-message {
    position: absolute;
    color: #db4437;
    right: 50%;
    transform: translateX(50%);
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
    .content {
      padding: 4rem 2rem;

      h1 {
        padding: 3rem 0;
      }
    }
    .btn {
      padding: 2.6rem 10rem;
    }
  }
`;
