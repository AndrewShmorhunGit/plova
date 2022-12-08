import styled from "styled-components";
import { Menu } from "../modules/modules";

export const ProductsCategory: React.FC<{
  item: Menu;
  loading: boolean;
}> = ({ item, loading }) => {
  return (
    <Wrapper>
      <main>
        <div className="product-category">
          <p className="category-name">{item.category.categoryName}</p>
          <div className="product-image-div">
            <img
              className="product-category-image"
              src={item.category.categoryImage}
              alt=""
            />
            <svg
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="82"
              height="60"
              fill="none"
              preserveAspectRatio="xMinYMid"
            >
              <path
                fill="#fff"
                d="M61.94 13.668v24.46a8 8 0 01-8 8H19.152c-.1-1.02-.15-2.055-.15-3.101 0-17.397 14.103-31.5 31.5-31.5 4.034 0 7.892.758 11.438 2.14z"
              />
              <path
                fill="#292929"
                fillRule="evenodd"
                d="M42.463 25.216a1.02 1.02 0 011.471 0l4.384 4.513c.63.648.63 1.698 0 2.347l-4.383 4.512a1.02 1.02 0 01-1.472 0 1.094 1.094 0 010-1.514l3.004-3.093H38.12c-.578 0-1.047-.483-1.047-1.079s.469-1.079 1.047-1.079h7.346l-3.004-3.092a1.094 1.094 0 010-1.515z"
                clipRule="evenodd"
              />
            </svg>
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
    position: relative;
    box-shadow: 0 1px 5px rgb(0 0 0 / 15%);
    cursor: pointer;
    transition: all 0.5s;
    overflow: hidden;
  }

  .product-image-div {
    position: absolute;
    left: 0.5rem;

    .product-category-image {
      position: absolute;
      width: 12.8rem;
      height: 14rem;
      left: 31rem;
      top: -4rem;
      mask-image: url(https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/image_preview_card/blob.svg);
      object-fit: cover;
      background-color: #f5f5f5;
    }

    .arrow {
      position: absolute;
      top: 5.4rem;
      left: 37rem;
      z-index: 5;
    }
  }
`;
