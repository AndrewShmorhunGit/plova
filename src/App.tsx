import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components";
import { BrandPage, HomePage, ErrorPage, OrderPage } from "./pages";

import { useAppDispatch } from "./hooks/useAppDispatch";

import { getStorageUser } from "./units/functions";
import { userActions } from "./store/actions/userActions";
import axios from "axios";
import React from "react";

function App() {
  const dispatch = useAppDispatch();
  const currentUser = getStorageUser();

  React.useEffect(() => {
    if (!currentUser) {
      dispatch(userActions.userLogOut());
      return;
    }

    let config = {
      method: "get",
      url: `${process.env.REACT_APP_BASE_URL}/users/${currentUser.user.id}`,
      headers: {
        Authorization: `Bearer ${currentUser.accessToken}`,
      },
    };

    axios(config)
      .then(function (response: any) {
        dispatch(userActions.setUserData(response.data));
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, [currentUser, dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="brand/:brandSlug" element={<BrandPage />} />
        <Route path="order/*" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
