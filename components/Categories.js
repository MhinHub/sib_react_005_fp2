import Image from "next/image";
import React from "react";
import Link from "next/link"

export const categories = [
  {
    id: 1,
    name: "Men's Clothing",
    image: "/static/man-cloth.png",
  },
  {
    id: 2,
    name: "Woman's Clothing",
    image: "/static/woman-cloth.png",
  },
  {
    id: 3,
    name: "Jewelery",
    image: "/static/jewelery.png",
  },
  {
    id: 4,
    name: "Electronics",
    image: "/static/electronic.png",
  },
];

export default function Categories() {
  return (
    <div className="flex flex-col items-center my-14">
      <h1 className="text-4xl font-medium">CATEGORIES</h1>
      <div className="flex flex-wrap justify-center">
        <div className="flex justify-center whitespace-nowrap items-center gap-x-10">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center m-4">
              <h2 className="text-xl font-medium">{category.name}</h2>
              <Link href="/products">
                <Image
                  className="lg:w-20 sm:w-16"
                  alt="category"
                  src={category.image}
                  width={80}
                  height={80}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
