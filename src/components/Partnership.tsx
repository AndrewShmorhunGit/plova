import styled from "styled-components";
import { cooperationData } from "../units/data";
// import corporateWaveDesktopPartnership from "../images/design/corporateWaveDesktopPartnership.svg";

export const Partnership = () => {
  return (
    <Wrapper>
      <div className="top-transition">
        {/* <img
          src={corporateWaveDesktopPartnership}
          alt="wave"
          className="wave"
        /> */}
        <img
          src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/landing/waves/corporate-wave-desktop.svg"
          alt=""
          className="wave"
        />

        <img
          src="https://res.cloudinary.com/glovoapp/image/fetch//w_117,h_80,b_transparent,c_lpad,q_auto/https://glovoapp.com/images/corporate-container/together.svg"
          alt=""
          className="hand-shake"
        />
      </div>

      <section className="cooperation">
        <div className="container">
          <h2 className="center">Let’s do it together</h2>
          <div className="join center">
            {cooperationData.map((item) => {
              return (
                <div key={item.id} className="join-unit center">
                  <img
                    src={item.image}
                    alt="working people"
                    className="cooperation-image center"
                  />
                  <h3 className="sub-title center">{item.theme}</h3>
                  <p className="center">{item.text}</p>
                  <a href={item.linkTo} className="btn-join btn center">
                    Join us
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div style={{ backgroundColor: "#e9f8f5" }}>
        <div className="transition"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 2rem 0 5rem 0;
  }

  .cooperation {
    background-color: #e9f8f5;
    padding: 2.4rem 0 6rem 0;
    hight: 100%;
    position: relative;
  }

  .join {
    padding: 4rem 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    row-gap: 4rem;
    column-gap: 3rem;
    padding-bottom: 0;
  }

  .join-unit {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .top-transition {
    position: relative;
    height: auto;
  }

  .hand-shake {
    position: absolute;
    z-index: 3;
    left: calc(50% - 60px);
    top: calc(75% - 60px);
    width: 12rem;
  }

  .cooperation-image {
    height: 24rem;
  }

  .btn-join {
    font-size: 2rem;
    color: #fff;
    padding: 2.5rem 6rem;
    border-radius: 10rem;
    font-weight: 700;
    letter-spacing: 0.05rem;
  }

  .wave {
    display: flex;
    min-width: 100%;
    max-width: 200%;
  }

  .transition {
    display: block;
    width: 110%;
    height: 12.5rem;
    background-color: #1d1d1d;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    margin: 0rem -10rem -5rem -10rem;
  }

  h2 {
    font-size: 4.6rem;
    letter-spacing: 0.1rem;
    text-align: center;
    padding-bottom: 4rem;
  }

  h3 {
    font-size: 2.8rem;
    text-align: center;
    font-weight: 700;
    letter-spacing: 0.1rem;
  }

  p {
    font-size: 1.7rem;
    text-align: center;
    font-weight: 400;
  }
`;
