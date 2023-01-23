import styled from "styled-components";
import rateExcellent from "../images/common/ratingExcellent.png";
import rateExcellentRegular from "../images/common/ratingExcellentRegular.png";
import rateGood from "../images/common/ratingGood.png";
import deliveryImage from "../images/common/storeDeliveryLight.svg";
import { hryvniaToDollarConverter, cutName } from "../units/functions";
import { Link } from "react-router-dom";
import { Store } from "../modules/modules";

interface GalleryProps {
  store: Store;
  delObj: {
    storeAddressId: number;
    etaLowerBound: number;
    etaUpperBound: number;
  };
  promo: string[];
}

export const GalleryUnit: React.FC<GalleryProps> = ({
  store,
  delObj,
  promo,
}) => {
  const checkRateFunc = (data: string): JSX.Element | string => {
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
      <div className="gallery-div">
        <Link to={`brand/${store.slug}`} className="gallery-unit-link">
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
                  <img className="delivery-image" src={deliveryImage} alt="" />
                  {` ${hryvniaToDollarConverter(store.serviceFee)} $  `}
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
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
    min-width: 15rem;
    text-align: center;
    top: 40%;
    left: 50%;
    color: white;
    transform: translate(-50%, -50%);

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
