import styled from "styled-components";

export const HomePage = () => {
  return (
    <Wrapper className="container">
      <main>
        <h2>HomePage</h2>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  main {
    min-hight: 50vh;
    font-size: 10rem;
  }
`;
