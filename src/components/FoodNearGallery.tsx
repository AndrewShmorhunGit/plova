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
          <div className="gallery-unit">
            <a href="#">
              <img src="" alt="" />
              <h1>Gallery unit1</h1>
              <p>
                <span>rate</span>finger <p>numbers</p>
              </p>
            </a>
          </div>
          <div className="gallery-unit">
            <h1>Gallery unit2</h1>
          </div>
          <div className="gallery-unit">
            <h1>Gallery unit3</h1>
          </div>
          <div className="gallery-unit">
            <h1>Gallery unit4</h1>
          </div>
        </div>
        <button className="more-button btn">See More Restaurants</button>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .gallery {
    display: block;
    hight: 100avh;
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
    grid-template-rows: 5rem repeat(4, 1fr);
  }

  .gallery-unit {
    min-hight: 5rem;
    display: flex;
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
`;
