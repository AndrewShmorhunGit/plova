import styled from "styled-components";
import { categories } from "../units/data";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import locationLogoYellow from "../logos/locationLogoYellow.png";

const address: string = "136 Pym St, Nottingham";

export const FastServices = () => {
  const [showLocation, setShowLocation] = useState(false);

  return (
    <Wrapper>
      <main className="landing-jumbotron">
        <div
          className="user-address-content"
          onClick={() => setShowLocation(!showLocation)}
        >
          <div className="user-address-content-text">
            <p>
              Delivery to the address:
              <span className="address-content-text">{` ${address}`}</span>
            </p>
            <div className="chevron">
              <FaChevronDown />
            </div>
          </div>
        </div>
        <div className="categories-container">
          {categories.map((item) => {
            const { id, category } = item;
            return (
              <a key={id} href={`#${category}`} className="link-bubble">
                <div key={id} className="category">
                  {/* <div className="category-icon">{icon}</div> */}
                  {/* <div className="category-icon">{locationLogoYellow}</div> */}
                  <img
                    className="category-logo"
                    src={locationLogoYellow}
                    alt={`${category} logo`}
                  />
                  <p className="category-text">{category}</p>
                </div>
              </a>
            );
          })}
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .landing-jumbotron {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    background-color: #ffc244ff;
    padding-bottom: 6.4rem;
  }

  .user-address-content {
    font-size: 2rem;
  }

  .user-address-content-text {
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.05rem;
  }

  .address-content-text {
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 0.05rem;
  }

  .chevron {
    margin-bottom: -0.6rem;
    padding-left: 1rem;
    width: 3rem;
    cursor: pointer;
  }

  .categories-container {
    max-width: 70rem;
    min-height: 26rem;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .category-text {
    font-size: 1.4rem;
  }

  .category {
    box-shadow: none;
    border: none;
    text-align: center;
    flex-direction: row;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    height: 12rem;
    width: 12rem;
    font-size: 1rem;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    transition: all 0.5s;
  }

  .category:hover {
    transform: scale(1.1);
  }

  .category-logo {
    max-width: 70%;
  }

  .link-bubble {
    text-decoration: none;
    color: #343a40;
    margin: 1rem;
    border-radius: 50%;
  }
`;
