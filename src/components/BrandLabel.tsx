import styled from "styled-components";

export const BrandLabel = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="brand-title">
          <h1>Brand name</h1>
          <div className="icons">
            <p>
              <strong>🕔</strong>
              {`delivery time`}'
            </p>
            <p>
              <strong>🚀</strong>
              {`deliv price`} $
            </p>
            <p>
              <strong>👍</strong>
              {`rate`} %
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .brand-title {
    font-size: 4rem;
    background: #fff;
    border: none;
    border-radius: 1rem;
    padding: 6rem 6rem;
  }

  .icons {
    padding-top: 2rem;
    display: flex;
    gap: 2rem;
    font-size: 2rem;
  }

  strong {
    padding-right: 0.5rem;
  }
`;
