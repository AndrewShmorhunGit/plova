import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components";
import { BrandPage, HomePage, ErrorPage, OrderPage } from "./pages";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { getStorageUser } from "./units/functions";
import { userActions } from "./store/actions/userActions";
import React from "react";
import { usersApi } from "./api/usersApi";

function App() {
  const dispatch = useAppDispatch();
  const currentUser = getStorageUser();

  React.useEffect(() => {
    if (!currentUser) {
      dispatch(userActions.userLogOut());
      return;
    }
    usersApi
      .getById(currentUser.user.id, currentUser.accessToken)
      .then((user) => {
        if (user) dispatch(userActions.setUserData(user));
        else {
          throw new Error("Bad getUser request");
        }
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
