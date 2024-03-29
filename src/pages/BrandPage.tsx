import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  BrandGrid,
  LoadingHeader,
  LoadingBrandGrid,
  BrandHeader,
  MakeAnOrderBtn,
  EditUserModal,
} from "../components/index";
import { EditUserPhoneModal } from "../components/modals/EditUserPhoneModal";
import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch";
import { fetchMenu } from "../store/actions/menuActions";
import { userActions } from "../store/actions/userActions";
import {
  getCurrentMenu,
  getSlugFromLocation,
  getStorageUser,
  goToTop,
} from "../units/functions";
import { ErrorPage } from "./ErrorPage";

export const BrandPage = () => {
  const slug = getSlugFromLocation(useLocation());
  const dispatch = useAppDispatch();
  const { selectedCategory, loading, error, menus } = useAppSelector(
    (state) => state.menu
  );

  useEffect(() => {
    dispatch(fetchMenu());
    goToTop();
  }, [dispatch]);

  const currentMenu = getCurrentMenu(slug, menus);
  const currentUser = getStorageUser();
  if (!currentUser) {
    dispatch(userActions.userLogOut());
  }
  if (loading) {
    return (
      <>
        <LoadingHeader />
        <LoadingBrandGrid />
      </>
    );
  }

  if (error || !currentMenu || currentMenu === undefined || !menus) {
    return <ErrorPage />;
  }
  return (
    <>
      <EditUserModal />
      {currentUser && <EditUserPhoneModal currentUser={currentUser} />}
      <BrandHeader menu={currentMenu} loading={loading} />
      <BrandGrid menu={currentMenu} selectedCategory={selectedCategory} />
      <Wrapper>
        <div className="order-btn">
          <MakeAnOrderBtn />
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
      min-width: 80dvw;
      padding: 1.4rem 5rem;
      font-size: 1.6rem;
      border-radius: 100rem;
    }
  }
`;
