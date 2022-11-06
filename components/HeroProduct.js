import React from "react";
import Image from "next/image";

function TxtSide({ title, desc, txtBtn }) {
  return (
    <div className="flex flex-col w-2/5 justify-center">
      <h2 className="text-4xl font-bold">{title || "Title"}</h2>
      <p className="text-xl font-mono my-3">{desc || "Description"}</p>
      <button className="bg-black text-white px-4 py-2 rounded-none mt-4">
        {txtBtn || "Text Button"}
      </button>
    </div>
  );
}

function ImgSide() {
  return (
    <div className="flex w-1/2 justify-center">
      <Image
        src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
        alt="product hero"
        className="w-60"
        loading="lazy"
        width={300}
        height={300}
      />
    </div>
  );
}

export default function HeroProduct({ side }) {
  return (
    <div className="flex justify-around border-t border-solid border-black px-10 py-12 mt-16">
      {side === true ? (
        <>
          <TxtSide />
          <ImgSide />
        </>
      ) : (
        <>
          <ImgSide />
          <TxtSide />
        </>
      )}
    </div>
  );
}
