import { render } from "@testing-library/react";
import { Footer } from "../components/Footer";

// const fakeLinks = [
//   { id: 1, text: "first topic" },
//   { id: 2, text: "second topic" },
//   { id: 3, text: "third topic" },
// ];

test("cartUnit display all parameters", () => {
  const footer = render(<Footer />);
  expect(footer).toMatchSnapshot();
});
