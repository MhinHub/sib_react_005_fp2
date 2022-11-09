import { GrTrash } from "react-icons/gr";
import Image from "next/image";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteCart } from "../context/products-slice";

export default function CartItem() {
  const dataCart = useSelector((state) => state.data.cart);

  // dataCart.map((data) => {
  //   console.log(data);
  // });

  const dispatch = useDispatch();
  let isOverStock = false;
  const [setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
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

  function handleAddCart(e) {
    e.preventDefault();
    dispatch(addCart({ cartData: cart, qty: 1, isCart: false }));
  }

  function handleMinusCart(e) {
    e.preventDefault();
    dispatch(addCart({ cartData: cart, qty: -1, isCart: false }));
  }

  if (dataCart.length >= 1) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            {dataCart.map((data) => {
              return (
                <>
                  <Image src={data.image} width={200} height={200} />
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-medium">{data.title}</h2>
                    <h2 className="text-2xl font-medium">${data.price}</h2>
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
                        min="1"
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
                </>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl text-center font-medium">Your cart is empty</h1>
      </div>
    );
  }
}

//   return (
//     <div className="flex font-mono mb-4 pb-4 justify-center border-b border-solid border-black">
//       <Image src={dataCart.image} alt="Cart image" width={120} height={160} />
//       <div className="flex flex-col justify-between ml-4 py-6">
//         <div>
//           <h2 className="font-medium text-lg w-4/5">{dataCart.title}</h2>
//           <p className="bg-stone-200 px-2 py-0 h-fit w-fit text-sm text-gray-700">
//             {dataCart.category}
//           </p>
//         </div>
//         <div>
//           <button
//             onClick={handleMinusCart}
//             className="bg-black text-white px-2 w-8 h-8 text-2xl"
//           >
//             -
//           </button>
//           <span className="px-4">{dataCart.cartQuantity}</span>
//           <button
//             onClick={handleAddCart}
//             className="bg-black text-white px-2 w-8 h-8 text-2xl"
//           >
//             +
//           </button>
//         </div>
//       </div>
//       <div className="flex flex-col justify-between items-end ml-4 py-6">
//         <button onClick={handleDelete}>
//           <GrTrash size={20} />
//         </button>
//         <p className="font-bold text-xl">{dataCart.price}</p>
//       </div>
//     </div>
//   );
// }
