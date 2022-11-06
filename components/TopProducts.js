import CardItem from "./CardItem";
import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initiateProducts } from "../context/products-slice";
import { getProducts } from "../pages/api/index";

// export async function getStaticProps() {
//   const { data } = await getProducts();
//   return {
//     props: {
//       products: data,
//     },
//   };
// }

export default function TopProducts() {
  const dispatch = useDispatch();
  const { firstRender, products } = useSelector((state) => state.products);
  if (firstRender) dispatch(initiateProducts(products));

  return (
    <div className="my-8">
      <h2 className="ml-8 text-4xl font-medium">TOP 3 BESTSELLER</h2>
      <div className="grid grid-cols-3 -mr-px my-8">
        {products.slice(0, 3).map((product, id) => (
          <CardItem key={id} dataProduct={product} />
        ))}
      </div>
      <div className="ml-8 h-12 w-48 bg-black text-white text-center text-lg p-3 items-center font-base rounded-none">
        <Link href={"/products"}>See More</Link>
      </div>
    </div>
  );
}
