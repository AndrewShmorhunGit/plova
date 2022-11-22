import styled from "styled-components";
import { Link } from "react-router-dom";
import { top12Object } from "../units/data/top12Data";
import { dataDel } from "../units/data/top12DeliveryData";
import { hrivnaToDollarConverter, cutName } from "../units/functions";
import rateExcellent from "../images/common/ratingExcellent.png";
import rateExcellentRegular from "../images/common/ratingExcellentRegular.png";
import rateGood from "../images/common/ratingGood.png";
import deliveryImage from "../images/common/storeDeliveryLight.svg";
import decoImage from "../images/design/decoImageFoodGallery.png";
import { menuGlobal } from "../units/menu/BigMenuDataSet";

export const FoodNearGallery = () => {
  const checkRateFunc = (data: string): any => {
    if (Number(data.slice(0, -1)) > 96) {
      return (
        <>
          <span className="rate-span">
            <img className="rate-image" src={rateExcellent} alt="" />
            {data}
          </span>
        </>
      );
    }
    if (Number(data.slice(0, -1)) < 95) {
      return (
        <>
          <span className="rate-span">
            <img className="rate-image" src={rateExcellentRegular} alt="" />
            {data}
          </span>
        </>
      );
    }
    if (Number(data.slice(0, -1)) < 97) {
      return (
        <>
          <span className="rate-span">
            <img className="rate-image" src={rateGood} alt="" />
            {data}
          </span>
        </>
      );
    }
    return "Not a number!";
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
            <div className="deco">
              <img className="deco-image" src={decoImage} alt="" />
            </div>
          </span>
        </div>
        <div className="gallery-container center">
          {/* Will be programmatically from units or server */}

          {top12Object.elements.map((item, index) => {
            const store = item.singleData.storeData.store;

            const promo = store.promotions.map((obj) => {
              return obj.title.includes("%") ? obj.title : "";
            });
            console.log(JSON.stringify(top12Object));
            const delObj =
              dataDel.elements[
                dataDel.elements.findIndex(
                  (obj, index, array) =>
                    store.addressId === array[index].storeAddressId
                )
              ];

            const currentMenuIndex = menuGlobal.findIndex(
              (brand) => brand.id === store.id
            );

            return (
              <div className="gallery-div" key={store.id}>
                <Link
                  to={`brand/kiev/${store.slug}`}
                  className="gallery-unit-link"
                  onClick={() => console.log(menuGlobal[currentMenuIndex])}
                >
                  <div className="div-container ">
                    <div
                      className="gallery-unit"
                      style={{
                        backgroundImage: `url(https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/${store.imageId})`,
                      }}
                    >
                      <div className="overlay"></div>
                    </div>
                  </div>
                  <div className="unit-info">
                    <div className="rate-container">
                      <p className="rate-p">
                        {checkRateFunc(store.ratingInfo.cardLabel)}
                      </p>
                      <p className="reviews-numbers-p">
                        ({store.ratingInfo.totalRatingLabel})
                      </p>
                      {store.promotions.length !== 0 && (
                        <div className="booster center">{promo}</div>
                      )}
                      <p className="brand-name">{cutName(store.name)}</p>
                    </div>
                    <div className="delivery-container">
                      <p className="delivery-p">
                        <span className="price-span">
                          <img
                            className="delivery-image"
                            src={deliveryImage}
                            alt=""
                          />
                          {` ${hrivnaToDollarConverter(store.serviceFee)} $  `}
                        </span>

                        <span className="delivery-span">
                          {` ·  ${delObj.etaLowerBound}-${delObj.etaUpperBound} `}
                          min
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
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
    color: #212529;
    padding: 4rem 0 8rem 0;
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
    grid-template-columns: repeat(3, 35rem);
    grid-template-rows: repeat(4, 20rem);
    row-gap: 4rem;
    column-gap: 3rem;
    padding-bottom: 6rem;
  }

  .gallery-div {
    height: 22rem;
    border-radius: 1rem;
    text-decoration: none;
    box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
  }

  .gallery-unit-link {
    height: 22rem;
    border-radius: 1rem;
    text-decoration: none;
    box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
  }

  .gallery-unit {
    width: auto;
    height: 16.8rem;
    text-align: center;
    background-image: url(https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/bckg-pattern.svg);
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 0.5s;
  }

  .gallery-div {
    position: relative;
  }

  .brand-name {
    position: absolute;
    top: 7rem;
    left: 8rem;
    color: white;
    min-width: 20rem;
    text-align: center;
    text-transform: capitalize;
    font-size: 2.6rem;
    font-weight: 600;
    z-index: 3;
  }

  .booster {
    position: absolute;
    bottom: -1rem;
    top: -0.5rem;
    right: 3rem;
    color: black;
    width: 6rem;
    height: 3rem;
    text-align: center;
    text-transform: capitalize;
    font-size: 1.6rem;
    font-weight: 700;
    background-color: #ffc244;
    z-index: 3;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    // overflow: visible;
  }

  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 3;
  }

  .div-container {
    overflow: hidden;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    position: relative;
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
    padding: 0rem 2rem 0rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
  }

  .title {
    padding: 7.8rem 0 4.8rem 8rem;
  }

  .food-title {
    display: flex;
    gap: 1rem;
    font-size: 3rem;
    font-weight: 600;
    position: relative;
  }

  .deco {
    position: absolute;
    width: 1rem;
    height: 3rem;
    top: -1rem;
    left: 20rem;
  }

  .deco-image {
    width: 1rem;
  }

  .food-deco {
    margin-top: 1.5rem;
    display: flex;
    align-items: flex-end;
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

  .rate-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .rate-image,
  .delivery-image {
    height: 2.2rem;
  }

  .rate-span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    font-weight: 400;
  }

  .reviews-numbers-p {
    font-weight: 400;
    color: grey;
    font-size: 1.4rem;
  }

  .delivery-container {
    max-width: 20rem;
  }

  .delivery-p {
    display: flex;
  }

  .price-span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding-right: 0.4rem;
    font-weight: 400;
  }

  .delivery-span {
    display: flex;
    align-items: center;
    justify-content: center;
    // gap: 0.4rem;
    font-size: 1.6rem;
  }
`;
