import { GrTrash } from "react-icons/gr";
import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteCart, addCart } from "../../context/products-slice";

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

  function handleDelete(data) {
    dispatch(deleteCart(data));
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

  const inputRef = useRef(null);

  // function handlePlusCart() {
  //   inputRef.current.value++;
  // }

  // function handleMinusCart() {
  //   if (inputRef.current.value > 1) {
  //     inputRef.current.value--;
  //     handleChange(dataCart, inputRef.current.value);
  //   }
  // }

  return (
    <>
      <input type="checkbox" id="cart-modal" className="modal-toggle" />
      <label className="modal" htmlFor="cart-modal">
        <label
          htmlFor=""
          className="modal-box relative font-mono m-12 overflow-x-hidden w-11/12 max-w-5xl flex flex-col"
        >
          <h1 className="text-5xl text-center font-bold justify-self-start mb-5">
            My Cart
          </h1>
          <br />
          {dataCart.length >= 1 ? (
            <div className="flex flex-col">
              {dataCart.map((data, id) => {
                return (
                  <div
                    key={id}
                    className="flex font-mono my-4 pb-4 justify-between border-b border-solid border-black"
                  >
                    <div className="flex px-10">
                      <Image
                        src={data.image}
                        alt="Cart image"
                        width={120}
                        height={160}
                        loading="lazy"
                      />
                      <div className="flex flex-col justify-between ml-4 py-6 pb-4">
                        <div>
                          <h2 className="font-medium text-lg w-full">
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
                            ref={inputRef}
                            type="text"
                            name="qty"
                            className="font-medium w-10 overflow-hidden text-center"
                            value={data.cartQuantity}
                            onChange={(e) => handleChange(data, e.target.value)}
                          />
                          <button
                            onClick={() => handlePlusCart(data)}
                            className={`${data.isOverStock ? "bg-gray-300" : "bg-black"} text-white px-2 w-8 h-8 text-2xl`}
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
        </label>
      </label>
    </>
  );
}
