import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Footer,
  //  NavBar
} from "./components";
import {
  BrandPage,
  CategoryPage,
  HomePage,
  ErrorPage,
  SearchPage,
  CreditCardPage,
  CooperationPage,
} from "./pages";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <NavBar /> */}
        {/* <SideBar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brand/*" element={<BrandPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/path-to-direction" element={<SearchPage />} />
          <Route path="/card" element={<CreditCardPage />} />
          <Route path="/join" element={<CooperationPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
