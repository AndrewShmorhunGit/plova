import { useState } from "react";
import styled from "styled-components";

export const LocationInput = () => {
  const [showLocationModal, setShowLocationModal] = useState(false);
  console.log(showLocationModal);
  return (
    <Wrapper>
      <section>
        <h1 className="title center">Explore delivery in Kyiv, Right Bank</h1>
        <div className="center">
          <div className="location-setup center">
            <form
              action=""
              className="location-form center"
              onClick={() => setShowLocationModal(!showLocationModal)}
            >
              <label className="form-label">Flag</label>
              <input
                type="text"
                className="location-input"
                placeholder="What's your address?"
              />
            </form>
            <div className="current-location">
              <div className="icon">%</div>
              <h3 className="use-current">Use current location</h3>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    font-size: 3.6rem;
    padding-bottom: 2rem;
  }
  .location-setup {
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    background: #fff;
    border-radius: 0.9rem;
    overflow: visible;
    width: 52rem;
    margin-bottom: 2rem;
  }

  .location-input {
    padding-left: 1rem;
    border: none;
  }

  .location-input:focus {
    outline: none;
  }

  .form-label {
    padding: 1.6rem 1.2rem;
    align-items: center;
    background: #1aa98f;
    border-top-left-radius: 0.9rem;
    border-bottom-left-radius: 0.9rem;
  }

  .current-location {
    display: flex;
    align-items: center;
    justify-content: end;
    cursor: pointer;
  }

  .icon {
    color: #1aa98f;
    padding: 1rem 1rem;
    background: #d1eee9;
    border-radius: 50%;
  }

  .use-current {
    padding: 0 2rem 0 1rem;
    font-size: 1.6rem;
    color: #1aa98f;
  }
`;
