import CardItem from "../components/CardItem";
import Cart from "../components/Cart";
import Categories from "../components/Categories";
import HeroProduct from "../components/HeroProduct";
import Link from "next/link";
import Nav from "../components/Nav";
import React from "react";
import TopProducts from "../components/TopProducts";
import WelcomeSection from "../components/WelcomeSection";

export default function Page() {
  return (
    <>
      <WelcomeSection />
      <Nav />
      <Cart />
      <Categories />
      <TopProducts />
      <HeroProduct />
      <HeroProduct />
      <HeroProduct />
      <HeroProduct />

      {/* <h1>Home</h1>
                <Link href="/account">
                    Login
                </Link>
                <Link href="/cart">
                    Cart
                </Link> */}
      {/* <div className="grid grid-cols-3 w-screen my-8">
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                </div> */}
      {/* <Cart /> */}
    </>
  );
}
