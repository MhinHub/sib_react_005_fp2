import React from "react";
import Image from "next/image";

function TxtSide({ title, desc, txtBtn }) {
  return (
    <div className="flex flex-col lg:w-2/5 justify-center">
      <h2 className="text-4xl font-bold">{title || "Title"}</h2>
      <p className="text-base font-mono my-3">{desc || "Description"}</p>
      <button className="bg-black text-white px-4 py-2 rounded-none mt-4">
        {txtBtn || "Text Button"}
      </button>
    </div>
  );
}

function ImgSide({ src }) {
  return (
    <div className="flex w-1/2 self-center justify-center">
      <Image
        src={src}
        alt="product hero"
        className="w-60"
        loading="lazy"
        width={300}
        height={300}
      />
    </div>
  );
}

export default function HeroProduct({ side, title, desc, txtBtn, src }) {
  return (
    <div className="flex lg:flex-row flex-col justify-around border-t border-solid border-black px-10 py-12 mt-16 bg-white">
      {side === true ? (
        <>
          <TxtSide title={title} desc={desc} txtBtn={txtBtn} />
          <ImgSide src={src} />
        </>
      ) : (
        <>
          <ImgSide src={src} />
          <TxtSide title={title} desc={desc} txtBtn={txtBtn} />
        </>
      )}
    </div>
  );
}
