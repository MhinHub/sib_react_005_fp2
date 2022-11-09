// import CartUser from "../components/modal/CartUser";
import Categories from "../components/Categories";
import HeroProduct from "../components/HeroProduct";
import Nav from "../components/Nav";
import TopProducts from "../components/TopProducts";
import WelcomeSection from "../components/WelcomeSection";
import Layout from "../components/Layout";
import { getProducts } from "./api";
import ProductDetail from "../components/modal/ProductDetail_";

import Detail from "./detail/[slug]";

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
      <Link href="/admin">Admin</Link>
      <Nav />
      <Categories />
      <TopProducts products={products} />
      <HeroProduct
        side
        title={"Be Gentle Men"}
        desc={
          "Fashion is not only for women, fashion is also very closely related to men and seems to have become a necessity. Therefore, Harimart also seeks to answer this men's fashion needs by offering best shoes for you "
        }
        src={"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"}
        txtBtn={"Shop Now"}
      />
      <HeroProduct
        title={"Don't act like Angle"}
        desc={
          "Women's and fashion is very closely related to women and seems to have become a basic need. Therefore, Harimart also seeks to answer"
        }
        src={"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"}
        txtBtn={"Discover Now"}
      />
      <HeroProduct
        side
        title={"Wanna be a Queen or show off to your Ex?"}
        desc={
          "In this life you will look more interesting with something sparkling"
        }
        src={"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"}
        txtBtn={"Check Now"}
      />
      <HeroProduct
        title={"1 More to be Cool"}
        desc={
          "Enjoy your life with something that makes you look cool and easier to do your activities"
        }
        src={"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"}
        txtBtn={"Buy Now"}
      />
      {/* <Detail /> */}
    </Layout>
  );
}
