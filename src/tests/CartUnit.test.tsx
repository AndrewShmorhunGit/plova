import { CartUnit } from "../components/CartUnit";
import { renderWithProviders } from "./utils/test-utils";
import * as reduxHooks from "react-redux";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import { useAppDispatch } from "../hooks/useAppDispatch";

// import { testUseAppSelector } from "./utils/test-app-selector";
// import * as actions from "../store/slices/cartSlice";
// import { useAppSelector } from "../hooks/useAppDispatch";

const fakeOrder = { amount: 5, name: "Spaghetti", price: 6.2 };
jest.mock("react-redux");
const mockDispatch = jest.spyOn(reduxHooks, "useDispatch");

describe("CartUnit", () => {
  beforeEach(() => {
    // useAppSelector.mockImplementation(testUseAppSelector);
    // useAppDispatch.mockImplementation(() => jest.fn);
  });
  afterEach(() => jest.clearAllMocks);

  it("create snapshot", () => {
    mockDispatch.mockReturnValue(jest.fn());
    renderWithProviders(
      <CartUnit singleOrder={fakeOrder} slug={"anyRestaurant"} />
    );

    const component = (
      <CartUnit singleOrder={fakeOrder} slug={"anyRestaurant"} />
    );
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

  it("should call dispatch", () => {
    render(<CartUnit singleOrder={fakeOrder} slug={"anyRestaurant"} />);

    const increment = screen.getByRole("increase", { name: /plus in circle/i });

    userEvent.click(increment);

    expect(mockDispatch).toHaveBeenCalled();
  });

  it("check component increment and decrement amount in position", () => {
    render(<CartUnit singleOrder={fakeOrder} slug={"anyRestaurant"} />);
    const dispatch = jest.fn;
    mockDispatch.mockReturnValue(dispatch);

    const increment = screen.getByRole("increase", { name: /plus in circle/i });
    const decrement = screen.getByRole("decrease", {
      name: /minus in circle/i,
    });
    const amount = screen.getByRole("amount");
    userEvent.click(increment);
    expect(amount).toHaveTextContent("x6");
    userEvent.click(decrement);
    expect(amount).toHaveTextContent("x5");
  });
});
