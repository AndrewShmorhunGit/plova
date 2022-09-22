import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorPage = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <h3>Ohh! Page not found!</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">back home</Link>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/error/sad_glopi.svg"
          alt="not found"
          className="center"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;

  img {
    width: 12vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    padding-left: 4rem;
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
