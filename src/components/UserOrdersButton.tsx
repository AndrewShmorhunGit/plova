import React from "react";
import styled from "styled-components";
import { useClickOutside } from "../hooks/useClickOutside";

export const UserOrdersButton = (props: { color: string }) => {
  const [isActive, setIsActive] = React.useState(false);
  const insideRef = React.useRef<HTMLDivElement | null>(null);
  useClickOutside(insideRef, () => setIsActive(false));

  const order = null;

  return (
    <Wrapper>
      <main ref={insideRef} className="menu-icon-orders">
        <div className="icon-container" onClick={() => setIsActive(!isActive)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="none"
            className="orders-icon header-action"
          >
            <g
              stroke={!isActive ? props.color : "#00a082"}
              strokeWidth="2"
              className="orders-icon__paths"
            >
              <circle cx="5.5" cy="6.66815" r="3"></circle>
              <circle cx="5.5" cy="16.66815" r="3"></circle>
              <circle cx="5.5" cy="26.66815" r="3"></circle>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6.66815h16m-16 10h16m-16 10h16"
              ></path>
            </g>
          </svg>
        </div>
        <div
          className="order-container"
          style={
            isActive
              ? { opacity: "1", display: "block" }
              : { opacity: "0", display: "none" }
          }
        >
          <div className="order">
            <div className="icon-pointer"></div>
            <h5 className="orders-header">Orders</h5>
            {!order && (
              <div className="empty-order">
                <h4>You've not made any orders just yet!</h4>
                <h5>
                  Explore our stores and find everything you've been looking for
                </h5>
              </div>
            )}
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .menu-icon-orders {
    padding: 0.1rem 0.8rem;
    cursor: pointer;
    margin-top: 0.1rem;
    transition: all 0.5s ease;
    position: relative;
  }

  .order-container {
    max-width: 45rem;
    min-height: auto;
    min-width: 45rem;
    background-color: white;
    position: absolute;
    top: 5.5rem;
    padding: 2.4rem;
    right: -6.2rem;
    border-radius: 1rem;
    cursor: auto;
    box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
    z-index: 10;
  }

  .order {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .icon-pointer {
    position: absolute;
    background-color: white;
    width: 3rem;
    height: 1rem;
    top: -1rem;
    transform: translateX(32.4rem);
    clip-path: polygon(50% 0, 50% 0, 100% 100%, 0 100%);
  }

  .orders-header {
    padding-bottom: 1rem;
    color: grey;
    font-weight: 300;
    border-bottom: 1px lightgrey solid;
  }

  .empty-order {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #495057;
    font-weight: 400;
    text-align: center;
  }
`;
