import React from 'react'
import SalesAdmin from "../../components/SalesAdmin";
import Layout from "../../components/Layout";
import Nav from "../../components/Nav";

export default function Sales() {
  return (
    <Layout title={"Sales - Admin"}>
      <Nav />
      <h1 className="font-bold text-center text-2xl mt-12">Sales Recap</h1>
      <SalesAdmin />
    </Layout>
  );
}
