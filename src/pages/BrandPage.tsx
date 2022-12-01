import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header, BrandGrid } from "../components/index";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchMenu } from "../store/actions/menuActions";
import { getSlugFromLocation } from "../units/functions";

export function BrandPage() {
  const location = useLocation();

  const slug = getSlugFromLocation(location);
  const dispatch = useAppDispatch();

  const { loading, error, menu } = useAppSelector((state) => state.menu);

  // console.log(loading, error, menu);

  if (menu === null) {
    return <p className="center">Ooops, jou menu is not exist 😕</p>;
  }

  useEffect(() => {
    dispatch(fetchMenu(slug));
  }, []);

  return (
    <>
      <Header />
      <BrandGrid menu={menu} loading={loading} error={error} />
    </>
  );
}
