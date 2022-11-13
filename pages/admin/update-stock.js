import React from "react";
import StockAdmin from "../../components/admin/StockAdmin";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Nav from "../../components/Nav";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function admin() {
  const { products } = useSelector((state) => state.data);
  const [stockItem, setStockItem] = useState([...products]);

  const authenticate = JSON.parse(localStorage.getItem("auth"));

  const router = useRouter();

  const isAdmin = authenticate && authenticate.role === "admin";
  const isUser = authenticate && authenticate.role === "user";

  useEffect(() => {
    if (!authenticate || isUser || !isAdmin) {
      alert("You must login as admin");
      router.push("/");
    }
  }, [authenticate]);

  return (
    <>
      {isAdmin ? (
        <Layout title="Stock - Admin">
          <Nav />
          <StockAdmin stock={stockItem} setStock={setStockItem} />
        </Layout>
      ) : (
        <h1 className="grid text-5xl font-bold text-center animate-pulse self-center place-self-center mt-60">
          Redirect to Home
        </h1>
      )}
    </>
  );
}
