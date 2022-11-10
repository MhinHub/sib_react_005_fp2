import { BsFillCartFill } from "react-icons/bs";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Nav() {
  const { cart } = useSelector((state) => state.data);

  const [txtBtnAccount, setTxtBtnAccount] = useState("Login");
  const [txtSales, setTxtSales] = useState(null);
  const [isBtnAccountClicked, setIsBtnAccountClicked] = useState(false);
  const [showCart, setShowCart] = useState(true);
  const [txtUpdateCart, setTxtUpdateCart] = useState(null);

  const authenticate = JSON.parse(localStorage.getItem("auth"));

  function handleLabelClick() {
    setIsBtnAccountClicked(!isBtnAccountClicked);
  }

  useEffect(() => {
    if (!authenticate) {
      return;
    } else {
      if (authenticate.role === "admin") {
        setTxtBtnAccount("Admin");
        setTxtSales("Sales Recaps");
        setTxtUpdateCart("Update Cart");
        setShowCart(false);
      } else if (authenticate.role === "user") {
        setTxtBtnAccount("User");
      }
    }
  }, [authenticate]);

  return (
    <nav
      id="home"
      className="flex bg-white sticky z-40 border-y border-black justify-between px-8 items-center overflow-hidden top-0"
    >
      <Link className="flex items-center" href="/#home">
        <span className="w-14 font-light text-7xl">#</span>
        <h1 className="font-medium text-6xl">Hashop</h1>
      </Link>
      <div className="flex items-center">
        <Link className="mx-4" href="/admin">
          {txtUpdateCart}
        </Link>
        <Link className="mx-4" href="/Sales">
          {txtSales}
        </Link>
        {showCart && (
          <label
            className="flex justify-end mx-4 cursor-pointer"
            htmlFor={`cart-modal`}
          >
            <span className="absolute text-white p-px px-1 h-fit w-fit justify-items-center items-center bg-red-700 rounded-full text-xs font-bold">
              {cart.length}
            </span>
            <BsFillCartFill size={30} />
          </label>
        )}
        <label
          onClick={handleLabelClick}
          className="h-12 w-24 bg-black text-white text-center p-3 items-center font-medium rounded-none"
          htmlFor="login-modal"
        >
          {/* <Link
          className="h-12 w-24 bg-black text-white text-center p-3 items-center font-medium rounded-none"
          href={`account`}
        > */}
          {txtBtnAccount}
          {/* </Link> */}
        </label>
      </div>
    </nav>
  );
}

export default Nav;
