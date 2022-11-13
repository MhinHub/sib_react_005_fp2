import { useState, useEffect, useRef, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../context/products-slice";
import Image from "next/image";
import { BsCartPlus, BsCartCheckFill, BsStarFill } from "react-icons/bs";
// import { getProductDetail } from "../../pages/api";
import { CardContext } from "../CardItem";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { cart, products } = useSelector((state) => state.data);
  const [isAddCart, setIsAddCart] = useState(false);
  // const [product, setProduct] = useState(null);

  const idForModal = useContext(CardContext);

  // get product using find
  const product = products.find((item) => item.id === idForModal);

  product && console.log("product", product);

  const handleAddCart = (product) => {
    dispatch(addCart(product));
    setIsAddCart(true);
  };

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
      <input type="checkbox" id="card-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="card-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex flex-col">
            <div className="flex justify-center">
              <Image
                className="justify-self-center px-10 w-4/5 my-4"
                src={product?.image || "/image/placeholder.svg"}
                alt="random image"
                // placeholder="blur"
                // blurDataURL={dataProduct?.image}
                loading="lazy"
                width={300}
                height={300}
              />
            </div>
            <div className="flex justify-center">
              <p className="font-base text-center">{product?.title}</p>
            </div>
            <div className="flex justify-center">
              <p className="font-base text-center">{product?.category}</p>
            </div>
            <div className="flex justify-center">
              <p className="font-base text-center">
                ${`${product?.price.toFixed(2)}`}
              </p>
            </div>
            <div className="flex justify-center">
              <p className="font-base text-center">{product?.description}</p>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-row">
                <div className="flex flex-row">
                  <BsStarFill className="text-yellow-400" />
                  <BsStarFill className="text-yellow-400" />
                  <BsStarFill className="text-yellow-400" />
                  <BsStarFill className="text-yellow-400" />
                  <BsStarFill className="text-yellow-400" />
                </div>
                <div className="flex flex-row">
                  <p className="font-base text-center">5.0</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-row">
                <div className="flex flex-row">
                  <p className="font-base text-center">Stock: </p>
                </div>
                <div className="flex flex-row">
                  <p className="font-base text-center">{product?.stock}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-row">
                <div className="flex flex-row">
                  <p className="font-base text-center">Quantity: </p>
                </div>
                <div className="flex flex-row">
                  <button
                    className="btn btn-sm btn-circle"
                    onClick={() => handleMinusCart(product)}
                  >
                    -
                  </button>
                  <p className="font-base text-center">{value}</p>
                  <button
                    className="btn btn-sm btn-circle"
                    onClick={() => handlePlusCart(product)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="btn btn-sm btn-circle"
                onClick={() => handleAddCart(product)}
              >
                {isAddCart ? <BsCartCheckFill /> : <BsCartPlus />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
