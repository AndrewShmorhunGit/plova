import { Link } from "react-router-dom";
import { Header, BrandGrid, InputHeader } from "../components/index";

export function BrandPage() {
  // const val: boolean = true;

  return (
    <>
      <Header />
      <InputHeader />
      <BrandGrid />
      <Link to="/">Back Home</Link>
    </>
  );
}
