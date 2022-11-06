import { GrTrash } from "react-icons/gr";
import Image from "next/image";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteCart } from "../context/products-slice";

// import CardItem from "./CardItem";

export default function CartUser() {
  const { cart } = useSelector((state) => state.products);
  console.table("cart ", cart, cart.length);

  const dispatch = useDispatch();
  const [isOverStock, setIsOverStock] = useState(false);
  const [setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    dataCart.forEach((item) => {
      total += item.price * item.cartQuantity;
      isOverStock = item.isOverStock || isOverStock;
    });
    setTotalPrice(total);
  }, [dataCart]);

  function handleDelete() {
    dispatch(deleteCart(dataCart.id));
  }

  function handleQuantity(e) {
    dispatch(updateStock({ idx: dataCart.idx, quantity: e.target.value }));
  }

  function handleAddCart() {
    dispatch(addCart({ cartData: cart, qty: 1, isCart: false }));
  }

  function handleMinusCart() {
    dispatch(addCart({ cartData: cart, qty: -1, isCart: false }));
  }

  return (
    <>
      <input type="checkbox" id="cart-modal" className="modal-toggle" />
      <label className="modal" htmlFor="cart-modal">
        <section className="modal-box font-mono m-12 overflow-x-hidden w-11/12 max-w-5xl flex flex-col">
          <h1 className="text-5xl font-bold justify-self-start mb-5">
            My Cart
          </h1>
          <br />
          <div className="flex flex-col">{/* Items */}</div>
        </section>
      </label>
    </>
  );
}
