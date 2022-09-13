import styled from "styled-components";

export const SideBar = () => {
  return (
    <Wrapper>
      <main>
        <h2>SideBar</h2>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 5rem;
  }
`;
