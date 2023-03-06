// import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import closeIcon from "../../images/common/closeIcon.svg";
import { userActions } from "../../store/actions/userActions";
export const EditUserModal = () => {
  const dispatch = useAppDispatch();
  const { profileModal } = useAppSelector((store) => store.user);
  return (
    <Wrapper>
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
          <p>Some interactive content</p>
          <button className="btn center">Save</button>
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
