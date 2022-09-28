import styled from "styled-components";
import footerLogo1 from "../logos/footerLogo1.png";
import { BrandGrid, SideBar } from "./index";

export const Header = () => {
  return (
    <Wrapper>
      <header className="header">
        <div className="image-background">
          <div className="container-products">
            <div className="header-top">
              <img src={footerLogo1} alt="" className="header-logo" />
              <div className="header-address">address</div>
            </div>
            <div className="side-bar">
              <SideBar />
            </div>
          </div>
          <BrandGrid />
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  // backgroundImage

  .header {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .image-background {
    padding-top: 2rem;
    background: linear-gradient(
      rgba(134, 142, 150, 0.5),
      rgba(241, 243, 245, 0.5)
    );
    background-image: linear-gradient(
        rgba(134, 142, 150, 0.3),
        rgba(241, 243, 245, 0.3)
      ),
      url(https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/ghnxcawgjavs80qhpz5y);
    // background-repeat: no-repeat;
    background-size: cover;

    height: 25rem;
  }

  .header-top {
    padding-top: 1.6rem;
    display: flex;
    justify-content: space-between;
  }

  .header-logo {
    width: 12rem;
  }

  .side-bar {
    font-size: 2.4rem;
    display: block;
    text-align: start;
    padding-bottom: 1rem;
  }
`;
