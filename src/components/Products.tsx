import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { IMenu, IProducts } from "../modules/modules";
import { menusSlice } from "../store/slices/menuSlice";
import { goToMenuStart } from "../units/functions";
import { ProductsCategory } from "./ProductsCategory";
import { SingleProduct } from "./SingleProduct";
import arrowBack from "../images/design/arrowBack.svg";

export const Products = ({
  selectedCategory,
  menu,
  loading,
}: {
  selectedCategory: string | null;
  menu: IMenu;
  loading: boolean;
}) => {
  const dispatch = useAppDispatch();
  const getCurrentSubMenu = (categoryName: string): IProducts[] => {
    const currentCategory = menu.menu.find(
      (item) => item.category.categoryName === categoryName
    );

    if (currentCategory === undefined) {
      throw new Error(
        "Sorry, something went wrong, currentCategory is undefined"
      );
    }
    return currentCategory.products;
  };

  useEffect(() => goToMenuStart(), [selectedCategory]);
  return (
    <Wrapper>
      <main>
        {selectedCategory && (
          <>
            <div
              className="brand-hidden"
              onClick={() => {
                dispatch(menusSlice.actions.unselectCategory());
              }}
            >
              <img src={arrowBack} alt="arrow left" />
              <h3 className="brand-name">{menu.brandName}</h3>
            </div>
            <h3 className="category-title__name">{selectedCategory}</h3>
          </>
        )}
        <div
          className="products"
          style={{
            margin: `${
              !selectedCategory ? "5.4rem 0 0 -0rem" : "2rem 0 0 -0rem"
            }`,
            rowGap: `${!selectedCategory ? "1rem" : "0rem "}`,
          }}
        >
          {!selectedCategory
            ? menu?.menu.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      dispatch(
                        menusSlice.actions.selectCategory(
                          item.category.categoryName
                        )
                      );
                    }}
                  >
                    <ProductsCategory
                      key={index}
                      item={item}
                      loading={loading}
                    />
                  </div>
                );
              })
            : getCurrentSubMenu(selectedCategory).map((product, index) => {
                return (
                  <SingleProduct
                    key={index}
                    product={product}
                    loading={loading}
                  />
                );
              })}
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .products {
    max-width: 95rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    font-weight: 700;
  }
  .brand-hidden {
    display: none;
  }
  .category-title__name {
    transform: translate(1rem, 1rem);
    font-size: 2rem;
  }

  @media (max-width: 91em) {
    .products {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 40.625em) {
    .brand-hidden {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      // color: #00a082;

      .brand-name {
        font-size: 2rem;
        // color: red;
      }
    }
  }
`;
