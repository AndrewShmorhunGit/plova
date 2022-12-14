import { useState } from "react";
// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../hooks/redux";
// import { fetchRestaurants } from "../store/actions/restaurantActions";
import {
  FoodNearGallery,
  Partnership,
  PopularNear,
  Registration,
  Jumbotron,
  MainHeader,
} from "../components";

export const HomePage = () => {
  // const dispatch = useAppDispatch();

  // const { error, loading, restaurants } = useAppSelector(
  //   (state) => state.restaurant
  // );

  // useEffect(() => {
  //   dispatch(fetchRestaurants());
  // }, []);

  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <>
      <MainHeader
        setShowRegistration={setShowRegistration}
        showRegistration={showRegistration}
      />
      {showRegistration && (
        <Registration
          setShowRegistration={setShowRegistration}
          // showRegistration={showRegistration}
        />
      )}
      <Jumbotron />
      <FoodNearGallery />
      <PopularNear />
      <Partnership />
    </>
  );
};
