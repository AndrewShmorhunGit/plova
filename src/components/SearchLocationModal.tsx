import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

export const SearchLocationModal = ({
  setShowLocationModal,
}: {
  setShowLocationModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Wrapper>
      <div className="block">
        <div className="registration-container show-registration center">
          <div className="content center">
            <h1>Sign up to Plova</h1>
            <button
              className="close-btn"
              onClick={() => setShowLocationModal(false)}
            >
              <FaTimes />
            </button>
            <button className="btn-fb btn center">Facebook</button>
            <p className="center">or</p>
            <form action="" className="form">
              <div className="input-line">
                <p style={{ paddingRight: "1rem" }}>icon</p>
                <input
                  type="text"
                  className="form-input"
                  placeholder="first name"
                />
              </div>
              <div className="input-line">
                <p style={{ paddingRight: "1rem" }}>icon</p>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e-mail"
                />
              </div>
              <div className="input-line">
                <p style={{ paddingRight: "1rem" }}>icon</p>
                <input type="text" className="form-input" />
              </div>
            </form>
            <button className="btn-fb btn center">Sign up with e-mail</button>
            <p>
              Get an account already? <a href="#">Log in</a>
            </p>
            <div className="nav-links">
              {/* <NavLinks toggleSidebar={toggle} /> */}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // @media (min-width: 992px) {
  //   display: none;
  // }

  .registration-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    overflow: auto;
  }

  .show-registration {
    z-index: 99;
    opacity: 1;
  }

  .content {
    background: #fff;
    width: 80rem;
    height: 60rem;
    border-radius: 1rem;
    flex-direction: column;
    margin: 10vh auto;
    gap: 4rem;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: grey;
    cursor: pointer;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .form-input {
    border: none;
    border-bottom: solid 1px grey;
  }

  .input-line {
    width: 26rem;
    display: flex;
  }

  .form-input:focus {
    outline: none;
  }

  .logo {
    width: 12rem;
  }

  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
`;
