import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

export const SearchLocationModal = ({
  setShowLocationModal,
}: {
  setShowLocationModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Wrapper>
      <div className="block">
        <div className="registration-container show-registration center">
          <div className="content center">
            <h1 className="title">Add a delivery address</h1>
            <button
              className="close-btn"
              onClick={() => setShowLocationModal(false)}
            >
              <FaTimes />
            </button>
            <div className="grid grid--2-cols">
              <div className="search">
                <form action="" className="form">
                  <label htmlFor="" className="label">
                    🚩
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Search for streets, cities, districts..."
                  />
                </form>
                <div className="current-location center">
                  <div className="icon">✔</div>
                  <h3 className="use-current">Use current location</h3>
                </div>
                <div className="center">
                  <button className="button">
                    Or set your location on the map
                  </button>
                </div>
              </div>
              <div className="center">
                <img
                  src="https://res.cloudinary.com/glovoapp/image/fetch//f_auto,q_auto/https://glovoapp.com/images/map-placeholder.jpg"
                  alt=""
                  className="map-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // @media (min-width: 992px) {
  //   display: none;
  // }

  .registration-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    overflow: auto;
  }
  .grid {
    column-gap: 4rem;
    margin: 2rem 6rem;
  }

  .show-registration {
    z-index: 99;
    opacity: 1;
  }

  .content {
    background: #fff;
    position: relative;
    width: 80rem;
    height: 60rem;
    border-radius: 1rem;
    flex-direction: column;
    margin: 10vh auto;
    gap: 4rem;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: grey;
    cursor: pointer;
  }

  .form {
    display: flex;
    align-items: center;
    padding-bottom: 2rem;
  }

  .form-input {
    border: none;
    border-bottom: solid 1px grey;
    width: 22rem;
    padding: 0.5rem;
  }

  .form-input:focus {
    outline: none;
  }

  .current-location {
    justify-content: center;
    padding-bottom: 20rem;
  }

  .label {
    padding-right: 1rem;
  }

  .title {
    font-size: 3rem;
  }
`;
