import styled from "styled-components";

export const Path = ({ name }: { name: string }) => {
  return (
    <Wrapper>
      <main>
        <h2 className="path">
          City name |<strong>{`${" " + name}`}</strong>
        </h2>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-top: 2.4rem;

  .path {
    font-weight: 300;
    font-size: 1.3rem;
    padding-right: 0.6rem;
    text-decoration: underline;
  }

  strong {
    text-decoration: none;
  }
`;
