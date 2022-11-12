import { BsFillCartFill } from "react-icons/bs";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { BsBagDashFill } from "react-icons/bs";
import { FaReceipt } from "react-icons/fa";

function Nav() {
  const { cart } = useSelector((state) => state.data);

  const [txtBtnAccount, setTxtBtnAccount] = useState("Login");
  const [isBtnAccountClicked, setIsBtnAccountClicked] = useState(false);
  const [showCart, setShowCart] = useState(true);
  const [salesIcon, setSalesIcon] = useState(null);
  const [updateStockIcon, setUpdateStockIcon] = useState(null);

  const authenticate = JSON.parse(localStorage.getItem("auth"));

  function handleLabelClick() {
    setIsBtnAccountClicked(!isBtnAccountClicked);
  }

  useEffect(() => {
    if (!authenticate) {
      setShowCart(false);
      return;
    } else {
      if (authenticate.role === "admin") {
        setTxtBtnAccount("Admin");
        setSalesIcon(<FaReceipt size={30} />);
        setUpdateStockIcon(<BsBagDashFill size={30} />);
        setShowCart(false);
      } else if (authenticate.role === "user") {
        setShowCart(true);
        setTxtBtnAccount("User");
      }
    }
  }, [!authenticate]);

  return (
    <nav
      id="home"
      className="flex bg-white sticky z-40 border-y border-black justify-between w-screen lg:px-8 pr-0 pl-2 items-center overflow-hidden top-0"
    >
      <Link className="flex items-center" href="/#home">
        <span className="w-14 font-light md:text-6xl text-5xl lg:text-7xl">
          #
        </span>
        <h1 className="font-medium lg:text-6xl md:text-4xl text-2xl">Hashop</h1>
      </Link>
      <div className="flex lg:items-center items-end">
        <Link className="lg:mx-4 mx-2" href="/admin/update-stock">
          {updateStockIcon}
        </Link>
        <Link className="lg:mx-4 mx-2" href="/admin/sales-recap">
          {salesIcon}
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
          className="h-12 w-24 bg-black ml-4 text-white text-center p-3 items-center font-medium rounded-none"
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
