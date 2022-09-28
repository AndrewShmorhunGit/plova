import styled from "styled-components";

export const BrandGrid = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  left: 7.5vw;
  width: 105rem;
  height: auto;
  box-shadow: 0 2px 20px rgb(0 0 0 / 10%);

  .brand-title {
    font-size: 3.6rem;
    background: #fff;
    border-radius: 1rem;
    padding: 3rem 3rem;
    // border: 2px solid grey;
    // border: none;
    overflow: hidden;
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
