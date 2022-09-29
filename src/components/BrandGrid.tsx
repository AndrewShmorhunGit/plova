import styled from "styled-components";

export const BrandGrid = () => {
  return (
    <Wrapper>
      {/* <div className="brand-title">
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
      </div> */}
      <div className="product-body">
        <div className="grid-title">
          <h1>Title</h1>
        </div>
        <div className="grid-chart">
          <h1>Chart</h1>
        </div>
        <div className="grid-sections">
          <h1>Sections</h1>
        </div>
        <div className="grid-products">
          <h1>Products</h1>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // position: absolute;
  // left: 7.5vw;
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

  .product-body {
    width: 87vw;
    display: grid;
    grid-template-columns: 1fr 3fr 1.5fr;
    grid-template-rows: auto 1fr;
    padding: 0 7.5vw;
  }

  .grid-title {
    background-color: red;
    grid-column: 1/3;
    grid-row: 1/2;
  }
  .grid-chart {
    background-color: blue;
    grid-column: 3/4;
  }
  .grid-sections {
    background-color: yellow;
  }
  .grid-products {
    background-color: green;
  }
`;
