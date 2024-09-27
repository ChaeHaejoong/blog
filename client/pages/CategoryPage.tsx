import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Search from "../components/Search";
import CategoryCntnr from "../components/CategoryCntnr";

export default function CategoryPage() {

  const [categoryList, setCategoryList] = useState();

  useEffect(() => {

  }, []);

  return (
    <>
      <Nav></Nav>
      <Search></Search>
      <CategoryCntnr></CategoryCntnr>
    </>
  )
}