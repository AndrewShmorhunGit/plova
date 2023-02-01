import styled from "styled-components";
import { IModalState, IOrderState } from "../../modules/modules";
import closeIcon from "../../images/common/closeIcon.svg";

export const AllergyModal = ({
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
  return (
    <Wrapper>
      <main
        className={
          modalState.allergy ? "modal-container show-modal" : "modal-container"
        }
      >
        <div className="content center">
          <button
            className="close-btn"
            onClick={() => {
              setModalState({ ...modalState, allergy: false });
              setTimeout(
                () =>
                  setOrderState({
                    ...orderState,
                    allergyInfo: "",
                  }),
                500
              );
            }}
          >
            <img src={closeIcon} alt="close X" />
          </button>

          <h1>Your order</h1>
          <p>Add your allergies</p>

          <form className="form" action="#">
            <textarea
              className="text-content"
              name="Allergy area"
              value={orderState.allergyInfo}
              placeholder="Let the restaurant know what they should take into account"
              maxLength={255}
              onChange={(event) =>
                setOrderState({
                  ...orderState,
                  allergyInfo: event.target.value,
                })
              }
            />
            <p className="characters-left">
              {255 - orderState.allergyInfo.length}
            </p>
          </form>

          <button
            className="btn center"
            onClick={() => setModalState({ ...modalState, allergy: false })}
          >
            Save
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
    // overflow: auto;
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
    min-width: 60rem;
    min-height: 40rem;
    max-height: 45rem;
    border-radius: 1rem;
    flex-direction: column;
    gap: 2rem;
    margin: auto auto;
    padding: 2rem 3rem;

    h1 {
      font-size: 3.2rem;
    }

    p {
      font-weight: 400;
    }
  }

  .form {
    position: relative;
  }

  .text-content {
    display: flex;
    background-color: #f5f5f5;
    min-width: 42rem;
    max-width: 52rem;
    min-height: 15rem;
    border-radius: 2rem;
    padding 1rem;
    color: #343a40  ;
    border: none;
    resize: none;
  }

  .characters-left {
    color: black ;
    font-weight: 700;
    position: absolute;
    bottom: 0.75rem;
    right: 1rem;
  }

  .btn {
    padding: 2.6rem 14rem;
    border-radius: 10rem;
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
      min-width: auto;
      min-height: auto;
      gap: 2rem;
      margin: auto 1rem;

      h1 {
        font-size: 3.2rem;
      }

      p {
        font-weight: 400;
      }
    }

    .text-content {
      min-width: 32rem;
    }

    .btn {
      padding: 2.6rem 10rem;
    }
  }    

`;
