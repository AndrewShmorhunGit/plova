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
        <div className="cooperation-container">
          <h2 className="center">Let’s do it together</h2>
          <div className="join center">
            {cooperationData.map((item, index) => {
              return (
                <div key={item.id} className={`join-unit unit${index} center`}>
                  <img
                    src={item.image}
                    alt="working people"
                    className="cooperation-image center"
                  />
                  <h3 className="sub-title center">{item.theme}</h3>
                  <p>{item.text}</p>
                  <a href={item.linkTo} className="btn-join btn center">
                    Join us
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div
        style={{ backgroundColor: "#e9f8f5" }}
        className="transition-container"
      >
        <div className="transition" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .cooperation-container {
    padding: 3rem 4rem;
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
    width: 100vw;
  }

  .transition-container {
    overflow: hidden;
    width: 105vw;
  }

  .transition {
    display: block;
    width: 100%;
    height: 12.5rem;
    background-color: #1d1d1d;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    margin: 0rem -5rem 0rem -5rem;
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

  @media (max-width: 81.25em) {
    .join {
      padding: 4rem 4rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(1, 1fr);
      row-gap: 4rem;
      column-gap: 4rem;
      padding-bottom: 0;
    }

    .unit2 {
      display: flex;
      flex-direction: column;
      grid-column: 1/3;
      grid-row: 2/3;
      padding: 0 20rem;
    }

    .transition-container {
      overflow: hidden;
      width: 100%;
    }

    .transition {
      display: block;
      width: 120%;
      height: 4.5rem;
    }
  }

  @media (max-width: 56.25em) {
    .join {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(3, 1fr);
      row-gap: 4rem;
      padding: 0 25rem;
    }

    .unit0 {
      display: flex;
      flex-direction: column;
      grid-column: 1;
      grid-row: 1;
      padding: 0 20rem;
    }
    .unit1 {
      display: flex;
      flex-direction: column;
      grid-column: 1;
      grid-row: 2;
      padding: 0 20rem;
    }
    .unit2 {
      display: flex;
      flex-direction: column;
      grid-column: 1;
      grid-row: 3;
      padding: 0 20rem;
    }

    .transition-container {
      overflow: hidden;
      width: 100vw;
    }

    .transition {
      display: block;
      width: 120%;
      height: 4.5rem;
      background-color: #1d1d1d;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
      margin: 0rem -5rem 0rem -5rem;
    }
  }

  @media (max-width: 45em) {
    h2 {
      font-size: 3.6rem;
    }
  }

  @media (max-width: 31.25em) {
    .unit0 {
      padding: 0 5rem;
    }
    .unit1 {
      padding: 0 5rem;
    }
    .unit2 {
      padding: 0 5rem;
    }
    .join {
      row-gap: 3rem;
      padding: 0 2rem;
    }
  }
`;
