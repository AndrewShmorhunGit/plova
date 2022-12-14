import styled from "styled-components";

export const LoadingProducts = () => {
  return (
    <Wrapper>
      <div className="form">
        <form className="search-form">
          <label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="15"
              fill="none"
            >
              <circle
                cx="6"
                cy="6.721"
                r="5"
                stroke="#9B9B9B"
                strokeWidth="1.6"
              />
              <path
                stroke="#9B9B9B"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
                d="M9.396 10.723L12 13.72"
              />
            </svg>
          </label>
          <input
            type="text"
            placeholder={`Search in...`}
            className="search-input"
          />
        </form>
      </div>
      <div className="products-loader">
        <div className="product">
          <div className="image-loader"></div>
          <div className="text-loader">
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productName"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
        <div className="product">
          <div className="image-loader"></div>
          <div className="text-loader">
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productName"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
        <div className="product">
          <div className="image-loader"></div>
          <div className="text-loader">
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productName"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
        <div className="product">
          <div className="image-loader"></div>
          <div className="text-loader">
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productName"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
        <div className="product">
          <div className="image-loader"></div>
          <div className="text-loader">
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productName"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
        <div className="product">
          <div className="image-loader"></div>
          <div className="text-loader">
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productName"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
        <div className="product">
          <div className="image-loader"></div>
          <div className="text-loader">
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productName"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
        <div className="product">
          <div className="image-loader"></div>
          <div className="text-loader">
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productName"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
        <div className="product">
          <div className="image-loader"></div>
          <div className="text-loader">
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productName"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
        <div className="product">
          <div className="image-loader"></div>
          <div className="text-loader">
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productName"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
            <svg
              viewBox="0 0 556 30"
              version="1.1"
              preserveAspectRatio="none"
              speed="2"
              className="loader-placeholder--productDescription"
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
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .search-form {
    background-color: #f5f5f5;
    padding: 1.25rem 1rem 1.2rem 1.8rem;
    border-radius: 10rem;
    label {
      padding-right: 1rem;
    }
  }

  .search-input {
    font-size: 1.6rem;
    background-color: #f5f5f5;
    border: none;
  }

  .products-loader {
    max-width: 95rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    font-weight: 700;
    padding-top: 2rem;
  }

  .product {
    max-height: 16rem;
    width: auto;
    margin: 1rem 1rem;
    padding: 1.6rem 1rem 2rem 1.6rem;
    background-color: #fff;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    border: 1px solid #e7e7e7;
    gap: 6rem;
  }

  .image-loader {
    display: flex;
    max-height: 8em;
    min-width: 8rem;
    border-radius: 1rem;
    background: #f5f5f5;
  }

  .text-loader {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .loader-placeholder--productName {
    height: 2.4rem;
    width: 10rem;
    border-radius: 1rem;
  }

  .loader-placeholder--productDescription {
    height: 1.6rem;
    width: 20rem;
  }
`;
