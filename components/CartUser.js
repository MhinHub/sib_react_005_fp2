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
          <div className="flex flex-col">
            {dataCart.length >= 1 ? (
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    {dataCart.map((data) => {
                      <>
                        <Image src={data.image} width={200} height={200} />
                        <div className="flex flex-col justify-center items-center">
                          <h2 className="text-2xl font-medium">{data.title}</h2>
                          <h2 className="text-2xl font-medium">
                            ${data.price}
                          </h2>
                          <div className="flex flex-row justify-center items-center">
                            <button
                              className="bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center"
                              onClick={handleMinusCart}
                            >
                              -
                            </button>
                            <input
                              className="w-8 h-8 text-center"
                              type="number"
                              value={data.cartQuantity}
                              onChange={handleQuantity}
                            />
                            <button
                              className="bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center"
                              onClick={handleAddCart}
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="bg-red-500 rounded-full w-8 h-8 flex justify-center items-center"
                            onClick={handleDelete}
                          >
                            <GrTrash />
                          </button>
                        </div>
                      </>;
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl text-center font-medium">
                  Your cart is empty
                </h1>
              </div>
            )}
          </div>
        </section>
      </label>
    </>
  );
}
