import styled from "styled-components";
import closeIcon from "../images/common/closeIcon.svg";

export const AllergyModal = ({
  setAllergyModal,
}: {
  setAllergyModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const changeHandler = () => {};

  return (
    <Wrapper>
      <main className="modal-container show-modal">
        <div className="content center">
          <button className="close-btn" onClick={() => setAllergyModal(false)}>
            <img src={closeIcon} alt="close X" />
          </button>

          <h1>Your order</h1>
          <p>Add your allergies</p>

          <form className="form" action="#" onChange={changeHandler}>
            <textarea
              className="text-content"
              name="Allergy area"
              value=""
              placeholder="Let the restaurant know what they should take into account"
              maxLength={255}
            />
            <p className="characters-left">{255}</p>
          </form>

          <button className="btn center" onClick={() => setAllergyModal(false)}>
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

  .content {
    background: #fff;
    position: relative;
    min-width: 60rem;
    max-height: 45rem;
    border-radius: 1rem;
    flex-direction: column;
    gap: 2rem;
    margin: 10vh auto;
    padding: 0;

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
    width: 54rem;
    height: 18rem;
    border-radius: 2rem;
    padding 1rem;
    color: darkgrey;
    border: none;
    resize: none;
  }

  .characters-left {
    color: grey;
    position: absolute;
    bottom: 0.5rem;
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
`;
