import styled from "styled-components";
import { Link } from "react-router-dom";
import { obj } from "../units/top12Data";
import { dataDel } from "../units/top12DeliveryData";
import { hrivnaToDollarConverter } from "../units/data";

export const FoodNearGallery = () => {
  const cutName = (name: string) => {
    if (name.includes("/")) {
      const newName = name.slice(0, name.indexOf("/") - 1);
      return newName.toUpperCase();
    } else {
      return name.toUpperCase();
    }
  };

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
          <span className="food-title">
            <div className="food-deco">Food</div> near you
            <div className="deco"></div>
          </span>
        </div>
        <div className="gallery-container">
          {/* Will be programmatically from units or server */}
          {/* <a href="#" className="gallery-unit-link">
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
          </a> */}
          {obj.elements.map((item, index) => {
            const store = item.singleData.storeData.store;

            const delObj =
              dataDel.elements[
                dataDel.elements.findIndex(
                  (obj, index, array) =>
                    store.addressId === array[index].storeAddressId
                )
              ];

            return (
              <a href="#" key={store.id} className="gallery-unit-link">
                <div className="div-container ">
                  <div
                    className="gallery-unit"
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/${store.imageId})`,
                    }}
                  >
                    <div className="overlay"></div>
                    <p className="brand-name">{cutName(store.name)}</p>
                  </div>
                </div>
                <div className="unit-info">
                  <div>
                    <p>
                      <span>👍 {store.ratingInfo.cardLabel}</span> (
                      {store.ratingInfo.totalRatingLabel})
                    </p>
                  </div>
                  <p>
                    <span>
                      🚴‍♂️ {` ${hrivnaToDollarConverter(store.serviceFee)}$  `}
                    </span>

                    <span>
                      {` /  ${delObj.etaLowerBound}-${delObj.etaUpperBound} `}
                      🕔
                    </span>
                  </p>
                </div>
              </a>
            );
          })}
        </div>
        <div className="center">
          <Link to="/brand" className="btn-more center">
            See more restaurants
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  // overflow-x: hide;
  .gallery {
    display: block;
    color: #212529;
    padding-bottom: 8rem;
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
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 24rem);
    row-gap: 4rem;
    column-gap: 4rem;
    padding-bottom: 4rem;
  }

  .gallery-unit {
    width: auto;
    height: 18rem;
    text-align: center;
    // font-size: 4rem;
    background-image: url(https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/bckg-pattern.svg);
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
    min-width: 20rem;
    text-align: center;
    text-transform: capitalize;
    padding: 6rem 1rem 5rem 1rem;
    font-size: 2.6rem;
    font-weight: 600;
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
    color: #343a40;
    height: 5rem;
    font-size: 1.6rem;
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
    display: flex;
    gap: 1rem;
    font-size: 3.6rem;
    font-weight: 600;
    // position: relative;
  }

  .deco {
    width: 1rem;
    height: 1.5rem;
    background-color: red;
    background-image: url(../images/design/highlights.svg);
    background-size: cover;
  }

  .food-deco {
    margin-top: 2.3rem;
    display: flex;
    align-items: flex-end;
    // justify-content: flex-start;
    height: 1.8rem;
    border-radius: 10rem;
    background-color: #ffc244ff;
    background-size: cover;
  }

  .btn-more {
    background-color: #e9f8f5;
    color: #00a082;
    text-align: center;
    text-decoration: none;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    height: 4.8rem;
    width: auto;
    border-radius: 2.4rem;
    font-size: 2rem;
    font-family: "Gotham", "Arial", "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 700;
    box-shadow: 0 3px 5px 0 #0000001a;
    border: none;
    // letter-spacing: 0.2rem;
  }
`;
