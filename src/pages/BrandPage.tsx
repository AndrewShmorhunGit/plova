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
import {
  getCurrentMenu,
  getSlugFromLocation,
  goToTop,
} from "../units/functions";
import { ErrorPage } from "./ErrorPage";

export const BrandPage = () => {
  const location = useLocation();
  const slug = getSlugFromLocation(location);
  const dispatch = useAppDispatch();

  const { selectedCategory, loading, error, menus } = useAppSelector(
    (state) => state.menu
  );

  useEffect(() => {
    dispatch(fetchMenu());
    goToTop();
  }, [dispatch]);

  const currentMenu = getCurrentMenu(slug, menus);

  if (loading) {
    return (
      <>
        <LoadingHeader />
        <LoadingBrandGrid />
      </>
    );
  }

  if (error || !currentMenu || currentMenu === undefined) {
    return <ErrorPage />;
  }
  return (
    <>
      <BrandHeader menu={currentMenu} loading={loading} />
      <BrandGrid
        menu={currentMenu}
        loading={loading}
        error={error}
        selectedCategory={selectedCategory}
      />
    </>
  );
};
