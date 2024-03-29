import { RegistrationModal } from "../components";
import { rest } from "msw";
import { setupServer } from "msw/node";
// import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "./utils/test-utils";

export const handlers = [
  rest.post("/api/user", (req, res, ctx) => {
    return res(ctx.json("John Smith"), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("fetches & receives a user after clicking the fetch user button", async () => {
  renderWithProviders(<RegistrationModal />);

  // should show no user initially, and not be fetching a user
  // expect(screen.getByText(/no user/i)).toBeInTheDocument();
  // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();

  // // after clicking the 'Fetch user' button, it should now show that it is fetching the user
  // fireEvent.click(screen.getByRole("button", { name: /Fetch user/i }));
  // expect(screen.getByText(/no user/i)).toBeInTheDocument();

  // // after some time, the user should be received
  // expect(await screen.findByText(/John Smith/i)).toBeInTheDocument();
  // expect(screen.queryByText(/no user/i)).not.toBeInTheDocument();
  // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();
});
