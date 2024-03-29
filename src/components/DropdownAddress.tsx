import styled from "styled-components";
import { useRef, useState } from "react";
import { IDropdownOptions, IModalState, IOrderState } from "../modules/modules";
import rightArrow from "../images/order/thin_arrow_right.svg";
import { useClickOutside } from "../hooks/useClickOutside";

export const DropdownAddress = ({
  modalState,
  setModalState,
  options,
  orderState,
  setOrderState,
}: {
  setModalState: React.Dispatch<React.SetStateAction<IModalState>>;
  modalState: IModalState;
  options: IDropdownOptions;
  setOrderState: React.Dispatch<React.SetStateAction<IOrderState>>;
  orderState: IOrderState;
}) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const dropdownOptions = options;
  useClickOutside(ref, () => setIsActive(false));

  return (
    <Wrapper>
      <main ref={ref} className="main">
        <div className="label-container">
          <img
            className="label center"
            src={dropdownOptions.default.img}
            alt=""
            onClick={() => setIsActive(!isActive)}
          />
        </div>
        <div className="dropdown" id="dropdown">
          <div
            className={isActive ? "dropdown-btn active" : "dropdown-btn"}
            onClick={() => setIsActive(!isActive)}
          >
            <p>
              {orderState.delAddress
                ? orderState.delAddress
                : dropdownOptions.default.text}
            </p>
            <img className="arrow" src={rightArrow} alt="" />
          </div>
          {isActive && (
            <div className="dropdown-content">
              {dropdownOptions.options.map((option, index) => {
                return (
                  <div
                    key={index}
                    className="dropdown-item"
                    onClick={() => {
                      option.text === "Add new address"
                        ? setModalState({ ...modalState, inDevelopment: true })
                        : setOrderState({
                            ...orderState,
                            delAddress: option.text,
                          });
                      option.text !== "Add new address" && setIsActive(false);
                    }}
                  >
                    {option.img === "" ? null : (
                      <img src={option.img} alt={`${option.text}`} />
                    )}
                    <p>{option.text}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main {
    margin-top: 2rem;
    display: flex;
    gap: 3rem;
  }

  .label-container {
    min-width: 2rem;
    .label {
      position: absolute;
      height: 3rem;
      width: auto;
      cursor: pointer;
    }
  }

  .arrow {
    transform: rotate(90deg);
  }
  .dropdown {
    width: 90%;
    font-size: 1.8rem;
  }

  .dropdown-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    padding-right: 1rem;
    margin-bottom: 1rem;
    border-bottom: solid 1px lightgrey;

    p {
      font-weight: 400;
      font-size: 1.8rem;
    }

    img {
      height: 1.6rem;
    }
  }

  .dropdown-btn:hover,
  .active {
    cursor: pointer;
    border-bottom: solid 2px grey;
    padding-bottom: 0.4rem;
  }

  .dropdown-content {
    position: absolute;
    background: white;
    min-width: 45vw;
    min-width: 45dvw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.5);
    p {
      font-weight: 500;
    }
  }

  .dropdown-item:hover {
    cursor: pointer;
    background-color: lightgrey;
    border-radius: 0.5rem;
  }

  .dropdown-item {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    p {
      font-size: 1.8rem;
    }

    img {
      height: 1.8em;
    }
  }

  @media (max-width: 84.375em) {
    .dropdown-content {
      min-width: 67.5vw;
      min-width: 67.5dvw;
    }
  }

  @media (max-width: 50em) {
    .dropdown-content {
      min-width: 75vw;
      min-width: 75dvw;
    }
  }
`;
