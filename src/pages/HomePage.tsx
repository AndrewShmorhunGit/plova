import { useState } from "react";
// import { useAppDispatch, useAppSelector } from "../hooks/redux";
// import { fetchRestaurants } from "../store/actions/restaurantActions";
import {
  FastServices,
  FoodNearGallery,
  Partnership,
  PopularNear,
  Registration,
  NavBar,
} from "../components";

export const HomePage = () => {
  // const dispatch = useAppDispatch();

  // const { error, loading, restaurants } = useAppSelector(
  //   (state) => state.restaurant
  // );

  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <>
      <NavBar
        setShowRegistration={setShowRegistration}
        showRegistration={showRegistration}
      />
      {showRegistration && (
        <Registration
          setShowRegistration={setShowRegistration}
          // showRegistration={showRegistration}
        />
      )}
      <FastServices />
      <FoodNearGallery />
      <PopularNear />
      <Partnership />
    </>
  );
};
