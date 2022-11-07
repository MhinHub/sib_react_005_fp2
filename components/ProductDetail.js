import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../context/products-slice";
import { getProductDetail } from "../pages/api";

export default function ProductDetail({ product }) {
  const dispatch = useDispatch();
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
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Stock: {product.stock}</p>
      <p>Price: {product.price}</p>
      <button onClick={() => handleMinusCart(product)}>-</button>
      <input type="number" value={value} />
      <button onClick={() => handlePlusCart(product)}>+</button>
    </div>
  );
}
