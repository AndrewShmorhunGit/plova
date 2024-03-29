import styled from "styled-components";
import { categories } from "../units/data";

export const PopularNear = () => {
  return (
    <Wrapper className="center">
      <section className="popular">
        <div className="center">
          <img
            src="https://res.cloudinary.com/glovoapp/image/fetch//w_140,h_140,q_auto/https://glovoapp.com/images/landing/cities.svg"
            alt="building pictures"
            className="image"
          />
        </div>
        <div className="title-container">
          <h1 className="title">
            Top Categories in <br />
            <span>{`Your City`}</span>
          </h1>
        </div>
        <div className="categories-popular-container center">
          {categories.map((item, index) => {
            const category = item;
            return (
              <a key={index} href={`#${category}`} className="link center">
                <p>{category}</p>
              </a>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .popular {
    display: flex;
    flex-direction: column;
    min-hight: 20rem;
    padding: 4rem 8rem;
    margin-bottom: 6rem;
  }

  .categories-popular-container {
    flex-wrap: wrap;
  }

  span {
    color: red;
  }

  .title-container {
    margin-bottom: 4rem;
  }

  .title {
    text-align: center;
    display: block;
    font-size: 4.4rem;
  }

  .link {
    background-color: #fff3da;
    color: #343434;
    text-align: center;
    text-decoration: none;
    margin: 1rem 1rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    height: 4.8rem;
    width: auto;
    border-radius: 2.4rem;
    font-size: 1.6rem;
    font-family: "Gotham", "Arial", "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 700;
    border: none;
    letter-spacing: 0.1rem;
    transition: all 0.5s;
  }

  .image {
    height: 15rem;
    margin-bottom: 2rem;
  }

  .link:hover {
    background-color: #ffd47c;
    color: #343434;
    cursor: pointer;
  }

  @media (max-width: 43.75em) {
    .title {
      font-size: 2.4rem;
    }

    .link {
      padding-left: 1.4rem;
      padding-right: 1.4rem;
      height: 3.2rem;
      width: auto;
      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: 0.05rem;
    }
  }
`;
