import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Header,
  BrandGrid,
  LoadingHeader,
  LoadingBrandGrid,
} from "../components/index";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchMenu } from "../store/actions/menuActions";
import { getSlugFromLocation } from "../units/functions";

export function BrandPage() {
  const location = useLocation();

  const slug = getSlugFromLocation(location);
  const dispatch = useAppDispatch();

  const { selectedCategory, loading, error, menu } = useAppSelector(
    (state) => state.menu
  );

  useEffect(() => {
    dispatch(fetchMenu(slug));
  }, []);

  if (menu === null) {
    return (
      <>
        <LoadingHeader />
        <h3 className="center">Menu is loading..🙂 or just not exist..😕 </h3>
        <LoadingBrandGrid />
      </>
    );
  }

  return (
    <>
      <Header menu={menu} loading={loading} />
      <BrandGrid
        menu={menu}
        loading={loading}
        error={error}
        selectedCategory={selectedCategory}
      />
    </>
  );
}
