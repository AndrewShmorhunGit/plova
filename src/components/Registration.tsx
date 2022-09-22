import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import logo from "../logos/logo.png";
export const Registration = ({
  // showRegistration,
  setShowRegistration,
}: {
  // showRegistration: boolean;
  setShowRegistration: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Wrapper>
      <div className="registration-container show-registration">
        <div className="content">
          <header>
            <img src={logo} alt="" className="logo" />
          </header>
          <h1>Sign up to Plova</h1>
          <button
            className="close-btn"
            // onClick={toggle}
          >
            <FaTimes onClick={() => setShowRegistration(false)} />
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
              <input type="text" className="form-input" placeholder="e-mail" />
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
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  // @media (min-width: 992px) {
  //   display: none;
  // }
  .registration-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-registration {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: #fff;
    width: 60rem;
    height: 90vh;
    border-radius: 1rem;
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
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
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-500);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--grey-900);
  }
  .nav-link:hover .icon {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .active {
    color: var(--grey-900);
  }
  .active .icon {
    color: var(--primary-500);
  }
`;
