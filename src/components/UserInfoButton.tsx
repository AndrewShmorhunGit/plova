import React from "react";
import styled from "styled-components";
import { useClickOutside } from "../hooks/useClickOutside";

export const UserInfoButton = (props: { color: string }) => {
  const [isActive, setIsActive] = React.useState(false);
  const insideRef = React.useRef<HTMLDivElement | null>(null);

  useClickOutside(insideRef, () => setIsActive(false));
  return (
    <Wrapper>
      <div ref={insideRef} className="menu-icon-user">
        <div className="icon-container" onClick={() => setIsActive(!isActive)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="34"
            height="34"
            viewBox="0 0 32 32"
            className="profile-icon header-action"
          >
            <g
              fill="none"
              stroke={!isActive ? props.color : "#00a082"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="profile-icon__paths"
            >
              <path d="M25.0801 24.1107c-2.2971-3.0455-5.4822-5.5086-9.0186-5.5086-3.7536 0-7.12573 2.128-9.44431 5.5086"></path>
              <circle cx="16" cy="13.5874" r="4.91841"></circle>
              <circle cx="16.0001" cy="16.0001" r="13.0909"></circle>
            </g>
          </svg>
        </div>
        <div
          className="info-container"
          style={
            isActive
              ? { opacity: "1", display: "block" }
              : { opacity: "0", display: "none" }
          }
        >
          <div className="info">
            <div className="icon-pointer"></div>
            <h3 className="greeting">Hello, {`userName`}!</h3>
            <div className="info-unit">
              <div className="edit-container">
                <p className="info-title">Name</p>
                <p className="edit" onClick={() => setIsActive(false)}>
                  Edit
                </p>
              </div>
              <p className="user-info">{`username`}</p>
              <p className="info-title">Email</p>
              <p
                className="user-info"
                onClick={() => setIsActive(false)}
              >{`user e-mail`}</p>
            </div>
            <div className="info-unit">
              <div className="edit-container">
                <p className="info-title">Phone</p>
                <p className="edit" onClick={() => setIsActive(false)}>
                  Edit
                </p>
              </div>
              <p className="user-info">{`+380777777777`}</p>
            </div>

            <div className="info-unit">
              <div className="edit-container">
                <p className="info-title">Password</p>
                <p className="edit" onClick={() => setIsActive(false)}>
                  Edit
                </p>
              </div>
              <p className="user-info">{`***********`}</p>
            </div>
            <div className="info-unit-button">
              <button className="logout-button">Log out</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .menu-icon-user {
    padding: 0.1rem 1.6rem;
    cursor: pointer;
    margin-top: 0.1rem;
  }

  .info-container {
    max-width: auto;
    min-height: auto;
    min-width: 35rem;
    background-color: white;
    position: absolute;
    top: 8rem;
    padding: 2.4rem;
    right: 4rem;
    border-radius: 1rem;
    cursor: auto;
    box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
    z-index: 10;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .info-unit {
    border-bottom: 1px solid lightgrey;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 2rem;
    font-size: 1.4rem;
  }

  .info-unit-button {
    display: flex;
    justify-content: end;
  }

  .greeting {
    padding: 2rem 0;
    color: #212529;
    border-bottom: 1px solid lightgrey;
  }
  .info-title {
    color: grey;
    font-weight: 300;
  }

  .user-info {
    color: #495057;
    font-weight: 500;
  }

  .logout-button {
    border: none;
    background: none;
    padding: 0;
    color: #00a082;
    font-weight: 700;
    font-size: 1.4rem;
    cursor: pointer;
  }

  .edit-container {
    display: flex;
    justify-content: space-between;
  }

  .edit {
    color: #00a082;
    cursor: pointer;
  }

  .icon-pointer {
    position: absolute;
    background-color: white;
    width: 3rem;
    height: 1rem;
    top: -1rem;
    // transform: rotate(30deg);
    transform: translateX(16.6rem);
    clip-path: polygon(50% 0, 50% 0, 100% 100%, 0 100%);
  }
`;
