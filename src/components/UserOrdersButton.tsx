import React from "react";
import styled from "styled-components";

export const UserOrdersButton = (props: { color: string }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <Wrapper>
      <main className="menu-icon-orders">
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
  }
`;
