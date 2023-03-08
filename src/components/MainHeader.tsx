import styled from "styled-components";
import headerLogo from "../logos/headerLogo.png";
import headerMobileLogo from "../logos/glovo-logo-location.svg";
import { FiSearch } from "react-icons/fi";
import React, { FormEvent } from "react";
import { GetStartedBtn, MainHeaderLocation, UserData } from "./index";
import { useAppSelector } from "../hooks/useAppDispatch";
import { getStorageUser } from "../units/functions";

export const MainHeader = ({
  changeLocationModal,
  setChangeLocationModal,
}: {
  changeLocationModal: boolean;
  setChangeLocationModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { user } = useAppSelector((state) => state.user);
  const currentUser = getStorageUser();

  const [searchInput, setSearchInput] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.alert("Submitted 👍");
  };

  return (
    <Wrapper>
      <header className="nav-sticky">
        <div className="header-for-city-page">
          <div className="header-layout">
            <img
              src={headerMobileLogo}
              alt="plova logo"
              className="mobile-logo"
            />
            <img src={headerLogo} alt="plova logo" className="logo" />
            <div className="header-center">
              <div className="location-center">
                <MainHeaderLocation
                  changeLocationModal={changeLocationModal}
                  setChangeLocationModal={setChangeLocationModal}
                />
              </div>
              <div className="search">
                <label className="search-label">
                  <FiSearch />
                </label>

                <form className="form-input" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="search-input"
                    value={searchInput}
                    onChange={handleChange}
                  />
                </form>
              </div>
            </div>
            <div className="header-right">
              <div className="location-right">
                <MainHeaderLocation
                  changeLocationModal={changeLocationModal}
                  setChangeLocationModal={setChangeLocationModal}
                />
              </div>
              <div className="start-btn">
                {!user ? (
                  currentUser ? (
                    <div className="center">Loading...</div>
                  ) : (
                    <GetStartedBtn />
                  )
                ) : (
                  <UserData color={"#212529"} user={user} />
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;

  .hide {
    opacity: 0;
    display: none;
    cursor: none;
  }

  .header-for-city-page {
    background-color: #ffc244ff;
    position: relative;
  }

  .header-layout {
    padding: 3rem 6vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    margin-top: -1.4rem;
    width: 14rem;
  }

  .mobile-logo {
    display: none;
  }

  .search {
    height: 4.6rem;
    min-width: 42rem;
    background: #ffffff;
    display: flex;
    flex-grow: 1;
    justify-content: start;
    align-items: center;
    flex-direction: inline-block;
    border-radius: 3rem;
    padding-left: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .form-input {
    min-width: 95%;
  }

  .form-input:focus {
    label: none;
  }

  .search-label {
    padding-top: 0.2rem;
    padding-right: 0.5rem;
    align-items: center;
    opacity: 0.5;
  }

  .search-input:focus {
    outline: none;
  }

  .search-input {
    border-radius: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    border: none;
    width: 90%;
    font-size: 1.8rem;
    line-height: 1.4;
    font-weight: 300;
  }

  .header-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
  }

  .header-user-address-content {
    gap: 1rem;
    min-width: 20rem;
    max-width: 25rem;
  }

  .header-user-address-content {
    cursor: pointer;
  }

  .address-content-text {
    font-weight: 700;
    letter-spacing: 0.05rem;
  }

  .header-user-address-content-location-icon {
    min-width: 2rem;
  }

  .location-center {
    display: none;
  }
  .start-btn {
    width: 13.6rem;
  }
  @media (max-width: 90.625em) {
    .location-right {
      display: none;
    }

    .location-center {
      display: flex;
    }

    .search {
      position: static;
      top: 0;
      left: 0;
      transform: translate(0, 0);
    }

    .header-center {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 68.75em) {
    .header-center {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 56.25em) {
    .header-layout {
      padding: 2rem 6vw;
    }
    .search {
      display: none;
    }

    .logo {
      width: 10rem;
    }

    .location-center {
      display: none;
    }
  }
`;
