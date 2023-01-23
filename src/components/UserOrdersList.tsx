import styled from "styled-components";

export const UserOrdersList = () => {
  return (
    <Wrapper>
      <main className="menu-icon-orders">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          fill="none"
          className="orders-icon header-action"
        >
          <g stroke="#FFFFFF" strokeWidth="2" className="orders-icon__paths">
            <circle cx="5.5" cy="6.66815" r="3"></circle>{" "}
            <circle cx="5.5" cy="16.66815" r="3"></circle>{" "}
            <circle cx="5.5" cy="26.66815" r="3"></circle>{" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6.66815h16m-16 10h16m-16 10h16"
            ></path>
          </g>
        </svg>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .menu-icon-orders {
    padding: 0.1rem 0.8rem;
    cursor: pointer;
    margin-top: 0.1rem;
  }
`;
