import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../context/products-slice";
import { useRouter } from "next/router";
import Nav from "../../components/Nav";
import Layout from "../../components/Layout";
import Image from "next/image";
import { BsCartFill, BsStarFill } from "react-icons/bs";

export default function ProductDetail() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.data);

  const router = useRouter();
  const { slug } = router.query;
  const product = products.find((item) => item.id === parseInt(slug));

  // Get the value of an Input field
  const [value, setValue] = useState(1);

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
    handleChange(data, value);
  };

  const handleMinusCart = (data) => {
    if (value > 0) {
      setValue(value - 1);
      handleChange(data, value);
    }
  };

  function handleAddCart(data) {
    dispatch(addCart({ cartData: data, qty: value, isCart: false }));
  }

  return (
    <Layout title={"Detail Product"}>
      <Nav />
      <section className="font-mono">
        <h1 className="mt-8 mb-4 text-center text-2xl font-semibold ">
          Detail Product
        </h1>
        <div className="flex flex-col lg:flex-row justify-center mx-auto w-4/5 self-center justify-self-center">
          <div className="flex flex-col items-center w-full">
            <Image
              className="p-5"
              src={product.image}
              alt={product.title}
              width={280}
              height={360}
            />
            <div className="flex justify-center items-center">
              <BsStarFill />
              <span>{` ${product.rating.rate} (${product.rating.count})`}</span>
            </div>
          </div>
          <div className="flex flex-col align-middle justify-center">
            <p className="font-semibold text-xl">{product.title}</p>
            <p>{product.description}</p>
            <p className="bg-stone-200 px-2 py-0 h-fit w-fit font-bold text-sm text-gray-700">
              {product?.category}
            </p>
            <div className="flex justify-between my-2">
              <div>
                <button
                  onClick={() => handleMinusCart(product)}
                  className={`bg-black text-white px-2 w-8 h-8 text-2xl`}
                >
                  -
                </button>
                <input
                  type="text"
                  name="qty"
                  className="font-medium w-10 mx-1 overflow-hidden text-black text-center border-none"
                  value={value}
                  min={1}
                  onChange={(e) => handleChange(product, e.target.value)}
                />
                <button
                  onClick={() => handlePlusCart(product)}
                  className={`text-white px-2 w-8 h-8 text-2xl bg-black`}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end p-4">
              <p className="font-semibold text-slate-800 text-base">
                {`$${product.price.toFixed(2)}/pcs`}
              </p>
              <p className="font-bold text-2xl">
                Total ${(product.price * value).toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => handleAddCart(product)}
              className="flex w-full h-12 bg-black gap-x-4 text-center justify-center items-center text-white font-semibold"
            >
              <BsCartFill />
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
