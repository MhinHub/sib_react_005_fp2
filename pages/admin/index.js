import React from "react";
import StockAdmin from "../../components/StockAdmin";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Nav from "../../components/Nav";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function admin() {
  const { products } = useSelector((state) => state.data);
  const [stockItem, setStockItem] = useState([...products]);

  const auth = JSON.parse(localStorage.getItem("auth"));

  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      alert("You must login first");
    } else {
      alert("You must login as admin");
      auth.role !== "admin" && router.push("/");
    }
  }, []);

  return (
    <>
      {auth && auth.role === "admin" ? (
        <Layout title="Stock - Admin">
          <Nav />
          <StockAdmin stock={stockItem} setStock={setStockItem} />
        </Layout>
      ) : (
        <h1 className="grid text-5xl font-bold text-center animate-pulse self-center place-self-center mt-96">Redirect to Home</h1>
      )}
    </>
  );
}
