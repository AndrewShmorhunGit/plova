import styled from "styled-components";
import { Link } from "react-router-dom";

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
            <div className="div-container ">
              <div className="gallery-unit">
                <div className=" overlay"></div>
                <p className="brand-name">Brand Unit</p>
              </div>
            </div>
            <div className="unit-info">
              <div>
                <p>
                  <span>👍 {`100`}%</span> ({`num`})
                </p>
              </div>
              <p>🚀 {`price`} $</p>
              <p>{`min`}' 🕔</p>
            </div>
          </a>
          <a href="#" className="gallery-unit-link">
            <div className="div-container ">
              <div className="gallery-unit">
                <div className=" overlay"></div>
                <p className="brand-name">Brand Unit</p>
              </div>
            </div>
            <div className="unit-info">
              <div>
                <p>
                  <span>👍 {`100`}%</span> ({`num`})
                </p>
              </div>
              <p>🚀 {`price`} $</p>
              <p>{`min`}' 🕔</p>
            </div>
          </a>
          <a href="#" className="gallery-unit-link">
            <div className="div-container ">
              <div className="gallery-unit">
                <div className=" overlay"></div>
                <p className="brand-name">Brand Unit</p>
              </div>
            </div>
            <div className="unit-info">
              <div>
                <p>
                  <span>👍 {`100`}%</span> ({`num`})
                </p>
              </div>
              <p>🚀 {`price`} $</p>
              <p>{`min`}' 🕔</p>
            </div>
          </a>
          <a href="#" className="gallery-unit-link">
            <div className="div-container ">
              <div className="gallery-unit">
                <div className=" overlay"></div>
                <p className="brand-name">Brand Unit</p>
              </div>
            </div>
            <div className="unit-info">
              <div>
                <p>
                  <span>👍 {`100`}%</span> ({`num`})
                </p>
              </div>
              <p>🚀 {`price`} $</p>
              <p>{`min`}' 🕔</p>
            </div>
          </a>
          <a href="#" className="gallery-unit-link">
            <div className="div-container ">
              <div className="gallery-unit">
                <div className=" overlay"></div>
                <p className="brand-name">Brand Unit</p>
              </div>
            </div>
            <div className="unit-info">
              <div>
                <p>
                  <span>👍 {`100`}%</span> ({`num`})
                </p>
              </div>
              <p>🚀 {`price`} $</p>
              <p>{`min`}' 🕔</p>
            </div>
          </a>
          <a href="#" className="gallery-unit-link">
            <div className="div-container ">
              <div className="gallery-unit">
                <div className=" overlay"></div>
                <p className="brand-name">Brand Unit</p>
              </div>
            </div>
            <div className="unit-info">
              <div>
                <p>
                  <span>👍 {`100`}%</span> ({`num`})
                </p>
              </div>
              <p>🚀 {`price`} $</p>
              <p>{`min`}' 🕔</p>
            </div>
          </a>
          <a href="#" className="gallery-unit-link">
            <div className="div-container ">
              <div className="gallery-unit">
                <div className=" overlay"></div>
                <p className="brand-name">Brand Unit</p>
              </div>
            </div>
            <div className="unit-info">
              <div>
                <p>
                  <span>👍 {`100`}%</span> ({`num`})
                </p>
              </div>
              <p>🚀 {`price`} $</p>
              <p>{`min`}' 🕔</p>
            </div>
          </a>
          <a href="#" className="gallery-unit-link">
            <div className="div-container ">
              <div className="gallery-unit">
                <div className=" overlay"></div>
                <p className="brand-name">Brand Unit</p>
              </div>
            </div>
            <div className="unit-info">
              <div>
                <p>
                  <span>👍 {`100`}%</span> ({`num`})
                </p>
              </div>
              <p>🚀 {`price`} $</p>
              <p>{`min`}' 🕔</p>
            </div>
          </a>
          <a href="#" className="gallery-unit-link">
            <div className="div-container ">
              <div className="gallery-unit">
                <div className=" overlay"></div>
                <p className="brand-name">Brand Unit</p>
              </div>
            </div>
            <div className="unit-info">
              <div>
                <p>
                  <span>👍 {`100`}%</span> ({`num`})
                </p>
              </div>
              <p>🚀 {`price`} $</p>
              <p>{`min`}' 🕔</p>
            </div>
          </a>
        </div>
        <div className="center">
          <Link to="/brand" className="btn-more center">
            See More Restaurants
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .gallery {
    display: block;
    color: #212529;
    padding-bottom: 4rem;
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(3, 24rem);
    row-gap: 4rem;
    column-gap: 4rem;
    padding-bottom: 4rem;
  }

  .gallery-unit {
    width: auto;
    height: 18rem;
    text-align: center;
    // font-size: 4rem;
    background-image: url(https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/kjs9mixrpbf3zoqhtiv1);
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 0.5s;
  }

  .brand-name {
    position: absolute;
    top: 8.5%;
    bottom: 10%;
    right: 10%;
    left: 10%;
    color: #fff;
    text-align: center;
    text-transform: capitalize;
    padding: 6rem 5rem 5rem 5rem;
    font-size: 3.2rem;
    z-index: 3;
  }
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 3;
  }

  .div-container {
    overflow: hidden;
    position: relative;
  }

  .gallery-unit-link {
    height: 22rem;
    border-radius: 1rem;
    text-decoration: none;
    box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
    overflow: hidden;
  }

  .gallery-unit-link:hover {
    .gallery-unit {
      transform: scale(1.05);
    }
  }

  .unit-info {
    height: 5rem;
    padding: 2rem 2rem 4rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
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
    text-decoration: none;
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
