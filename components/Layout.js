import React from "react";
import Head from "next/head";
import Nav from "./Nav";
import CartUser from "./modal/CartUser";
import Footer from "./Footer";
import ProductDetail from "./modal/ProductDetail";
import Login from "./modal/Login";

export default function layout({ title, children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{`${title} | Hashop`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <Login />
        {children}
        <CartUser />
        <ProductDetail />
        <Footer />
      </main>
    </>
  );
}
