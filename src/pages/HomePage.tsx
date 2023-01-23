import React, { useState } from "react";
import {
  FoodNearGallery,
  Partnership,
  PopularNear,
  RegistrationModal,
  MainHeader,
  Jumbotron,
  SearchLocationModal,
} from "../components";

export const HomePage = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [changeLocationModal, setChangeLocationModal] = useState(false);

  return (
    <React.Fragment>
      <MainHeader
        setShowRegistration={setShowRegistration}
        showRegistration={showRegistration}
        setChangeLocationModal={setChangeLocationModal}
        changeLocationModal={changeLocationModal}
      />

      <SearchLocationModal
        setShowLocationModal={setShowLocationModal}
        showLocationModal={showLocationModal}
      />

      <RegistrationModal
        setShowRegistration={setShowRegistration}
        showRegistration={showRegistration}
      />

      <Jumbotron
        setShowLocationModal={setShowLocationModal}
        showLocationModal={showLocationModal}
      />

      <FoodNearGallery />
      <PopularNear />
      <Partnership />
    </React.Fragment>
  );
};
