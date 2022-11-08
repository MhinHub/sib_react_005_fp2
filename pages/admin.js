import React from "react";
import StockAdmin from "../components/StockAdmin";
import { useState } from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";

export default function admin() {
  const { products } = useSelector((state) => state.data);
  const [stockItem, setStockItem] = useState([...products]);

  return (
    <Layout title="Stock - Admin">
      <Nav />
      <StockAdmin stock={stockItem} setStock={setStockItem} />
    </Layout>
  );
}
