import styled from "styled-components";
import { IModalState } from "../../modules/modules";
import closeIcon from "../../images/common/closeIcon.svg";
import bell from "../../images/order/deliveryTrms.svg";
export const DeliveryTermsModal = ({
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
          modalState.deliveryTerms
            ? "modal-container show-modal"
            : "modal-container"
        }
      >
        <div className="content center">
          <button
            className="close-btn"
            onClick={() =>
              setModalState({ ...modalState, deliveryTerms: false })
            }
          >
            <img src={closeIcon} alt="close X" />
          </button>
          <h1>On demand only</h1>
          <img src={bell} alt="" />
          <p>You can’t schedule a plova for this store.</p>
          <button
            className="btn center"
            onClick={() =>
              setModalState({ ...modalState, deliveryTerms: false })
            }
          >
            Go it
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
