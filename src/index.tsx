import { Provider } from "react-redux";
import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";
// import * as Sentry from "@sentry/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { setupStore } from "./store";

export const store = setupStore();

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById("root")
// );

// Sentry.init({
//   dsn: "https://<key>@sentry.io/<project>",
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
