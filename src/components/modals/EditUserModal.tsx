import React, { FormEvent } from "react";
import styled from "styled-components";
import { usersApi } from "../../api/usersApi";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import closeIcon from "../../images/common/closeIcon.svg";
import { userActions } from "../../store/actions/userActions";
import { getStorageUser } from "../../units/functions";
export const EditUserModal = () => {
  const { profileModal, loading } = useAppSelector((store) => store.user);

  const currentUser = getStorageUser();
  const [name, setName] = React.useState<string>(
    !currentUser ? "" : currentUser.user.name
  );

  const [email, setEmail] = React.useState<string>(
    !currentUser ? "" : currentUser.user.email
  );

  const [error, setError] = React.useState("");

  const dispatch = useAppDispatch();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (name === null || email === null) {
      setError("User is undefined, please refresh page");
      return;
    }

    if (!currentUser) {
      dispatch(userActions.userLogOut());
      return;
    }

    event.preventDefault();
    usersApi
      .editProfile(currentUser.user.id, currentUser.accessToken, {
        name,
        email,
      })
      .then((user) => {
        if (user) {
          dispatch(userActions.setEditedUser({ name: name, email: email }));
          dispatch(userActions.toggleProfileModal());
        } else {
          throw new Error("Bad getUser request");
        }
      });
  }

  function handleChange(
    event: {
      target: {
        value: string;
      };
    },
    inputName: string
  ) {
    if (event.target === undefined) return;
    const { value } = event.target;
    inputName === "name" ? setName(value) : setEmail(value);
  }

  return (
    <Wrapper>
      {!loading && (
        <main
          className={
            profileModal ? "modal-container show-modal" : "modal-container"
          }
        >
          <div className="content center">
            <div className="close-btn">
              <img
                src={closeIcon}
                alt="close x"
                onClick={() => dispatch(userActions.toggleProfileModal())}
              />
            </div>
            <h1>Edit Profile</h1>
            {error}
            <div className="form-div">
              <form action="#" className="form" onSubmit={handleSubmit}>
                <div className="input-box">
                  <input
                    id="usernameInput"
                    type="text"
                    className="form-input"
                    value={name}
                    onChange={(e) => handleChange(e, "name")}
                    required
                  />
                  <span className="placeholder">First name</span>
                </div>
                <div className="input-box">
                  <input
                    id="emailInput"
                    type="email"
                    className="form-input"
                    value={email}
                    onChange={(e) => handleChange(e, "email")}
                    required
                  />
                  <span className="placeholder">Email</span>
                </div>
                <div className="center">
                  <input
                    className="btn btn-submit center"
                    type="submit"
                    value="Save"
                  />
                </div>
              </form>
            </div>
          </div>
        </main>
      )}
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
    z-index: -1;
    opacity: 0;
    overflow: auto;
    transition: all 0.5s ease;
  }

  .show-modal {
    z-index: 99;
    opacity: 1;
  }

  .content {
    background: #fff;
    position: relative;
    max-width: 70rem;
    max-height: 50rem;
    border-radius: 1rem;
    flex-direction: column;
    gap: 4rem;
    margin: auto;
    padding: 5rem;
    text-align: center;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.8rem;
      font-weight: 400;
    }
  }

  .btn-submit {
    padding: 0;
    margin-top: 2rem;
    width: 33.8rem;
    height: 4.8rem;
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
    position: absolute;
    font-size: 1.8rem;
    font-weight: 300;
    color: #343a40;
    left: 0rem;
    top: 1rem;
    pointer-events: none;
    transition: all 0.5s;
  }

  .input-box input:focus ~ span,
  .input-box input:valid ~ span {
    color: #343a40;
    font-weight: 500;
    font-size: 1.2rem;
    transform: translateY(-2.2rem);
  }

  @media (max-width: 56.25em) {
    .content {
      max-width: auto;
      max-height: auto;
      border-radius: 1rem;
      padding: 2rem 3rem;
      gap: 2rem;
      margin: auto 1rem;
    }
  }

  @media (max-width: 31.25em) {
    .btn {
      padding: 2.6rem 10rem;
    }
  }
`;
