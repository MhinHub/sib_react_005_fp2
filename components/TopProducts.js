import CardItem from "./CardItem";
import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initiateProducts } from "../context/products-slice";
import { getProducts } from "../pages/api/index";

// metode fetching data getStaticProps() hanya bisa dilakukan di pages, tidak secara langsung di components

export default function TopProducts({ products }) {
  const dispatch = useDispatch();
  const { firstRender } = useSelector((state) => state.data);
  if (firstRender) dispatch(initiateProducts(products));

  // console.log("products", products);

  return (
    <div className="my-8">
      <h2 className="ml-8 text-4xl font-medium">TOP 3 BESTSELLER</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 -mr-px my-8">
        {products.slice(0, 3).map((product, id) => (
          <CardItem key={id} dataProduct={product} />
        ))}
      </div>
      <Link
        href={"/products"}
        className="ml-8 h-12 w-48 bg-black text-white text-center text-lg p-3 px-32 items-center font-base rounded-none"
      >
        See More
      </Link>
    </div>
  );
}
