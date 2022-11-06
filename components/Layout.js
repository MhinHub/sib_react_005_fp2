import React from "react";
import Head from "next/head";

export default function layout(title, children) {
  return (
    <>
      <Head>
        <title>{title || "Harimart"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Harimart is best of the best best online shopping website"
        />
      </Head>
      {children}
    </>
  );
}
