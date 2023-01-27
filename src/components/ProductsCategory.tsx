import styled from "styled-components";
import { Menu } from "../modules/modules";
import arrow from "../images/menu/arrow.svg";

export const ProductsCategory: React.FC<{
  item: Menu;
  loading: boolean;
}> = ({ item, loading }) => {
  return (
    <Wrapper>
      <main>
        <div className="product-category">
          <div className="cart-content">
            <p className="category-name">{item.category.categoryName}</p>
          </div>
          <div className="product-image-div">
            <div className="blob">
              <img
                className="product-category-image"
                src={item.category.categoryImage}
                alt=""
              />
              <img className="arrow" src={arrow} alt="" />
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-category {
    background-color: #fff;
    margin: 0 0.9rem;
    border-radius: 1rem;
    padding: 3rem 0 1rem 3rem;
    height: 15rem;
    font-weight: 700;
    font-size: 1.8rem;
    letter-spacing: 0.05rem;
    border: none;
    display: grid;
    grid-template-column: 1fr 10rem;
    box-shadow: 0 1px 5px rgb(0 0 0 / 15%);
    cursor: pointer;
    transition: all 0.5s;
    overflow: hidden;
    position: relative;
  }

  .cart-content {
    min-width: 100%;
    display: block;
    grid-column: 1/2;
  }

  .product-image-div {
    grid-column: 2/3;
    position: relative;

    .blob {
      width: 0rem;
      .product-category-image {
        position: absolute;
        width: 12.8rem;
        height: 14rem;
        right: 0;
        top: -2rem;
        mask-image: url(https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/image_preview_card/blob.svg);
        object-fit: cover;
        background-color: #f5f5f5;
      }
      .arrow {
        position: absolute;
        right: -2rem;
        top: 7.5rem;
      }
    }
  }
`;
