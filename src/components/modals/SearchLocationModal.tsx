import styled from "styled-components";

export const SearchLocationModal: React.FC<{
  setShowLocationModal: React.Dispatch<React.SetStateAction<boolean>>;
  showLocationModal: boolean;
}> = ({ setShowLocationModal, showLocationModal }) => {
  return (
    <Wrapper>
      <div
        className={
          showLocationModal
            ? "location-container show-location"
            : "location-container"
        }
      >
        <div className="content center">
          <h1 className="title">Add a delivery address</h1>
          <button
            className="close-btn"
            onClick={() => setShowLocationModal(false)}
          >
            <img
              src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/close-icon.svg"
              alt=""
            />
          </button>
          <div className="grid grid--2-cols">
            <div className="search">
              <form action="" className="form">
                <label htmlFor="" className="label">
                  <img
                    src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/glyphs/flag_dark-grey.svg"
                    alt=""
                  />
                </label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Search for streets, cities, district..."
                />
              </form>
              <div className="current-location center">
                <img
                  src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/location.svg"
                  alt=""
                />

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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .location-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    padding: 0rem 0 0 2rem;
    z-index: -1;
    overflow: auto;
    opacity: 0;
    transition: all 0.5s ease;
  }

  .location-container::-webkit-scrollbar {
    width: 0;
  }

  .grid {
    column-gap: 4rem;
    margin: 4rem 5rem;
  }

  .show-location {
    z-index: 99;
    opacity: 1;
  }

  .content {
    background: #fff;
    position: relative;
    width: 80rem;
    height: 59rem;
    border-radius: 1rem;
    flex-direction: column;
    margin: 10vh auto;
    gap: 1rem;
  }

  .close-btn {
    position: absolute;
    top: 3rem;
    right: 3rem;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: grey;
    cursor: pointer;
  }

  .button {
    border: none;
    background: none;
    padding: 0rem 2rem;
    color: #1aa98f;
    font-weight: 700;
    font-size: 1.4rem;
    cursor: pointer;
  }

  .form {
    display: flex;
    align-items: center;
    padding-bottom: 2rem;
    height: 4.6rem;
  }

  .form-input {
    border: none;
    border-bottom: solid 1px grey;
    width: 22rem;
    // padding: 0.5rem;
    height: 4.4rem;
    width: 30rem;
    font-size: 1.8rem;
  }

  .form-input:focus {
    outline: none;
  }

  .current-location {
    margin-top: 2rem;
    justify-content: center;
    padding-bottom: 17.5rem;
    font-size: 1.8rem;
  }

  .label {
    padding-right: 1rem;
  }

  .map-image {
    width: 30rem;
  }

  .use-current {
    padding: 1rem;
    color: #1aa98f;
    font-size: 1.6rem;
    cursor: pointer;
  }

  .title {
    font-size: 3rem;
  }
`;
