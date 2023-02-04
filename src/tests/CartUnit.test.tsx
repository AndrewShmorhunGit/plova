import { screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { CartUnit } from "../components/CartUnit";
import { renderWithProviders } from "./utils/test-utils";

test("cartUnit display all parameters", async () => {
  renderWithProviders(
    <CartUnit
      singleOrder={{ amount: 1, name: "position", price: 10 }}
      slug={"anyRestaurant"}
    />
  );

  // const increment = screen.getByRole("increase", { name: /plus in circle/i });

  // const decrement = screen.getByRole("decrease", { name: /minus in circle/i });
  const position = screen.getByRole("position-name");
  const amount = screen.getByRole("amount");
  const price = screen.getByRole("total-price");
  expect(price).toHaveTextContent("10,00$");
  expect(amount).toHaveTextContent("x1");
  expect(position).toHaveTextContent("position");
});
