import styled from "styled-components";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { userActions } from "../store/actions/userActions";

export const GetStartedBtn = () => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <div className="btn-container">
        <button
          className="btn-start"
          onClick={() => dispatch(userActions.toggleRegisterModal())}
        >
          Get started
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .btn-start {
    background-color: #00a082;
    color: #fff;
    text-align: center;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    height: 4.2rem;
    width: 13.6rem;
    border-radius: 2.4rem;
    font-size: 1.5rem;
    font-family: "Gotham", "Arial", "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 700;
    box-shadow: 0 3px 5px 0 #0000001a;
    border: none;
  }

  .btn-start:hover {
    background-color: #008068;
    color: #cccccc;
    cursor: pointer;
  }
`;
