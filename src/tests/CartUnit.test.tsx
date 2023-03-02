import { CartUnit } from "../components/CartUnit";
import { renderWithProviders } from "./utils/test-utils";
import * as reduxHooks from "react-redux";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

const fakeOrder = { amount: 5, name: "Spaghetti", price: 6.2 };
jest.mock("react-redux");
const mockDispatch = jest.spyOn(reduxHooks, "useDispatch");

describe("CartUnit", () => {
  beforeEach(() => {});
  afterEach(() => jest.clearAllMocks);

  it("create snapshot", () => {
    mockDispatch.mockReturnValue(jest.fn());
    const component = (
      <CartUnit singleOrder={fakeOrder} slug={"anyRestaurant"} />
    );
    renderWithProviders(component, {
      // preloadedState: {
      //   carts: {
      //     carts: {
      //       anyRestaurant: {
      //         order: [fakeOrder],
      //       },
      //     },
      //   },
      // },
    });

    expect(component).toMatchSnapshot();
  });

  it("component display all parameters", () => {
    // renderWithProviders(
    //   <CartUnit singleOrder={fakeOrder} slug={"anyRestaurant"} />
    // );

    render(<CartUnit singleOrder={fakeOrder} slug={"anyRestaurant"} />);

    const price = screen.getByRole("price");
    const position = screen.getByRole("position");
    const amount = screen.getByRole("amount");
    expect(price).toHaveTextContent("31,00$");
    expect(position).toHaveTextContent("Spaghetti");
    expect(amount).toHaveTextContent("x5");
  });

  /* it("should call dispatch", () => {
    render(<CartUnit singleOrder={fakeOrder} slug={"anyRestaurant"} />);

    const increment = screen.getByRole("increase", { name: /plus in circle/i });

    userEvent.click(increment);

    expect(mockDispatch).toHaveBeenCalled();
  });

  it("check component increment and decrement amount in position", () => {
    const component = (
      <CartUnit singleOrder={fakeOrder} slug={"anyRestaurant"} />
    );
    const result = renderWithProviders(component, {
      preloadedState: {
        carts: {
          carts: {
            anyRestaurant: {
              order: [fakeOrder],
            },
          },
        },
      },
    });
    const dispatch = jest.fn;
    mockDispatch.mockReturnValue(dispatch);

    // const mockedIncreaseValue = jest.spyOn(
    //   { changeCartAmount },
    //   "changeCartAmount"
    // );

    // result.debug();
    // const increase = store.dispatch(
    //   changeCartAmount({
    //     slug: "anyRestaurant",
    //     name: "Spaghetti",
    //     operation: "inc",
    //   })
    // );
    const incrementBtn = screen.getByRole("increase");
    const decrementBtn = screen.getByRole("decrease", {
      name: /minus in circle/i,
    });
    const amount = screen.getByRole("amount");
    userEvent.click(incrementBtn);
    expect(amount).toHaveTextContent("x6");
    userEvent.click(decrementBtn);
    expect(amount).toHaveTextContent("x5");
  });*/
});
