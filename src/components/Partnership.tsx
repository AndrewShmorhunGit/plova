import styled from "styled-components";
import { cooperationData } from "../units/data";
// import corporateWaveDesktopPartnership from "../images/design/corporateWaveDesktopPartnership.svg";

export const Partnership = () => {
  return (
    <Wrapper>
      <div className="top-transition center">
        <img
          src="https://res.cloudinary.com/glovoapp/image/fetch//w_117,h_80,b_transparent,c_lpad,q_auto/https://glovoapp.com/images/corporate-container/together.svg"
          alt=""
          className="center"
        />
      </div>

      <section className="cooperation">
        <div className="container">
          <h1 className="center">Let's do it together</h1>
          <div className="join center">
            {cooperationData.map((item) => {
              return (
                <div key={item.id} className="join-unit center">
                  <img
                    src={item.image}
                    alt="working people"
                    className="cooperation-image center"
                  />
                  <h2 className="sub-title center">{item.theme}</h2>
                  <p className="center">{item.text}</p>
                  <a href={item.linkTo} className="btn-join btn center">
                    Join us
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="transition"></div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;

  .container {
    padding-bottom: 6rem;
  }

  .cooperation {
    background-color: #e9f8f5;
    padding: 2.4rem 0 18rem 0;
    hight: 100%;
  }

  .join {
    padding: 4rem 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    row-gap: 4rem;
    column-gap: 6rem;
    padding-bottom: 0;
  }

  .join-unit {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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

  .top-transition {
    // background-color: red;
    // display: flex;
    background-image: url(../images/design/corporateWaveDesktopPartnership.svg);
    background-size: 100vw 10rem;
  }

  .transition {
    width: 120%;
    height: 16rem;
    background-color: #1d1d1d;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    position: absolute;
    bottom: -10rem;
    left: -10%;
  }

  h1 {
    font-size: 4.6rem;
    letter-spacing: 0.1rem;
    text-align: center;
    padding-bottom: 4rem;
  }

  h2 {
    font-size: 2.8rem;
    text-align: center;
    font-weight: 700;
    letter-spacing: 0.1rem;
  }

  p {
    font-size: 2rem;
    text-align: center;
  }
`;
