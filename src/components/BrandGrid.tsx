import styled from "styled-components";

export const BrandGrid = () => {
  return (
    <Wrapper>
      <div className="product-body">
        <div className="grid-title">
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
            <p className="message">message</p>
          </div>
        </div>
        <div className="grid-chart">
          <h1>Chart</h1>
        </div>
        <div className="grid-sections">
          <h3>🍱 sections</h3>
          <p>sub menu</p>
        </div>
        <div className="grid-products">
          <h1>Products</h1>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // box-shadow: 0 2px 20px rgb(0 0 0 / 10%);

  margin-top: -10.5rem;

  .brand-title {
    font-size: 3.6rem;
    p {
      font-size: 2rem;
    }
    .message {
      font-size: 1.6rem;
      padding: 1.6rem 0;
    }
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

  .product-body {
    width: 87vw;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 3fr 1.5fr;
    grid-template-rows: auto 1fr;
    padding: 0 7.5vw;
    column-gap: 1.6rem;
    row-gap: 1.6rem;
  }

  .grid-title {
    width: 60vw;
    grid-column: 1/3;
    grid-row: 1/2;
    box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
    background: #fff;
    padding: 3rem 3rem;
  }
  .grid-chart {
    background-color: blue;
    grid-row: 1/-1;
    grid-column: 3/4;
    background-color: #fff;
    box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
    height: 45rem;
    width: 30rem;
    border-radius: 1rem;
  }
  .grid-sections {
    background-color: #fff;
  }
  .grid-products {
    background-color: #fff;
  }
`;
