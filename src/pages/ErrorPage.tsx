import { Link } from "react-router-dom";
import styled from "styled-components";
import errorImage from "../images/error/sad_glopi.svg";

export const ErrorPage = () => {
  return (
    <Wrapper className="full-page">
      <main>
        <div className="container">
          <div>
            <h3>Ohh! Page not found!</h3>
            <p>We can't seem to find the page you're looking for</p>
          </div>
          <div className="center">
            <img src={errorImage} alt="not found" />
          </div>
          <Link to="/">back home</Link>
        </div>
        <footer className="transition"></footer>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  text-align: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6rem 0 0 0;

  .transition {
    display: block;
    width: 130%;
    height: 12.5rem;
    background-color: #1d1d1d;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    margin: 5rem -10rem -5rem -10rem;
  }

  img {
    max-width: 600px;
    display: block;
    margin: 2rem 0;
  }

  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;
