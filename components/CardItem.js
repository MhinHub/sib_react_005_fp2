import {
  BsCartPlus,
  BsStar,
  BsCartCheckFill,
  BsStarFill,
} from "react-icons/bs";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addCart } from "../context/products-slice";
import Link from "next/link";

export default function CardItem({ dataProduct }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.data);

  const [isAddCart, setIsAddCart] = useState(false);

  const auth = JSON.parse(localStorage.getItem("auth"));
  // alert base on auth role
  const alertCart = () => {
    if (!auth) {
      alert("You must login first");
    } else if (auth.role === "admin") {
      alert("You're admin, must login as user");
    }
  };

  function isAddedCart(data) {
    const isProductFound = cart.some((item) => {
      if (item.id === data.id && auth) {
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
          <p className="w-auto font-base leading-5 pr-8">
            {dataProduct?.title}
          </p>
          <p className="bg-stone-200 px-2 py-0 h-fit w-fit text-sm text-gray-700">
            {dataProduct?.category}
          </p>
        </div>
        <p className="flex bg-slate-300 px-2 py-0 h-fit w-fit">
          ${`${dataProduct?.price.toFixed(2)}`}
        </p>
      </div>
      <label htmlFor="modal-product">
        {/* <Link href={{ pathname: "/detail/[slug]", query: { slug: dataProduct?.id } }}> */}
        {/* Link to : detail/product?id=1 */}
        {/* <Link href={`/detail?product=${dataProduct?.id}`}> */}
        <label htmlFor={`card-modal`} className="cursor-pointer">
          <Image
            className="flex mx-auto justify-self-center px-10 w-4/5 my-4"
            src={dataProduct?.image}
            alt="random image"
            // placeholder="blur"
            // blurDataURL={dataProduct?.image}
            loading="lazy"
            width={300}
            height={300}
          />
        </label>
        {/* </Link> */}
      </label>
      <div className="flex bottom-0 justify-between px-2 min-h-max">
        <div className="grid place-items-center">
          <span className="absolute pt-1 text-sm font-semibold">
            {dataProduct?.rating.rate.toFixed()}
          </span>
          <BsStarFill className="text-slate-300" size={30} />
        </div>
        <button onClick={() => (handleAddCart(dataProduct), alertCart())}>
          {auth?.role === "user" && isAddedCart(dataProduct) ? (
            <span
              className="tooltip tooltip-left tooltip-open"
              data-tip="Added to cart"
            >
              <BsCartCheckFill className="self-center" size={30} />
            </span>
          ) : (
            <BsCartPlus className="self-center" size={30} />
          )}
        </button>
      </div>
    </article>
  );
}
