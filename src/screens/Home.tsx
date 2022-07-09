import React from "react";
import { CardCategories } from "../components/CardCategories";
import { CardProduct } from "../components/CardProduct";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { SubTitle } from "../components/SubTitle";


export function Home() {
  return (
    <>
      <Header />
      <Search placeholder="Qual comida você procura?" />
      <SubTitle size={20} paddingLeft={24}>Categorias</SubTitle>
      <CardCategories />
      <SubTitle size={20} paddingLeft={24}>Pratos</SubTitle>
      <CardProduct />
    </>
  )
}