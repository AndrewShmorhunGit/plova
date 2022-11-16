import styled from "styled-components";
import { GrFacebook } from "react-icons/gr";
import { useState } from "react";

// const InitialState = {
//   name: "",
//   password: "",
//   email: "",
//   isMember: false,
// };

export const Registration = ({
  setShowRegistration,
}: {
  setShowRegistration: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // const [values, setValues] = useState(InitialState);

  const [login, setIsLogin] = useState(false);

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setValues({ ...values, [name]: value });
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const { name, email, password, isMember } = values;
  //   if (!email || !password || (!isMember && !name)) {
  //     toast.error("Please Fill Out All Fields");
  //     return;
  //   }
  //   if (isMember) {
  //     dispatch(loginUser({ email: email, password: password }));
  //     return;
  //   }
  //   dispatch(registerUser({ email, password, name }));
  // };

  // const toggleMember = () => {
  //   setValues({ ...values, isMember: !values.isMember });
  // };

  return (
    <Wrapper>
      <div className="registration-container show-registration">
        <div className="content" style={{ height: login ? "80rem" : "65rem" }}>
          <header>
            {/* <img src={logo} alt="Plovo logo" className="logo" /> */}
          </header>
          <h1>{login ? "Sign up to Plova" : "Login to Plova"}</h1>
          <button
            className="close-btn"
            // onClick={toggle}
          >
            <img
              src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/close-icon.svg"
              alt="close x"
              onClick={() => setShowRegistration(false)}
            />
          </button>
          <button className="btn-fb btn center">
            <div className="center">
              <GrFacebook className="fb-icon" />
              <p>Facebook</p>
            </div>
          </button>
          <p className="center" style={{ fontSize: "2rem" }}>
            or
          </p>
          <form action="" className="form">
            {login && (
              <div className="input-line center">
                <div style={{ paddingRight: "1rem" }}>
                  <img
                    className="form-icon"
                    src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/glyphs/person.svg"
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  className="form-input"
                  required
                  placeholder="First name"
                />
              </div>
            )}
            <div className="input-line center">
              <div style={{ paddingRight: "1rem" }}>
                <img
                  className="form-icon"
                  src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/glyphs/letter.svg"
                  alt=""
                />
              </div>
              <input type="e-mail" className="form-input" placeholder="Email" />
            </div>
            <div className="input-line center">
              <div style={{ paddingRight: "1rem" }}>
                <img
                  className="form-icon"
                  src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/glyphs/lock.svg"
                  alt=""
                />
              </div>
              <input
                type="password"
                className="form-input"
                placeholder="Password"
              />
            </div>
          </form>
          <button
            className={
              login ? `btn-email btn center` : "btn-email_active btn center"
            }
          >
            <p>Sign up with email</p>
          </button>
          <p>
            {login ? "Get an account already?" : "New in Plova?"}
            <button className="login-button" onClick={() => setIsLogin(!login)}>
              {login ? "Log in" : "Sign up"}
            </button>
          </p>
          {login ? (
            <div className="footer center">
              By creating an account, you automatically accept our
              <div>
                <a href="#">Terms of service, </a>
                <a href="#">Privacy Policy</a> and
                <a href="#"> Cookies Policy</a>
              </div>
            </div>
          ) : (
            ""
          )}
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
    padding: 8.5rem 0;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    overflow: auto;
  }

  .registration-container::-webkit-scrollbar {
    width: 0;
  }

  .show-registration {
    z-index: 99;
    opacity: 1;
  }

  .content {
    background: #fff;
    width: 60rem;
    border-radius: 1rem;
    padding: 1rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.8rem;
  }

  .close-btn {
    position: absolute;
    top: 2.6rem;
    right: 2.6rem;
    background: transparent;
    border-color: transparent;
    color: grey;
    cursor: pointer;
  }

  .btn-fb {
    width: 33.8rem;
    height: 4.8rem;
    background-color: #3c539a;
    color: white;
    text-transform: uppercase;
    padding: 0;
    letter-spacing: 0.05rem;
    font-size: 1.7rem;

    p {
      color: white;
      font-weight: 600;
      font-size: 1.7rem;
    }
  }

  .btn-fb:hover {
    background-color: #30427b;
  }

  .btn-email {
    margin-top: 2rem;
    width: 33.8rem;
    height: 4.8rem;
    color: white;
    // text-transform: uppercase;
    padding: 0;
    letter-spacing: 0.05rem;
    font-size: 1.7rem;
    background: #c1c1c1;

    p {
      color: white;
      font-weight: 600;
      font-size: 1.8rem;
    }
  }
  .btn-email:hover {
    cursor: not-allowed;
  }

  .btn-email_active {
    margin-top: 2rem;
    width: 33.8rem;
    height: 4.8rem;
    background-color: #00a082ff;
    color: white;
    // text-transform: uppercase;
    padding: 0;
    letter-spacing: 0.05rem;
    font-size: 1.7rem;

    p {
      color: white;
      font-weight: 600;
      font-size: 1.8rem;
    }
  }

  .btn-email_active:hover {
    background-color: #006653ff;
  }

  .fb-icon {
    height: auto;
    margin-right: 1rem;
    margin-bottom: 0.1rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 40rem;
    gap: 4rem;
    color: #838383;
  }

  .input-line {
    height: 5rem;
    display: flex;
  }

  .form-input {
    height: 4rem;
    width: 35rem;
    border: none;
    border-bottom: solid 2px grey;
    font-size: 1.8rem;
  }

  .form-input:focus {
    outline: none;
  }

  .form-icon {
    width: 2.6rem;
  }

  .login-button {
    border: none;
    background: none;
    padding: 0rem 2rem;
    color: #00a082ff;
    font-weight: 700;
    font-size: 1.6rem;
    cursor: pointer;
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

  .footer {
    width: 40rem;
    flex-direction: column;
  }

  h1 {
    font-size: 3rem;
  }

  a {
    color: #838383;
    text-decoration: none;
    font-weight: 600;
  }

  a:hover {
    text-decoration: underline;
  }

  p {
    font-size: 1.6rem;
    color: #838383;
    font-weight: 400;
  }
`;
