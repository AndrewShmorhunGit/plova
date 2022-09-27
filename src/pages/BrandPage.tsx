import { Link } from "react-router-dom";
import {
  Header,
  Sections,
  Cart,
  Products,
  InputHeader,
} from "../components/index";

export function BrandPage() {
  const val: boolean = true;

  return (
    <>
      {val ? (
        <>
          <Header />
        </>
      ) : (
        <InputHeader />
      )}
      <Sections />
      <Products />
      <Cart />
      <Link to="/">Back Home</Link>
    </>
  );
}
