import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../context/products-slice";
import { useRouter } from "next/router";
import { getProductDetail } from "../../pages/api"
import Link from "next/link";

export default async function ProductDetail({ products }) {
  const dispatch = useDispatch();
  // const [data, setData] = useState(null);
  // const [quantity, setQuantity] = useState(1);
  // const { products } = useSelector((state) => state.data);

  const router = useRouter();
  const { product } = router.query;

  // useEffect(() => {
  //   getProductDetail(product).then((res) => {
  //     setData(res.data);
  //   });
  // }, [product]);

  // menampilkan detail produk berdasarkan id pada product
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    products.map((item) => {
      if (item.id == product) {
        console.log(item.description);
        const { title, description, price, image } = item;
        setTitle(title);
        setPrice(price);
        setDesc(description);
        setImage(image);
      }
    })
  }, [product]);


  console.log("product ", product);
  console.log(price);



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

  // products.map((item) => {
  //   if (item.id == product) {
  return (
    <>
      <input type="checkbox" id="modal-product" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="modal-product"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1>{title}</h1>


          {/* {products.map((item) => {
            if (item.id == product) {
              <h1>{item.title}</h1>
            }
          })} */}


          {/* {data ? (
            <h1>{data.title}</h1>
          ) : (
            <h1>Product not found</h1>
          )
          } */}


          {/* <img src={products.image} alt={products.title} />
          <p>{products.description}</p>
          <p>Stock: {products.stock}</p>
          <p>Price: {products.price}</p>
          <button onClick={() => handleMinusCart(products)}>-</button>
          <input type="number" value={value} />
          <button onClick={() => handlePlusCart(products)}>+</button> */}
        </div>
      </div>
    </>
  );
}
//   });
// }