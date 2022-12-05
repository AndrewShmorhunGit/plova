import styled from "styled-components";
import { useAppDispatch } from "../hooks/redux";
import { IMenu, IProducts } from "../modules/modules";
import { menusSlice } from "../store/slices/menuSlice";
import { ProductsCategory } from "./ProductsCategory";
import { SingleProduct } from "./SingleProduct";

export const Products = ({
  selectedCategory,
  menu,
  loading,
  getCurrentSubMenu,
}: {
  selectedCategory: string | null;
  menu: IMenu;
  loading: boolean;
  getCurrentSubMenu: (categoryName: string | undefined) => IProducts[];
}) => {
  const dispatch = useAppDispatch();
  return (
    <Wrapper>
      <main>
        {selectedCategory !== null && (
          <h3 className="category-title__name">{selectedCategory}</h3>
        )}
        <div
          className="products"
          style={{
            margin: `${
              selectedCategory === null ? "5.4rem 0 0 -0rem" : "2rem 0 0 -0rem"
            }`,
            rowGap: `${selectedCategory === null ? "1rem" : "0rem "}`,
          }}
        >
          {selectedCategory === null
            ? menu.menu.map((item, index) => {
                return (
                  <div
                    onClick={() =>
                      dispatch(
                        menusSlice.actions.selectCategory(
                          item.category.categoryName
                        )
                      )
                    }
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
                return <SingleProduct product={product} loading={loading} />;
              })}
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .product-body {
    max-width: 156rem;
    height: auto;
    display: grid;
    grid-template-columns: 0.5fr 4.25fr 1.5fr;
    grid-template-rows: auto 1fr;
    column-gap: 1rem;
    row-gap: 1.6rem;
    height: auto;
  }

  .products {
    max-width: 95rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    font-weight: 700;
  }

  .category-title__name {
    transform: translate(1rem, 1rem);
    font-size: 2rem;
  }
`;
