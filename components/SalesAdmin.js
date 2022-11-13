import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function SalesAdmin() {
  const { checkout } = useSelector((state) => state.data);

  let total = 0;

  if (checkout.length >= 1) {
      return (
        <>
              <h1 className="font-bold text-center text-2xl mt-12">Sales Recap</h1>
      <table className="table-zebra w-11/12 mx-12 my-6">
        <thead className="border border-solid border-black">
          <tr>
            <th className="px-4 py-2"></th>
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Sold</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {checkout.map((item) => {
            total += item.sold * item.price;
            return (
              <tr key={item.id} className="font-medium">
                <td className="border-b border-black">
                  <Image
                    className="object-cover self-center p-5"
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={250}
                  />
                </td>
                <td className="border-b border-black">
                  <div className="flex-col content-between items-center justify-between p-10">
                    <h2 className="font-medium text-lg w-full">{item.title}</h2>
                    <span className="bg-stone-200 px-2 py-0 h-fit w-fit text-sm text-gray-700">
                      {item.category}
                    </span>
                  </div>
                </td>
                <td className="border-b border-black text-center">
                  ${item.price.toFixed(2)}
                </td>
                <td className="border-b border-black text-center">
                  {item.sold}
                </td>
                <td className="border-b border-black text-center">
                  ${(item.sold * item.price).toFixed(2)}
                </td>
              </tr>
            );
          })}
          <tr className="font-bold text-xl text-center">
            <td className="border-b border-black py-5" colSpan={4}>
              Total Sales
            </td>
            <td className="border-b border-black">${total.toFixed(2)}</td>
          </tr>
        </tbody>
              </table>
              </>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-full">
        <h1 className="font-bold text-center my-52 text-6xl">No Sales</h1>
      </div>
    );
  }
}
