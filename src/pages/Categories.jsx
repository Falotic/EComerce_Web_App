import "../components/Proud/ProudProducts.css";
import CategoriesHeader from "../components/Header/CategoriesHeader";
import { Outlet } from "react-router";

function Categories() {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
    </>
  );
}

export default Categories;
