import React, { useState } from "react";
import {
  FoodNearGallery,
  Partnership,
  PopularNear,
  RegistrationModal,
  MainHeader,
  Jumbotron,
  SearchLocationModal,
  EditUserModal,
} from "../components";
import { EditUserPhoneModal } from "../components/modals/EditUserPhoneModal";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { userActions } from "../store/actions/userActions";
import { getStorageUser } from "../units/functions";

// import { useAppSelector } from "../hooks/useAppDispatch";
// import { userActions } from "../store/actions/userActions";

export const HomePage = () => {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [changeLocationModal, setChangeLocationModal] = useState(false);

  // const { user, phoneModal } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const currentUser = getStorageUser();

  if (!currentUser) {
    dispatch(userActions.userLogOut());
  }

  return (
    <React.Fragment>
      <EditUserModal />
      <EditUserPhoneModal />
      <MainHeader
        setChangeLocationModal={setChangeLocationModal}
        changeLocationModal={changeLocationModal}
      />

      <SearchLocationModal
        setShowLocationModal={setShowLocationModal}
        showLocationModal={showLocationModal}
      />

      <RegistrationModal />

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
