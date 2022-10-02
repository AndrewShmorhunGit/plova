// import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FastServices,
  FoodNearGallery,
  Partnership,
  PopularNear,
  Registration,
  NavBar,
} from "../components";

export const HomePage = () => {
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
