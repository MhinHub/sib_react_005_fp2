import { BsCartPlus, BsStar, BsCartCheckFill } from "react-icons/bs";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addCart } from "../context/products-slice";

export default function CardItem({ dataProduct }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.data);

  const [isAddCart, setIsAddCart] = useState(false);

  function isAddedCart(data) {
    const isProductFound = cart.some((item) => {
      if (item.id === data.id) {
        return true;
      }
      return false;
    });

    return isProductFound;
  }

  function handleAddCart(dataProduct) {
    setIsAddCart(!isAddCart);
    dispatch(addCart({ cartData: dataProduct, qty: 1, isCart: false }));
  }

  return (
    <article className="grid font-mono box-border border content-between max-h-fit border-solid border-black ml-[-1px] mb-[-1px] bg-stone-50 px-6 py-4">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="w-auto font-base pr-8">{dataProduct?.title}</p>
          <p className="bg-stone-200 px-2 py-0 h-fit w-fit text-sm text-gray-700">
            {dataProduct?.category}
          </p>
        </div>
        <p className="flex bg-slate-300 px-2 py-0 h-fit w-fit">
          ${`${dataProduct?.price.toFixed(2)}`}
        </p>
      </div>
      <Image
        className="justify-self-center px-10 w-4/5 my-4"
        src={dataProduct?.image}
        alt="random image"
        // placeholder="blur"
        // blurDataURL={dataProduct?.image}
        loading="lazy"
        width={300}
        height={300}
      />
      <div className="flex bottom-0 justify-between px-2">
        <div className="grid place-items-center">
          <span className="absolute pt-1 text-sm font-medium">
            {dataProduct?.rating.rate.toFixed()}
          </span>
          <BsStar size={30} />
        </div>
        <button onClick={() => handleAddCart(dataProduct)}>
          {isAddedCart(dataProduct) ? (
            <BsCartCheckFill className="self-center" size={30} />
          ) : (
            <BsCartPlus className="self-center" size={30} />
          )}
        </button>
      </div>
    </article>
  );
}
