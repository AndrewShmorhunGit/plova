import styled from "styled-components";
import footerLogo1 from "../logos/footerLogo1.png";
import {
  joinLinks,
  aboutLinks,
  socialLinks,
  brands,
  categories,
  language,
} from "../units/data";

export const Footer = () => {
  const country: string = "Ukraine";

  return (
    <Wrapper>
      {/* <div className="decoration-svg center">
        <img
          src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/curve--small.svg"
          alt="deco-curve"
          className="curve"
        />
      </div> */}
      <footer className="app-footer">
        <div className="container">
          <img src={footerLogo1} alt="plova logo" className="footer-logo" />
          <div className="footer-info">
            <div className="links">
              <h2>Join Us!</h2>
              {joinLinks.map((link) => {
                return (
                  <div key={link.id} className="social-sub-links">
                    <a href="#">
                      <p className="sub-links">{link.text}</p>
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="links">
              <h2>About Us</h2>
              {aboutLinks.map((link) => {
                return (
                  <div key={link.id} className="social-sub-links">
                    <a href="#">
                      <p className="sub-links">{link.text}</p>
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="links">
              <h2>Social</h2>
              {socialLinks.map((link) => {
                return (
                  <div key={link.id} className="social-sub-links">
                    <a href="#">
                      <p className="sub-links">{link.text}</p>
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="links">
              <h2>Language</h2>
              {language.map((link, index) => {
                return (
                  <div key={index} className="social-sub-links">
                    <a href="#">
                      <p className="sub-links">{link}</p>
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="popular">
              <h2>Popular brands: {country}</h2>
              <div className="country-links center">
                {brands.map((item, index) => {
                  return (
                    <a key={index} href={`#${item}`} className="link">
                      <p>{item}</p>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="categories">
              <h2>Top categories: {country}</h2>
              <div className="country-links center">
                {categories.map((item, index) => {
                  const { category } = item;
                  return (
                    <a key={index} href={`#${category}`} className="link">
                      <p>{category}</p>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .app-footer {
    background-color: #1d1d1dff;
    border-top: 6.8rem solid transparent;
    padding-bottom: 4.2rem;
  }

  // .decoration-swg {
  //   padding-top: 5rem;
  //   display: block;
  //   width: 90%;
  // }
  // .curve {
  //   position: absolute;
  //   width: 100%;
  //   object-fit: cover;
  // }

  h2 {
    // font-size: 2rem;
    color: #fff;
  }

  p {
    font-size: 1.4rem;
    text-transform: capitalize;
    color: #cccccc;
  }

  a {
    text-decoration: none;
  }

  .footer-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 2fr 1fr 1fr;
    // justify-items: center;
    column-gap: 4.8rem;
    row-gap: 3.2rem;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 2.2rem;
  }

  .social-sub-links {
    display: flex;
    // justify-content: center;
  }

  .footer-logo {
    width: 12rem;
    padding-top: 2.4rem;
    padding-bottom: 4.8rem;
  }

  .popular {
    grid-column: 1/3;
    grid-row: 2/3;
  }
  .categories {
    grid-column: 1/3;
    grid-row: 3/4;
  }

  .country-links {
    display: flex;
    padding: 1rem 2rem;
    gap: 1rem;
  }

  .link {
    display: inline;
    min-width: auto;
  }

  p {
    text-align: center;
  }
`;
