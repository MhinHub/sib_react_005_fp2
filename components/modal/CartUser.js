import { GrTrash } from "react-icons/gr";
import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteCart, addCart, addCheckout } from "../../context/products-slice";

import { BsFillBagCheckFill } from "react-icons/bs";

// import CardItem from "./CardItem";

export default function CartUser() {
  // const { cart } = useSelector((state) => state.data);
  // console.table("cart ", cart, cart.length);

  const dataCart = useSelector((state) => state.data.cart);
  // dataCart.map((data) => {
  //   console.table(data);
  // });

  const dispatch = useDispatch();

  let isOverStock = false;

  useEffect(() => {
    dataCart.forEach((item) => {
      isOverStock = item.isOverStock || isOverStock;
    });
  }, [dataCart]);

  // handle delete based on id
  function handleDelete(data) {
    dispatch(deleteCart(data));
  }

  // handle checkout
  function handleCheckout(data) {
    dispatch(addCheckout(data));
    alert("Checkout Success");
  }

  // function handleQuantity(e) {
  //   dispatch(updateStock({ idx: dataCart.idx, quantity: e.target.value }));
  // }

  // Get the value of an Input field
  const [value, setValue] = useState(0);

  function handleChange(data, value) {
    dispatch(
      addCart({
        cartData: data,
        qty: value,
        isCart: true,
      })
    );
  }

  const handlePlusCart = (data) => {
    setValue(value + 1);
    handleChange(data, value + 1);
  };

  const handleMinusCart = (data) => {
    if (value > 0) {
      setValue(value - 1);
      handleChange(data, value - 1);
    }
  };

  return (
    <>
      <input type="checkbox" id="cart-modal" className="modal-toggle" />
      <label className="modal modal-middle" htmlFor="cart-modal">
        <label
          htmlFor=""
          className="modal-box relative font-mono m-12 overflow-x-hidden w-11/12 max-w-5xl flex flex-col"
        >
          <h1 className="text-5xl text-center font-bold justify-self-start mb-5">
            My Cart
          </h1>
          <br />
          {dataCart.length >= 1 ? (
            <div className="flex flex-col overflow-x-scroll no-scrollbar">
              {dataCart.map((data) => {
                return (
                  <div className="flex flex-row justify-between items-center mb-5">
                    <div
                      key={data.id}
                      className="flex font-mono my-4 pb-4 overflow-x-scroll max-w-max w-max lg:justify-between border-b border-solid border-black"
                    >
                      <div className="flex px-10">
                        <Image
                          src={data.image}
                          alt="Cart image"
                          width={120}
                          height={160}
                          loading="lazy"
                        />
                        <div className="flex flex-col justify-start lg:justify-between ml-4 py-6 pb-4">
                          <div>
                            <h2 className="lg:font-medium lg:text-lg font-normal lg:leading-5 text-base w-min lg:w-96">
                              {data.title}
                            </h2>
                            <p className="bg-stone-200 px-2 py-0 h-fit w-fit text-sm text-gray-700">
                              {data.category}
                            </p>
                          </div>
                          {data.isOverStock ? (
                            <p className="text-red-500 text-sm">
                              Max {data?.stock} items, please reduce the order
                              quantity
                            </p>
                          ) : null}
                          <div>
                            <button
                              onClick={() => handleMinusCart(data)}
                              className={`bg-black text-white px-2 w-8 h-8 text-2xl`}
                            >
                              -
                            </button>
                            <input
                              type="text"
                              name="qty"
                              className="font-medium w-10 overflow-hidden text-center"
                              value={data.cartQuantity}
                              onChange={(e) =>
                                handleChange(data, e.target.value)
                              }
                            />
                            <button
                              onClick={() => handlePlusCart(data)}
                              className={`${
                                data.isOverStock ? "bg-gray-300" : "bg-black"
                              } text-white px-2 w-8 h-8 text-2xl`}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between items-end ml-4 py-6">
                        <button onClick={() => handleDelete(data)}>
                          <GrTrash size={20} />
                        </button>
                        <p className="font-medium text-gray-700 text-base">
                          ${data.price.toFixed(2)}/pcs
                        </p>
                        <p className="font-bold text-2xl">
                          ${(data.price * data.cartQuantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <aside className="flex flex-col float-right absolute right-2 rounded-sm bg-gray-200 justify-between items-end px-2 py-6">
                <p>Total All Product Prices</p>
                <p className="font-bold text-2xl">
                  $
                  {dataCart
                    .reduce((acc, item) => {
                      return acc + item.price * item.cartQuantity;
                    }, 0)
                    .toFixed(2)}
                </p>
                <button
                  onClick={handleCheckout}
                  className="bg-black w-full font-medium text-lg justify-center text-white items-center flex px-4 py-2 rounded-md"
                >
                  <BsFillBagCheckFill className="mr-2" size={20} />
                  Checkout
                </button>
              </aside>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl text-center font-medium">
                Your cart is empty
              </h1>
            </div>
          )}
        </label>
      </label>
    </>
  );
}
