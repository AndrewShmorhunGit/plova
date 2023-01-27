import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  BrandGrid,
  LoadingHeader,
  LoadingBrandGrid,
  BrandHeader,
  MakeAnOrderBtn,
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
      <BrandGrid menu={currentMenu} selectedCategory={selectedCategory} />
      <Wrapper>
        <div className="order-btn">
          {/* <div className="center"> */}
          <MakeAnOrderBtn />
          {/* </div> */}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .order-btn {
    display: none;
  }

  @media (max-width: 62.5em) {
    .order-btn {
      display: block;

      position: fixed;
      bottom: 1em;
      left: 50%;

      transform: translateX(-50%);
      height: auto;
      min-width: 100rem;
      padding: 1.4rem 5rem;
      font-size: 1.6rem;
      // letter-spacing: 0rem;
      border-radius: 100rem;
    }
  }
`;
