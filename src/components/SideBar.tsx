import styled from "styled-components";

export const SideBar = () => {
  return (
    <Wrapper>
      <main className="main">
        <h2 className="main">main district</h2>
        <h2>
          <strong> {` > address / brand`}</strong>
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
    font-size: 1.4rem;
    padding-right: 0.6rem;
  }
`;
