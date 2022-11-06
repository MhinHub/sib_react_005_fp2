import CardItem from "../components/CardItem";
import CartUser from "../components/CartUser";
import Categories from "../components/Categories";
import HeroProduct from "../components/HeroProduct";
import Nav from "../components/Nav";
import TopProducts from "../components/TopProducts";
import WelcomeSection from "../components/WelcomeSection";
import Layout from "../components/Layout";

import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Home | Harimart</title>
      </Head>
      <WelcomeSection />
      <Nav />
      <CartUser />
      <Categories />
      <TopProducts />
      <HeroProduct side />
      <HeroProduct />
      <HeroProduct side />
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
