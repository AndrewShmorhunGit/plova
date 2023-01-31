import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components";
import {
  BrandPage,
  CategoryPage,
  HomePage,
  ErrorPage,
  // SearchPage,
  CreditCardPage,
  // CooperationPage,
  OrderPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="brand/:brandSlug" element={<BrandPage />} />
        <Route path="category" element={<CategoryPage />} />
        {/* <Route path="/path-to-direction" element={<SearchPage />} /> */}
        <Route path="card" element={<CreditCardPage />} />
        {/* <Route path="/join" element={<CooperationPage />} /> */}
        <Route path="order/*" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
