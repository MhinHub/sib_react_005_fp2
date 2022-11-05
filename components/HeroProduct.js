import React from 'react'

export default function HeroProduct() {
    return (
      <div className="flex justify-between border-t border-solid border-black p-10 mt-16">
        <div className="flex flex-col w-2/5 justify-center">
          <h1 className="text-4xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </h1>
          <p className="text-xl font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
          <button className="bg-slate-300 px-4 py-2 rounded-lg mt-4">
            Shop Now
          </button>
        </div>
        <div className="flex p-10 w-1/2 justify-center">
          <img
            src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
            alt="product hero"
            className="w-60"
          />
        </div>
      </div>
    );
}
