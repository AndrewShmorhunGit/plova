import styled from "styled-components";
import { cooperationData } from "../units/data";
export const Partnership = () => {
  return (
    <Wrapper>
      <section className="cooperation">
        <div className="container">
          <div className="center">
            <img
              src="https://res.cloudinary.com/glovoapp/image/fetch//w_117,h_80,b_transparent,c_lpad,q_auto/https://glovoapp.com/images/corporate-container/together.svg"
              alt=""
            />
          </div>
          <h1 className="center">Lets do it together</h1>
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
                    Join us!
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

  .cooperation {
    background-color: #e9f8f5;
    padding: 6.4rem 0 18rem 0;
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
    width: 15rem;
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
    font-size: 3.6rem;
    text-align: center;
  }

  h2 {
    font-size: 3rem;
    text-align: center;
    font-weight: 600;
  }

  p {
    font-size: 1.8rem;
    text-align: center;
  }
`;
