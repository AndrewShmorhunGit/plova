import styled from "styled-components";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { IMenu } from "../modules/modules";
import { menusSlice } from "../store/slices/menuSlice";
// import { goToMenuStart } from "../units/functions";
import squares from "../images/menu/squares.svg";

export const Sections = ({
  menu,
  selectedCategory,
}: {
  menu: IMenu;
  selectedCategory: string | null;
}) => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <main className="main-container">
        <div
          className="sections center"
          onClick={() => dispatch(menusSlice.actions.unselectCategory())}
        >
          <img src={squares} alt="" />
          <h3 className="sections-title">sections</h3>
        </div>
        {menu.menu.map((item, index) => {
          return (
            <div
              key={index}
              className="menu-container"
              onClick={
                () =>
                  dispatch(
                    menusSlice.actions.selectCategory(
                      item.category.categoryName
                    )
                  )
                // && goToMenuStart()
              }
            >
              <p className="menu">
                {selectedCategory === item.category.categoryName ? (
                  <span>{item.category.categoryName}</span>
                ) : (
                  item.category.categoryName
                )}
              </p>
            </div>
          );
        })}
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .main-container {
    height: auto;
  }

  .sections {
    padding: 1.6rem;
    margin-left: -6rem;
    text-transform: capitalize;
    color: #00a082;
    font-size: 1.2rem;
    cursor: pointer;
    max-height: 4rem;
    gap: 0.5rem;
  }

  .squares {
    height: 1.2rem;
    width: 1.3rem;
    margin-right: 0.4rem;
  }

  .menu-container {
    display: flex;
    border-bottom: solid 1px #e7e7e7;
    cursor: pointer;
  }

  .menu {
    padding: 1.8rem 0rem 1.8rem 2.3rem;
    display: flex;
    text-transform: capitalize;
    font-weight: 400;
    color: #3a3a3a;
    font-size: 1.4rem;
  }

  @media (max-width: 40.625em) {
    .main-container {
      display: none;
    }
  }
`;
