import React from "react";
import StockAdmin from "../components/StockAdmin";
import { useState } from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import { getProducts } from "./api";

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

export default function admin({ products }) {
  const [stockItem, setStockItem] = useState([...products]);

  return (
    <Layout title="Stock - Admin">
      <Nav />
      <StockAdmin stock={stockItem} setStock={setStockItem} />
    </Layout>
  );
}
