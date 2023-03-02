import styled from "styled-components";
import letter from "../../images/registration/letter.svg";
import person from "../../images/registration/person.svg";
import lock from "../../images/registration/lock.svg";
import closeIcon from "../../images/common/closeIcon.svg";
import { GrFacebook } from "react-icons/gr";
import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import {
  fetchLogin,
  fetchRegister,
  userActions,
} from "../../store/actions/userActions";
import { IUserSignUp } from "../../modules/modules";

export const RegistrationModal = () => {
  const dispatch = useAppDispatch();
  const { user, registerModal, error } = useAppSelector((state) => state.user);
  const [login, setIsLogin] = React.useState(false);

  React.useEffect(() => {
    user && dispatch(userActions.closeRegisterModal());
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IUserSignUp>({
    mode: "onBlur",
  });

  const onSubmit = (data: IUserSignUp) => {
    if (login) {
      return dispatch(fetchRegister(data));
    }
    dispatch(fetchLogin({ email: data.email, password: data.password }));
  };

  const emailValidation: RegExp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return (
    <Wrapper>
      <main
        className={
          registerModal
            ? "registration-container show-registration"
            : "registration-container"
        }
      >
        <div className="content" style={{ height: login ? "75rem" : "65rem" }}>
          <h1 className="title">
            {login ? "Sign up to Plova" : "Log in to Plova"}
          </h1>
          <button className="close-btn">
            <img
              src={closeIcon}
              alt="close x"
              onClick={() => dispatch(userActions.toggleRegisterModal())}
            />
          </button>
          <button className="btn-fb btn center">
            <div className="center">
              <GrFacebook className="fb-icon" />
              <p>Facebook</p>
            </div>
          </button>
          <div className="or center" style={{ fontSize: "2rem" }}>
            <div className="deco-line"></div>
            or
            <div className="deco-line"></div>
          </div>
          <form
            // action={`${process.env.REACT_APP_AUTH_URL}/users`}
            action="#"
            className="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {login && (
              <div className="input-line center">
                <label className="label center">
                  <img
                    className="form-icon"
                    src={person}
                    alt="person abstraction"
                  />
                  <div className="input-box">
                    <input
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      className="form-input"
                      required
                    />
                    <span className="placeholder">First name</span>
                  </div>
                </label>
                <p className="form-error-message">{errors.name?.message}</p>
              </div>
            )}

            <div className="input-line center">
              <label className="label center">
                <img className="form-icon" src={letter} alt="letter" />
                <div className="input-box">
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: emailValidation,
                        message: "Email address is not valid",
                      },
                    })}
                    className="form-input"
                    required
                  />
                  <span className="placeholder">Email</span>
                </div>
              </label>
              <p className="form-error-message">{errors.email?.message}</p>
            </div>

            <div className="input-line center">
              <label className="label center">
                <img className="form-icon" src={lock} alt="lock" />
                <div className="input-box">
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must contain at least 8 characters",
                      },
                    })}
                    type="password"
                    className="form-input"
                    required
                  />
                  <span className="placeholder">Password</span>
                </div>
              </label>
              <p className="form-error-message">{errors.password?.message}</p>
            </div>

            <div className="center">
              <input
                type="submit"
                value={login ? "Sign up with email" : "Log in with email"}
                disabled={!isValid}
                className={
                  isValid
                    ? `btn-email_active btn `
                    : "btn-email_not-allowed btn center"
                }
              />
            </div>
          </form>
          <p>
            {login ? "Get an account already?" : "New in Plova?"}
            <button className="login-button" onClick={() => setIsLogin(!login)}>
              {login ? "Log in" : "Sign up"}
            </button>
          </p>
          {login ? (
            <div className="footer">
              <p>By creating an account, you accept: </p>
              <a href="#">Terms of service, </a>
              <a href="#">Privacy Policy</a>
              and
              <a href="#"> Cookies Policy</a>
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .registration-container {
    position: fixed;
    max-width: 100%;
    height: 100%;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    z-index: -1;
    overflow: auto;
    opacity: 0;
    transition: all 0.5s ease;
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
    max-height: auto;
    border-radius: 1rem;
    padding: 4rem;
    padding-top: 6rem;
    margin: auto;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.2rem;
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
    min-height: 4.8rem;
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

  .btn-email_not-allowed {
    margin-top: 2rem;
    width: 33.8rem;
    height: 4.8rem;
    color: white
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

  .btn-email_not-allowed:hover {
    cursor: not-allowed;
  }

  .btn-email_active {
    margin-top: 2rem;
    width: 33.8rem;
    height: 4.8rem;
    background-color: #00a082ff;
    color: white;
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
    width: auto;
    color: #838383;
    gap: 3rem;

    label {
      gap: 1rem;
    }
  }

  .input-line {
    height: 6rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: start;
  }

  .form-icon {
    width: 2.6rem;
  }

  .form-error-message {
    font-size: 1.2rem;
    color: #DB4437;
    margin-top: 0rem;  
    margin-left: 0rem;
  }

  .input-box {
    position: relative;
  }

  .input-box input {
    height: 4rem;
    min-width: 35rem;
    padding: 0rem 0rem;
    border: none;
    border-bottom: solid 1px grey;
    font-weight: 300;
    font-size: 1.8rem;
  }

  .input-box input:focus {
    outline: none;
    border-bottom: solid 2px grey;
  }

  .input-box span {
    position:absolute;
    font-size: 1.8rem;
    font-weight: 300;
    color: #343a40;
    left: 0rem;
    top: 1rem;
    pointer-events: none;
    transition: all 0.5s;
  }

  .input-box input:focus ~ span,
  .input-box input:valid ~ span
  {
    color: #343a40;
    font-weight: 500;
    font-size: 1.2rem;
    transform: translateY(-2.2rem);
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

  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }

  .footer {
    display: block;
    text-align: center;
    max-width: 40rem;
    // flex-direction: column;
    font-weight: 300;
    // margin-bottom: 5rem;
    // gap: 1rem;
    
    p, a {
      font-size: 1.2rem;

    }

  }

  .or {
    max-width: 40rem;
    margin: 0rem auto;
    font-size: 1.8rem;
    line-height: 1.4;
    font-weight: 300;
    color: inherit;
    gap: 1rem;
  }

  .deco-line {
    display: block;
    min-height: 0.5px;
    min-width: 15rem;
    background: #d3d3d3;
    opacity: 0.7;
  }

  h1 {
    font-size: 3rem;
    padding-bottom: 2rem;
  }

  a {
    color: #838383;
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }

  p {
    font-size: 1.6rem;
    color: #838383;
    font-weight: 400;
  }

 @media (max-width: 40.625em) {
    .content {
      max-width: 100dvw;
      min-height: 100%;
      margin: auto;
      border-radius: 0;
      gap: 2.4rem;
      .deco-line {
        min-width: 10rem;
      }
    }
  }

  @media (max-width: 31.25em) {
    .input-line {
      padding-left: 3rem;
    }

    .input-box input {
      min-width: 25rem;
      font-size: 1.8rem;
    }
  }


`;
