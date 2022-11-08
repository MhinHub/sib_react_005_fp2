import CartUser from "../components/CartUser";
import Categories from "../components/Categories";
import HeroProduct from "../components/HeroProduct";
import Nav from "../components/Nav";
import TopProducts from "../components/TopProducts";
import WelcomeSection from "../components/WelcomeSection";
import Layout from "../components/Layout";
import { getProducts } from "./api";

import React from "react";
import Link from "next/link";
import Head from "next/head";

export async function getStaticProps() {
  const { data } = await getProducts();
  return {
    props: {
      products: data?.map((product) => ({
        ...product,
        stock: 10,
      })),
    },
  };
}

export default function Index({ products }) {
  return (
    <Layout title="Home">
      <WelcomeSection />
      <Nav />
      <Categories />
      <TopProducts products={products} />
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
    </Layout>
  );
}
