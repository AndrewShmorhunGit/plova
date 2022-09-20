import styled from "styled-components";

export const FoodNearGallery = () => {
  return (
    <Wrapper>
      <div className="decoration-svg">
        <img
          src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/curve--small.svg"
          alt="deco-curve"
          className="curve"
        />
      </div>
      <section className="container gallery">
        <div className="title">
          <div className="food-deco">div</div>
          <span className="food-title">Food near you</span>
        </div>
        <div className="gallery-container">
          {/* Will be programmatically from units or server */}
          <a href="#" className="gallery-unit-link">
            <div className="gallery-unit">
              <img src="unit image" alt="" />
              <h1 className="unit-title">Gallery unit</h1>
            </div>
            <div className="unit-info">
              <div>
                <p>
                  <span>rate</span>_ numbers
                </p>
              </div>
              <p>delivery time</p>
            </div>
          </a>
          <a href="#" className="gallery-unit-link">
            <div className="gallery-unit">
              <img src="unit image" alt="" />
              <h1 className="unit-title">Gallery unit</h1>
            </div>
            <div className="unit-info">
              <div>
                <p>
                  <span>rate</span>_ numbers
                </p>
              </div>
              <p>delivery time</p>
            </div>
          </a>
          <a href="#" className="gallery-unit-link">
            <div className="gallery-unit">
              <img src="unit image" alt="" />
              <h1 className="unit-title">Gallery unit</h1>
            </div>
            <div className="unit-info">
              <div>
                <p>
                  <span>rate</span>_ numbers
                </p>
              </div>
              <p>delivery time</p>
            </div>
          </a>
          <a href="#" className="gallery-unit-link">
            <div className="gallery-unit">
              <img src="unit image" alt="" />
              <h1 className="unit-title">Gallery unit</h1>
            </div>
            <div className="unit-info">
              <div>
                <p>
                  <span>rate</span>_ numbers
                </p>
              </div>
              <p>delivery time</p>
            </div>
          </a>
          <a href="#" className="gallery-unit-link">
            <div className="gallery-unit">
              <img src="unit image" alt="" />
              <h1 className="unit-title">Gallery unit</h1>
            </div>
            <div className="unit-info">
              <div>
                <p>
                  <span>rate</span>_ numbers
                </p>
              </div>
              <p>delivery time</p>
            </div>
          </a>
          <a href="#" className="gallery-unit-link">
            <div className="gallery-unit">
              <img src="unit image" alt="" />
              <h1 className="unit-title">Gallery unit</h1>
            </div>
            <div className="unit-info">
              <div>
                <p>
                  <span>rate</span>_ numbers
                </p>
              </div>
              <p>delivery time</p>
            </div>
          </a>
          <a href="#" className="gallery-unit-link">
            <div className="gallery-unit">
              <img src="unit image" alt="" />
              <h1 className="unit-title">Gallery unit</h1>
            </div>
            <div className="unit-info">
              <div>
                <p>
                  <span>rate</span>_ numbers
                </p>
              </div>
              <p>delivery time</p>
            </div>
          </a>
          <a href="#" className="gallery-unit-link">
            <div className="gallery-unit">
              <img src="unit image" alt="" />
              <h1 className="unit-title">Gallery unit</h1>
            </div>
            <div className="unit-info">
              <div>
                <p>
                  <span>rate</span>_ numbers
                </p>
              </div>
              <p>delivery time</p>
            </div>
          </a>
        </div>
        <div className="center">
          <button className="btn-more">See More Restaurants</button>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .gallery {
    display: block;
    hight: 100avh;
    color: #212529;
  }

  .decoration-swg {
    display: block;
    width: 90%;
  }
  .curve {
    position: absolute;
    width: 100%;
    object-fit: cover;
  }

  .gallery-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;
  }

  .gallery-unit {
    display: flex;
    min-hight: 10rem;
    font-size: 4rem;
    align-items: center;
    justify-content: center;
    border: solid black 1px;
  }

  .gallery-unit-link {
    border: solid black 1px;
    text-decoration: none;
    padding: 1rem 1rem;
  }

  .unit-info {
    display: flex;
    justify-content: space-between;
  }

  .title {
    padding-top: 8rem;
    padding-bottom: 3.6rem;
  }

  .food-title {
    font-size: 3rem;
    font-weight: 600;
    position: relative;
  }

  .food-deco {
    overflow: hidden;
    position: absolute;
    border-radius: 10rem;
    margin-top: 1rem;
    margin-left: -0.3rem;
    min-hight: 2rem;
    min-width: 8.5rem;
    padding: 0 0.6rem;
    font-size: 1.8rem;
    color: #ffc244ff;
    background-color: #ffc244ff;
  }

  .btn-more {
    background-color: #cccccc;
    color: #00a082;
    text-align: center;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    height: 4.8rem;
    width: auto;
    border-radius: 2.4rem;
    font-size: 2rem;
    font-family: "Gotham", "Arial", "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 700;
    box-shadow: 0 3px 5px 0 #0000001a;
    border: none;
    letter-spacing: 0.2rem;
  }

  .btn-more:hover {
    background-color: #008068;
    color: #cccccc;
    cursor: pointer;
  }
`;
