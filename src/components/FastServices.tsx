import styled from "styled-components";
import { jumbotron } from "../units/data";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
// import locationLogoYellow from "../logos/locationLogoYellow.png";
import { LocationInput } from "./index";
// Времеенно убираем поиск локации... чтобы сделать пиксельперфект HomePage
const address: string = "136 Pym St, Nottingham";

export const FastServices = () => {
  const [showLocation, setShowLocation] = useState(false);
  const location: boolean = false;

  return (
    <Wrapper>
      <section className="landing-jumbotron">
        {location ? (
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
        ) : (
          <LocationInput />
        )}
        <div className="categories-container">
          {jumbotron.map((item) => {
            const { id, category, iconUrl } = item;
            return (
              <a key={id} href={`#${category}`} className={`link-bubble`}>
                <div
                  className="category"
                  style={{
                    animationName: `categories-appear`,
                    animationDuration: `${id * 0.1}s`,
                    animationDelay: `${id * 0.2}s`,
                    animationFillMode: "backwards",
                  }}
                >
                  <div className="category-logo">
                    <img src={iconUrl} alt="" />
                  </div>
                  <p className="category-text center">{category}</p>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .landing-jumbotron {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    background-color: #ffc244ff;
    padding-bottom: 6.4rem;
    padding-top: 4.8rem;
  }

  .user-address-content {
    font-size: 2.4rem;
    letter-spacing: 0.2rem;
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
    min-height: 30rem;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .category-text {
    font-size: 1.3rem;
    margin-top: -1.5rem;
    font-weight: 400;
    color: dark-grey;
    padding: 0 1rem;
  }

  .category {
    box-shadow: none;
    border: none;
    text-align: center;
    user-select: none;
    height: 11.5rem;
    width: 11.5rem;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    transition: all 0.5s;
    // animation-name: categories-appear;
    // animation-duration: 0.5s;
  }

  .category:hover {
    transform: scale(1.1);
  }

  .category-logo {
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 5rem;
    
  }

  .link-bubble {
    text-decoration: none;
    color: #343a40;
    margin: 1rem;
    border-radius: 50%;
    
    
  }

  .link3 {
    display: none;
  }

  .hidden {
    display: none;
  }

  @keyframes categories-appear {
    0% {
      transform: translateZ(-1rem);
      opacity: 0;
      height: 1rem;
      width: 1rem;
    }
    ,
    25% {
      // opacity: 50%;
      height: 3rem;
      width: 3rem;
    }
    ,
    50% {
      display: none
      height: 6rem;
      width: 6rem;
    }

    ,
    75% {
      height: 9rem;
      width: 9rem;
    }

    ,
    100% {
      // display:block;
      opacity: 100%;
      height: 11.5rem;
      width: 11.5rem;
    }
  }
`;
