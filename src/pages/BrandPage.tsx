import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  BrandGrid,
  LoadingHeader,
  LoadingBrandGrid,
  BrandHeader,
} from "../components/index";
import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch";
import { fetchMenu } from "../store/actions/menuActions";
import { getSlugFromLocation, goToTop } from "../units/functions";
import { ErrorPage } from "./ErrorPage";

export const BrandPage = () => {
  const location = useLocation();
  const slug = getSlugFromLocation(location);
  const dispatch = useAppDispatch();

  const { selectedCategory, loading, error, menu } = useAppSelector(
    (state) => state.menu
  );

  useEffect(() => {
    dispatch(fetchMenu(slug));
    goToTop();
  }, []);

  useEffect(() => {
    localStorage.setItem("menu", JSON.stringify(menu));
  }, [menu]);

  if (error) {
    <ErrorPage />;
  }

  if (loading) {
    return (
      <>
        <LoadingHeader />
        <LoadingBrandGrid />
      </>
    );
  }

  return (
    <>
      {menu ? (
        <>
          <BrandHeader menu={menu} loading={loading} />
          <BrandGrid
            menu={menu}
            loading={loading}
            error={error}
            selectedCategory={selectedCategory}
          />
        </>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};
