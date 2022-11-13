import React from 'react'
import SalesAdmin from "../../components/admin/SalesAdmin";
import Layout from "../../components/Layout";
import Nav from "../../components/Nav";

export default function Sales() {
  return (
    <Layout title={"Sales - Admin"}>
      <Nav />
      <SalesAdmin />
    </Layout>
  );
}
