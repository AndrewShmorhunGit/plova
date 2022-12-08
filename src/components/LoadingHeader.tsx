import styled from "styled-components";
import logo from "../logos/locationLogoYellow.png";

export const LoadingHeader = () => {
  return (
    <Wrapper>
      <header className="header">
        <div className="container-loader">
          <div className="image-background"></div>
          <div className="logo-address">
            <div className="logo-loader">
              <img className="logo" src={logo} alt="" />
            </div>
            <div className="address-loader">
              <svg
                viewBox="0 0 556 30"
                version="1.1"
                preserveAspectRatio="none"
                speed="2"
                className="loader-placeholder--address"
              >
                <rect
                  clipPath="url(#zpo4yqmgm9)"
                  x="0"
                  y="0"
                  width="556"
                  height="30"
                  style={{ fill: `url(#fogtu6dz47o)` }}
                ></rect>
                <defs>
                  <clipPath id="zpo4yqmgm9">
                    <rect
                      x="0"
                      y="0"
                      rx="20"
                      ry="20"
                      width="556"
                      height="30"
                      fill="#F5F5F5"
                    ></rect>
                  </clipPath>
                  <linearGradient id="fogtu6dz47o">
                    <stop offset="0%" stopColor="#f9f9f9" stopOpacity="1">
                      <animate
                        attributeName="offset"
                        values="-2; 1"
                        dur="6s"
                        repeatCount="indefinite"
                      ></animate>
                    </stop>
                    <stop offset="50%" stopColor="#ecebeb" stopOpacity="1">
                      <animate
                        attributeName="offset"
                        values="-1.5; 1.5"
                        dur="6s"
                        repeatCount="indefinite"
                      ></animate>
                    </stop>
                    <stop offset="100%" stopColor="#f9f9f9" stopOpacity="1">
                      <animate
                        attributeName="offset"
                        values="-1; 2"
                        dur="6s"
                        repeatCount="indefinite"
                      ></animate>
                    </stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="path-loader">
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--path"
            >
              <rect
                clipPath="url(#zpo4yqmgm9)"
                x="0"
                y="0"
                width="556"
                height="30"
                style={{ fill: `url(#fogtu6dz47o)` }}
              ></rect>
              <defs>
                <clipPath id="zpo4yqmgm9">
                  <rect
                    x="0"
                    y="0"
                    rx="20"
                    ry="20"
                    width="556"
                    height="30"
                    fill="#F5F5F5"
                  ></rect>
                </clipPath>
                <linearGradient id="fogtu6dz47o">
                  <stop offset="0%" stopColor="#f9f9f9" stopOpacity="1">
                    <animate
                      attributeName="offset"
                      values="-2; 1"
                      dur="6s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>
                  <stop offset="50%" stopColor="#ecebeb" stopOpacity="1">
                    <animate
                      attributeName="offset"
                      values="-1.5; 1.5"
                      dur="6s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>
                  <stop offset="100%" stopColor="#f9f9f9" stopOpacity="1">
                    <animate
                      attributeName="offset"
                      values="-1; 2"
                      dur="6s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding-top: 2rem;
  min-height: 24.5rem;
  background: linear-gradient(#f5f5f5, #5d5d5d);
  z-index: -10;

  .logo-address {
    display: flex;
    justify-content: space-between;
  }

  .logo {
    max-height: 6rem;
    max-width: 6rem;
    opacity: 30%;
  }

  .loader-placeholder--address {
    margin-top: 3rem;
    height: 3rem;
    width: 50rem;
  }

  .loader-placeholder--path {
    margin-top: 5rem;
    height: 1.6rem;
    width: 10rem;
    border-radius: 1rem;
  }
`;
