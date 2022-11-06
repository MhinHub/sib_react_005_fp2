import Image from "next/image";
import React from "react";

export const categories = [
  {
    id: 1,
    name: "Man's Clothing",
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
        <div className="flex justify-center items-center gap-x-10">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center m-4">
              <h2 className="text-xl font-medium">{category.name}</h2>
              <Image
                className="w-20"
                alt="category"
                src={category.image}
                width={80}
                height={80}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
