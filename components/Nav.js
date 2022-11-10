import { BsFillCartFill } from "react-icons/bs";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function Nav({ account }) {
  const { cart } = useSelector((state) => state.data);
  return (
    <nav
      id="home"
      className="flex bg-white sticky z-40 border-y border-black justify-between px-8 items-center overflow-hidden top-0"
    >
      <Link className="flex items-center" href="/#home">
        <span className="w-14 font-light text-7xl">#</span>
        <h1 className="font-medium text-6xl">Haffmart</h1>
      </Link>
      <div className="flex items-center">
        <label className="flex justify-end mx-4 cursor-pointer" htmlFor="login-modal">Login</label>
        {/* <Link href="/admin">Admin</Link> */}
        <label className="flex justify-end mx-4 cursor-pointer" htmlFor={`cart-modal`}>
          <span className="absolute text-white p-px px-1 h-fit w-fit justify-items-center items-center bg-red-700 rounded-full text-xs font-bold">
            {cart.length}
          </span>
          <BsFillCartFill size={30} />
        </label>
        <Link
          className="h-12 w-24 bg-black text-white text-center p-3 items-center font-medium rounded-none"
          href={`account`}
        >
          {(account = "Account")}
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
