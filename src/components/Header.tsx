import styled from "styled-components";
import footerLogo1 from "../logos/footerLogo1.png";
import { SideBar } from "./index";

export const Header = () => {
  const address: string = "136 Pym St, Nottingham";
  return (
    <Wrapper>
      <header className="header">
        <div className="image-background">
          <div className="container-products">
            <div className="header-top">
              <img src={footerLogo1} alt="" className="header-logo" />
              <div
                className="header-address center"
                // onClick={() => setShowLocation(!showLocation)}
              >
                <img
                  src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/location2-white.svg"
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
                      address.length < 30
                        ? address
                        : address.slice(0, 30) + "..."
                    }`}
                  </span>
                </div>
                <img
                  data-v-7ff8f296=""
                  src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/landing/dropdown-white.svg"
                  alt=""
                  role="presentation"
                  className="header-user-address__content__arrow"
                />
                <div className="center">
                  <div className="menu-icon-user">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width="34"
                      height="34"
                      viewBox="0 0 32 32"
                      data-e2e-id="user-profile-trigger"
                      className="profile-icon header-action"
                      data-v-26383afe=""
                    >
                      <g
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="profile-icon__paths"
                      >
                        <path d="M25.0801 24.1107c-2.2971-3.0455-5.4822-5.5086-9.0186-5.5086-3.7536 0-7.12573 2.128-9.44431 5.5086"></path>{" "}
                        <circle cx="16" cy="13.5874" r="4.91841"></circle>{" "}
                        <circle cx="16.0001" cy="16.0001" r="13.0909"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="menu-icon-orders">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      fill="none"
                      data-e2e-id="user-orders-trigger"
                      className="orders-icon header-action"
                      data-v-26383afe=""
                    >
                      <g
                        stroke="#FFFFFF"
                        stroke-width="2"
                        className="orders-icon__paths"
                      >
                        <circle cx="5.5" cy="6.66815" r="3"></circle>{" "}
                        <circle cx="5.5" cy="16.66815" r="3"></circle>{" "}
                        <circle cx="5.5" cy="26.66815" r="3"></circle>{" "}
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 6.66815h16m-16 10h16m-16 10h16"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              {/* <div className="header-address">{address}</div> */}
            </div>
            <div className="side-bar">
              <SideBar />
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
    // filter: blur(1rem);
    background: linear-gradient(
      rgba(134, 142, 150, 0.5),
      rgba(241, 243, 245, 0.5)
    );
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.5)
      ),
      url(https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/szzdemcat83pqf3hyyrd);
    background-size: cover;
    background-position: center;
    overflow: hide;
    height: 24.5rem;
  }

  .header-address {
    margin-right: -1rem;
    min-width: 31.75rem;
    padding-top: 0.9rem;
    margin-top: -0.1rem;
    color: white;
    font-size: 1.6rem;
    font-weight: 600;
    display: flex;
  }
  .header-user-address-content-location-icon {
    height: 1.6rem;
    padding-right: 0.5rem;
    // margin-top: 0.1rem;
    stretch: white;
  }

  .header-user-address__content__arrow {
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

  .side-bar {
    font-weight: 200;
    font-size: 2.4rem;
    color: white;
    padding-top: 1rem;
    text-align: start;
  }
`;
