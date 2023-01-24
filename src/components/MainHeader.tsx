import styled from "styled-components";
import headerLogo from "../logos/headerLogo.png";
import headerMobileLogo from "../logos/glovo-logo-location.svg";
import { FiSearch } from "react-icons/fi";
// import { Link } from "react-router-dom";
import React from "react";
import { MainHeaderLocation, UserData } from "./index";

export const MainHeader = ({
  showRegistration,
  setShowRegistration,
  changeLocationModal,
  setChangeLocationModal,
}: {
  showRegistration: boolean;
  setShowRegistration: React.Dispatch<React.SetStateAction<boolean>>;
  changeLocationModal: boolean;
  setChangeLocationModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // Temporary state // Temporary state // Temporary state
  // const [isLogin, setIsLogin] = React.useState(false);
  // Temporary state // Temporary state // Temporary state

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

                <form
                  className="form-input"
                  onSubmit={() => console.log("onSubmit!")}
                  onClick={() => {}}
                >
                  <input
                    type="text"
                    className="search-input"
                    onChange={() => console.log("onChange!")}
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
              {!null ? (
                <button
                  className="btn-start"
                  onClick={() => setShowRegistration(!showRegistration)}
                >
                  Get started
                </button>
              ) : (
                <UserData />
              )}
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
    max-width: 46rem;
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
    // height: 100%;
    // width: 100%;
    font-size: 1.8rem;
    line-height: 1.4;
    font-weight: 300;
  }

  .btn-start {
    background-color: #00a082;
    color: #fff;
    text-align: center;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    height: 4.2rem;
    width: 13.6rem;
    border-radius: 2.4rem;
    font-size: 1.5rem;
    font-family: "Gotham", "Arial", "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 700;
    box-shadow: 0 3px 5px 0 #0000001a;
    border: none;
    // letter-spacing: 0.2rem;
  }

  .btn-start:hover {
    background-color: #008068;
    color: #cccccc;
    cursor: pointer;
  }

  .header-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
  }

  .header-user-address-content {
    display: flex;
    justify-content: center;
    align-items: center;
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
