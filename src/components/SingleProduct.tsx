import { useState } from "react";
import styled from "styled-components";
import { showDollarPrice } from "../units/functions";
import { SingleProductModal } from "./modals/SingleProductModal";

export interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  bonus: string;
  modifiers: string;
}

export const SingleProduct: React.FC<{
  product: Product;
  loading: boolean;
}> = ({ product, loading }) => {
  const [showModalProduct, setShowModalProduct] = useState(false);

  return (
    <Wrapper>
      <main
        className="single-product"
        onClick={() => setShowModalProduct(!showModalProduct)}
      >
        <div className="sp-div1">
          <div
            className="single-product-image"
            style={{ backgroundImage: `url(${product.image})` }}
          ></div>
          <div>
            <h4 className="single-product-name">{product.name}</h4>
            <p className="single-product-description">
              {`${
                product.description.length < 90
                  ? product.description
                  : product.description.slice(0, 90) + "..."
              }`}
            </p>
          </div>
        </div>
        <div className="sp-div2">
          <div>
            <p className="single-product-price">
              {showDollarPrice(product.price)} $
            </p>
          </div>
          <div className="single-product-plus">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              fill="none"
            >
              <circle cx="12.059" cy="12" r="12" fill="#E9F8F5" />
              <path
                fill="#00A082"
                d="M12.059 6.2a1 1 0 01.993.884l.007.116V11h3.8a1 1 0 01.993.884l.007.116a1 1 0 01-.884.993L16.86 13h-3.8v3.8a1 1 0 01-.884.994l-.116.006a1 1 0 01-.993-.883l-.007-.117V13h-3.8a1 1 0 01-.993-.883L6.259 12a1 1 0 01.883-.993L7.26 11h3.8V7.2a1 1 0 01.883-.993l.117-.007z"
              />
            </svg>
          </div>
        </div>
      </main>
      {showModalProduct && (
        <SingleProductModal
          setShowModalProduct={setShowModalProduct}
          product={product}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .single-product {
    min-height: 16rem;
    margin: 1rem 1rem;
    padding: 1.6rem 1rem 0rem 1.6rem;
    background-color: #fff;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    text-transform: none;
    cursor: pointer;
    transition: all 0.5s;
    border: 1px solid #e7e7e7;
  }

  .single-product:hover {
    transform: scale(1.025);
  }

  .sp-div1 {
    display: flex;
    gap: 2rem;
  }

  .sp-div2 {
    display: flex;
    justify-content: space-between;
    padding-top: 2.8rem;
  }

  .single-product-image {
    display: block;
    background-position: center;
    background-size: cover;
    border-radius: 1rem;
    min-height: 9rem;
    min-width: 9rem;
  }

  .single-product-name {
    padding-bottom: 1rem;
    font-size: 1.6rem;
    font-weight: 500;
  }

  .single-product-description {
    font-size: 1.4rem;
    font-weight: 400;
  }

  .single-product-price {
    position: absolute;
  }
  .single-product-plus {
    transform: translateY(-0.8rem);
  }

  @media (max-width: 30em) {
    .single-product {
      min-height: auto;
    }
  }
`;
