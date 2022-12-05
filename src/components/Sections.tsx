import styled from "styled-components";
import { useAppDispatch } from "../hooks/redux";
import { IMenu } from "../modules/modules";
import { menusSlice } from "../store/slices/menuSlice";

export const Sections = ({ menu }: { menu: IMenu }) => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <main>
        <div
          className="sections center"
          onClick={() => dispatch(menusSlice.actions.unselectCategory())}
        >
          <img
            className="squares"
            src="https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/sections-square.svg"
            alt="squares"
          />
          <h3 className="sections-title">sections</h3>
        </div>
        {menu.menu.map((item, index) => {
          return (
            <div
              className="menu-container"
              onClick={() =>
                dispatch(
                  menusSlice.actions.selectCategory(item.category.categoryName)
                )
              }
            >
              <p className="menu">{item.category.categoryName}</p>
            </div>
          );
        })}
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .sections {
    display: flex;
    padding: 1.6rem;
    margin-left: -6rem;
    text-transform: capitalize;
    color: #00a082;
    font-size: 1.2rem;
    cursor: pointer;
    height: auto;
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
`;
