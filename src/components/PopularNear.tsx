import styled from "styled-components";
import { categories } from "../units/data";

export const PopularNear = () => {
  return (
    <Wrapper className="container">
      <section className="popular">
        <div className="center">
          <img
            src="https://res.cloudinary.com/glovoapp/image/fetch//w_140,h_140,q_auto/https://glovoapp.com/images/landing/cities.svg"
            alt="building pictures"
            className="image"
          />
        </div>
        <h1 className="title center">Top Categories in `here`</h1>
        <div className="categories-popular-container center">
          {categories.map((item, index) => {
            const { category } = item;
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
    min-hight: 20rem;
    padding: 4rem 8rem;
  }
  .title {
    font-size: 4.4rem;
  }
  .link {
    background-color: #fff3da;
    color: #343434;
    text-align: center;
    text-decoration: none;
    margin: 4rem 1rem;
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
`;
