import styled from "styled-components";

export const SideBar = () => {
  return (
    <Wrapper>
      <main className="main">
        <h2 className="main">
          Kiev | Restaurants | <strong>KFC</strong>
        </h2>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: center;
  padding-top: 4rem;

  .main {
    display: flex;
    justify-content: start;
  }

  h2 {
    font-weight: 300;
    font-size: 1.3rem;
    padding-right: 0.6rem;
    text-decoration: underline;
  }

  strong {
    text-decoration: none;
  }
`;
