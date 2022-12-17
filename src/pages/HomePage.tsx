import { useState } from "react";
import {
  FoodNearGallery,
  Partnership,
  PopularNear,
  Registration,
  Jumbotron,
  MainHeader,
} from "../components";

export const HomePage = () => { 

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
