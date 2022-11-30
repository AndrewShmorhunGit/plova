import { useLocation } from "react-router-dom";
import { Header, BrandGrid } from "../components/index";
import { getSlugFromLocation } from "../units/functions";

export function BrandPage() {
  const location = useLocation();

  const slug = getSlugFromLocation(location);

  return (
    <>
      <Header />
      <BrandGrid />
    </>
  );
}
