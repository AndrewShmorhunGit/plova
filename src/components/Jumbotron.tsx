import styled from "styled-components";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { LocationInput } from "./index";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchJumbotron } from "../store/actions/jumbotronActions";
import { ErrorPage } from "../pages";
import useGeolocation from "react-hook-geolocation";

const currentLocation: string = "136 Pym St, Nottingham";

export const Jumbotron = () => {
  const [showAddressInput, setShowAddressInput] = useState(false);
  const location: boolean = false;
  const dispatch = useAppDispatch();
  const geolocation = useGeolocation();

  // f8eb33e3d4aa046b; - map ID
  // process.env.REACT_APP_MAP_API_KEY

  const { loading, error, jumbotron } = useAppSelector(
    (state) => state.jumbotron
  );

  useEffect(() => {
    dispatch(fetchJumbotron());
  }, []);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <Wrapper>
      <section className="landing-jumbotron">
        {location ? (
          <div
            className="user-address-content"
            onClick={() => setShowAddressInput(!showAddressInput)}
          >
            <div className="user-address-content-text">
              <p>
                Delivery to
                <span className="address-content-text">{` ${currentLocation}`}</span>
              </p>
              <div className="chevron">
                <FaChevronDown />
              </div>
            </div>
          </div>
        ) : (
          <>
            {!loading && (
              <>
                <h2>
                  lat {geolocation.latitude}, lng {geolocation.longitude},
                </h2>
                <LocationInput />
              </>
            )}
          </>
        )}

        <div className="jumbotron-container">
          {jumbotron.map((item) => {
            const { id, category, icon } = item;
            return (
              <a key={id} href={`#${category}`} className={"link-bubble"}>
                <div className={"category"}>
                  <div
                    className="category-logo"
                    style={{
                      animationName: `jumbotron-appear`,
                      animationDuration: `${id * 0.1}s`,
                      animationDelay: `${id * 0.35}s`,
                      animationFillMode: "backwards",
                      backgroundImage: "radial-gradient(white,#f1f3f5 )",
                    }}
                  >
                    <div className="absolute">
                      <img src={icon} alt="" />
                      <p className="category-text center">{category}</p>
                    </div>
                  </div>
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

  .landing-jumbotron-loading {
    display: flex;
    background-color: #ffc244ff;
    min-height: 30rem;
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

  .jumbotron-container {
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
    padding: 1rem 1rem;
  }

  .category {
    position: relative;
    box-shadow: none;
    border: none;
    text-align: center;
    // user-select: none;
    height: 11.5rem;
    width: 11.5rem;
    background: #ffc244;
    cursor: pointer;
    transition: all .5s;
  }

  .category:hover {
    transform: scale(1.1);
  }

  .category-logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 5rem;
    height: 11.5rem;
    width: 11.5rem;
    border-radius: 50%;
  }

  .absolute {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  // transform:scale(0.1);
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

  @keyframes jumbotron-appear {
    0% {
      // transform: translateZ(-1rem);
      transform: scale(0)
      display: none;
      opacity: 0;
      height: 1rem;
      width: 1rem;
    }
    ,
    25% {
      height: 3rem;
      width: 3rem;
    }
    ,
    50% {
      height: 6rem;
      width: 6rem;
    }

    ,
    75% {
      opacity: 20%;
      height: 9rem;
      width: 9rem;
    }

    ,
    100% {
      opacity: 100%;
      height: 11.5rem;
      width: 11.5rem;
    }
  }
`;
