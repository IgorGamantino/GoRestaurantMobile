import React from "react";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { SubTitle } from "../components/SubTitle";

export function Home() {
  return (
    <>
      <Header />
      <Search placeholder="Qual comida você procura?" />
      <SubTitle size={20} paddingLeft={24}>Categorias</SubTitle>


    </>
  )
}