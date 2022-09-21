import { useState } from "react";
import styled from "styled-components";
import headerLogo from "../logos/headerLogo.png";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

export const NavBar = ({
  showRegistration,
  setShowRegistration,
}: {
  showRegistration: boolean;
  setShowRegistration: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showLocation, setShowLocation] = useState(false);

  console.log(
    `выбор локации: ${showLocation} |`
    // `окно регистрации: ${showSignUpForm}`
  );

  const address: string = "136 Pym St, Nottingham";
  const search: string = "Search";
  return (
    <Wrapper>
      <header className="nav-sticky">
        <div className="header-for-city-page">
          <div className="header-layout">
            <Link to="/">
              <img src={headerLogo} alt="plova logo" className="logo" />
            </Link>
            <div className="header-center">
              <label className="search-label">
                <FiSearch />
              </label>
              <form
                className="form-input"
                onSubmit={() => console.log("onSubmit!")}
              >
                <input
                  type="text"
                  className="search-input"
                  placeholder={search}
                  value=""
                  onChange={() => console.log("onChange!")}
                />
              </form>
            </div>
            <div className="header-right">
              <div
                className="header-user-address-content"
                onClick={() => setShowLocation(!showLocation)}
              >
                <img
                  src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/location2.svg"
                  alt="location marker"
                  className="header-user-address-content-location-icon"
                />
                <div
                  data-v-7ff8f296=""
                  data-test-id="user-address-text"
                  className="header-user-address-content-text"
                >
                  <span className="address-content-text">
                    {`${
                      address.length < 20
                        ? address
                        : address.slice(0, 20) + "..."
                    }`}
                  </span>
                </div>
                <img
                  data-v-7ff8f296=""
                  src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/landing/dropdown-black.svg"
                  alt=""
                  role="presentation"
                  className="header-user-address__content__arrow"
                />
              </div>
              <button
                className="btn-start"
                onClick={() => setShowRegistration(!showRegistration)}
              >
                Start!
              </button>
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  // .nav-sticky {
  //   position: sticky;
  //   top: 0;
  // }

  .header-for-city-page {
    background-color: #ffc244ff;
    position: relative;
  }

  .header-layout {
    padding: 3rem 7.5%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    margin-top: -1.4rem;
    width: 12rem;
  }

  .header-center {
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
    height: 100%;
    width: 100%;
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
    height: 4.8rem;
    width: 12.6rem;
    border-radius: 2.4rem;
    font-size: 2rem;
    font-family: "Gotham", "Arial", "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 700;
    box-shadow: 0 3px 5px 0 #0000001a;
    border: none;
    letter-spacing: 0.2rem;
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
`;
