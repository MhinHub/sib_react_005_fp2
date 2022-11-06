import { GrTrash } from "react-icons/gr";
import Image from "next/image";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteCart } from "../context/products-slice";

// import CardItem from "./CardItem";

export default function CartUser() {
  // const { cart } = useSelector((state) => state.products);
  // console.table("cart ", cart, cart.length);

  const dataCart = useSelector((state) => state.products.cart);
  dataCart.map((data) => {
    console.table(data);
  });

  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  let isOverStock = false;
  let total = 0;

  useEffect(() => {
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
          {dataCart.length >= 1 ? (
            <div className="flex flex-col">
              {dataCart.map((data) => {
                return (
                  <div className="flex font-mono mb-4 pb-4 justify-between border-b border-solid border-black">
                    <Image
                      src={data.image}
                      alt="Cart image"
                      width={120}
                      height={160}
                    />
                    <div className="flex flex-col justify-between ml-4 py-6">
                      <div>
                        <h2 className="font-medium text-lg w-4/5">
                          {data.title}
                        </h2>
                        <p className="bg-stone-200 px-2 py-0 h-fit w-fit text-sm text-gray-700">
                          {data.category}
                        </p>
                      </div>
                      <div>
                        <button
                          onClick={handleMinusCart}
                          className="bg-black text-white px-2 w-8 h-8 text-2xl"
                        >
                          -
                        </button>
                        <span className="px-4">{data.cartQuantity}</span>
                        <button
                          onClick={handleAddCart}
                          className="bg-black text-white px-2 w-8 h-8 text-2xl"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col justify-around items-end ml-4 py-6">
                      <button onClick={handleDelete}>
                        <GrTrash size={20} />
                      </button>
                      <p className="font-bold text-xl">${data.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl text-center font-medium">
                Your cart is empty
              </h1>
            </div>
          )}
        </section>
      </label>
    </>
  );
}
