import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";

export default function about() {
  return (
    <Layout title={"About Dev"}>
      <Nav />
      <h1 className="text-center text-4xl font-bold my-10">About</h1>
      <div className="flex justify-center">
        <iframe
          src="https://trello.com/b/B6jRcl3z.html"
          width="80%"
          height="600"
        />
      </div>
    </Layout>
  );
}
