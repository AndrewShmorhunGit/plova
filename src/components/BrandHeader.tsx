import useGeolocation from "react-hook-geolocation";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../hooks/useAppDispatch";
import footerLogo1 from "../logos/footerLogo1.png";
import { IMenu } from "../modules/modules";
import { Path, UserData } from "./index";

export const BrandHeader = ({
  menu,
  loading,
}: {
  menu: IMenu;
  loading: boolean;
}) => {
  const location = useGeolocation();
  const address: string = `lat: ${location.latitude}, lng: ${location.longitude}`;
  const backgroundImage: string = menu.headerBackgroundImage;
  const { user } = useAppSelector((state) => state.user);
  return (
    <Wrapper>
      <header className="header">
        <div
          className="image-background"
          style={{
            backgroundImage: `linear-gradient(
        0deg,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.5)
      ),
      url(${backgroundImage})`,
          }}
        >
          <div className="container-products">
            <div className="header-top">
              <Link to="/">
                <img src={footerLogo1} alt="" className="header-logo" />
              </Link>

              <div
                className="header-address center"
                // onClick={() => setShowLocation(!showLocation)}
              >
                <div className="location">
                  <img
                    src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/location2-white.svg"
                    alt="location marker"
                    className="header-location-icon"
                  />
                  <div className="header-text">
                    <span className="address-content-text">
                      {`${
                        address.length < 30
                          ? address
                          : address.slice(0, 30) + "..."
                      }`}
                    </span>
                  </div>
                  <img
                    src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/landing/dropdown-white.svg"
                    alt=""
                    role="presentation"
                    className="header__content__arrow"
                  />
                </div>
                <div className="center">
                  <UserData color={"white"} user={user} />
                </div>
              </div>
              {/* <div className="header-address">{address}</div> */}
            </div>
            <div className="path">
              <Path name={menu.brandName} />
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .header {
    display: flex;
    flex-direction: column;
  }

  .image-background {
    padding-top: 2rem;
    background: linear-gradient(
      rgba(134, 142, 150, 0.5),
      rgba(241, 243, 245, 0.5)
    );

    background-size: cover;
    background-position: center;
    overflow: hide;
    height: 24.5rem;
  }

  .location {
    display: flex;
  }

  .header-address {
    padding-top: 0.9rem;
    color: white;
    font-size: 1.6rem;
    font-weight: 600;
  }

  .header-location-icon {
    height: 1.6rem;
    padding-right: 0.5rem;
    stretch: white;
  }

  .header__content__arrow {
    height: 2rem;
    color: white;
    padding-left: 0.15rem;
    margin-right: -0.8rem;
    margin-top: 0.15rem;
  }

  .menu-icon-user {
    padding: 0.1rem 1.6rem;
    cursor: pointer;
    margin-top: 0.1rem;
  }

  .menu-icon-orders {
    padding: 0.1rem 0.8rem;
    cursor: pointer;
    margin-top: 0.1rem;
  }

  .header-top {
    padding-top: 0.5rem;
    display: flex;
    justify-content: space-between;
  }

  .header-logo {
    width: 13rem;
  }

  .path {
    font-weight: 200;
    font-size: 1.6rem;
    color: white;
    padding-top: 1rem;
    text-align: start;
  }

  @media (max-width: 62.5em) {
    .location {
      display: none;
    }
  }
`;
