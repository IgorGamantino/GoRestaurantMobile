import React from "react";
import { Header } from "../components/Header";
import { Search } from "../components/Search";


export function Home() {
  return (
    <>
      <Header />
      <Search placeholder="Qual comida você procura?" />

    </>
  )
}