import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchRestaurants } from "../store/actions/restaurantActions";
import styled from "styled-components";
import { Link } from "react-router-dom";
import decoImage from "../images/design/decoImageFoodGallery.png";
import { GalleryLoader } from "./GalleryLoader";
import { GalleryUnit } from "./GalleryUnit";

export const FoodNearGallery = () => {
  const dispatch = useAppDispatch();

  const { loading, error, restaurants } = useAppSelector(
    (state) => state.restaurant
  );

  console.log(restaurants, error);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

  const dataDel = restaurants.delivery;

  return (
    <Wrapper>
      <div className="decoration-svg">
        <img
          src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/curve--small.svg"
          alt="deco-curve"
          className="curve"
        />
      </div>
      {error ? (
        <div>
          <div className="decoration-svg">
            <img
              src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/curve--small.svg"
              alt="deco-curve"
              className="curve"
            />
          </div>
          <main className="error-message">{error}</main>
        </div>
      ) : (
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
            {loading && <GalleryLoader />} {loading && <GalleryLoader />}
            {loading && <GalleryLoader />} {loading && <GalleryLoader />}
            {loading && <GalleryLoader />} {loading && <GalleryLoader />}
            {loading && <GalleryLoader />} {loading && <GalleryLoader />}
            {loading && <GalleryLoader />} {loading && <GalleryLoader />}
            {loading && <GalleryLoader />} {loading && <GalleryLoader />}
            {restaurants.elements.map((item, index) => {
              const store = item.singleData.storeData.store;
              const promo = store.promotions.map((obj) => {
                return obj.title.includes("%") ? obj.title : "";
              });

              const delObj =
                dataDel[
                  dataDel.findIndex(
                    (obj, index, array) =>
                      store.addressId === array[index].storeAddressId
                  )
                ];

              // const currentMenuIndex: number = menus.findIndex(
              //   (brand) => brand.id === store.id
              // );

              return (
                <div className="gallery-div" key={store.id}>
                  {!loading && (
                    <GalleryUnit store={store} delObj={delObj} promo={promo} />
                  )}
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
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow-x: hide;
  main {
    overflow-x: hide;
    padding: 10rem;
    font-size: 4rem;
  }
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

  .title {
    padding: 7.8rem 0 4.8rem 8rem;
  }

  .food-title {
    display: flex;
    gap: 1rem;
    font-size: 3rem;
    font-weight: 500;
    position: relative;
  }

  .deco {
    width: 1rem;
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
