import { useState, useEffect } from "react";
import { useAppDispatch } from "../hooks/redux";
import { fetchRestaurants } from "../store/actions/restaurantActions";
import {
  FastServices,
  FoodNearGallery,
  Partnership,
  PopularNear,
  Registration,
  NavBar,
} from "../components";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

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
