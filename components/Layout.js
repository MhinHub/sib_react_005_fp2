import React from "react";
import Head from "next/head";
import Nav from "./Nav";
import CartUser from "./CartUser";

export default function layout({ title, children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{`${title} | Harimart`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Harimart is best of the best best online shopping website"
        />
      </Head>
      <main>
        {children}
        <CartUser />
        {/* Coba jangka pendek jika semua halaman dimasukkan component ini */}
      </main>
    </>
  );
}