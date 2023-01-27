import styled from "styled-components";
import footerLogo1 from "../logos/footerLogo1.png";
import {
  joinLinks,
  aboutLinks,
  socialLinks,
  categories,
  footerStore,
} from "../units/data";
import { appleStoreSVG, googleStoreSVG } from "../images/footer/SVG";
import { goToTop } from "../units/functions";

export const Footer = () => {
  const country: string = "Country";

  return (
    <Wrapper>
      <footer className="app-footer center">
        <div className="footer-container">
          <img
            src={footerLogo1}
            alt="plova logo"
            className="footer-logo"
            onClick={() => goToTop()}
          />
          <div className="footer-info">
            <div className="links">
              <h2>Let’s do it together</h2>
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
              <h2>Follow us</h2>
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
              <h2>Links of interest</h2>
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
              <div>{appleStoreSVG}</div>
              <div>{googleStoreSVG}</div>

              {footerStore.map((link, index) => {
                return (
                  <div key={index} className="social-sub-links">
                    <a href="#">
                      <p className="sub-links">{link}</p>
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="categories">
              <h2>Top categories: {country}</h2>
              <div className="country-links center">
                {categories.map((item, index) => {
                  const category = item;
                  return (
                    <a key={index} href={`#${category}`} className="link">
                      <p>{category}</p>
                    </a>
                  );
                })}
              </div>
              <a href="#" className="link">
                <p>See all categories</p>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <h6>
              &copy; {`${new Date().getFullYear()} `}
              <strong>Plova</strong> All rights reserved. This application is
              portfolio project created by Andrew Shmorhun. Design by Glovo.
            </h6>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .footer-container {
    display: flex;
    flex-direction: column;
    max-width: 126.75rem;
    // padding: 0 10vw;
  }

  .app-footer {
    background-color: #1d1d1dff;
    padding-bottom: 2rem;
  }

  strong {
    color: #00a082;
    color: #ffc244;
  }

  h2 {
    font-size: 2.4rem;
    color: #fff;
  }

  h6 {
    text-align: center;
  }

  p {
    font-size: 1.6rem;
    color: #cccccc;
  }

  a {
    text-decoration: none;
  }

  .footer-info {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 2fr 1fr;
    justify-items: center;
    column-gap: 5rem;
    row-gap: 5rem;
  }

  .footer-bottom {
    color: #fff;
    font-weight: 200;
    padding: 3rem;
  }

  .links {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1.8rem;
  }

  .social-sub-links {
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
  }

  .sub-link {
    font-size: inherit;
  }

  .footer-logo {
    width: 12rem;
    padding-bottom: 3.2rem;
    margin-left: 3vw;
  }

  .language-picker {
    grid-column: 1/3;
    grid-row: 3/4;
  }

  .categories {
    text-align: left;
    grid-column: 1/3;
    grid-row: 2/3;
  }

  .country-links {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 0rem;
    gap: 1rem;
  }

  .link:link,
  .link:visited {
    display: inline;
    min-width: auto;
  }

  .link:hover,
  .link:active {
    color: red;
  }

  @media (max-width: 75em) {
    .footer-info {
      column-gap: 3vw;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 2fr 1fr;
    }
  }

  @media (max-width: 68.75em) {
    .footer-info {
      column-gap: 1vw;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }

  @media (max-width: 62.5em) {
    h2 {
      font-size: 2rem;
      color: #fff;
    }

    p {
      font-size: 1.4rem;
      color: #cccccc;
    }

    .footer-bottom {
      color: #fff;
      font-weight: 200;
      padding: 3rem 2rem 1rem 2rem;
    }
  }

  @media (max-width: 56.25em) {
    .footer-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: stretch;
      justify-content: start;
    }

    h2 {
      font-size: 1.8rem;
      color: #fff;
    }

    p {
      font-size: 1.2rem;
      color: #cccccc;
    }
  }
`;
