import { useDispatch } from "react-redux";
import { updateStock } from "../../context/products-slice";
import Image from "next/image";

export default function StockAdmin({ stock, setStock }) {
  const dispatch = useDispatch();

  const handleChange = (quantity, stock, id, idx) => {
    const data = [...stock];
    const product = { ...stock[idx] };
    const dataFilter = data.filter((item) => item.id !== id);

    quantity
      ? (product.stock = parseInt(quantity))
      : (product.stock = quantity);

    dataFilter.push(product);
    dataFilter.sort((a, b) => a.id - b.id || a.name.localeCompare(b.name)); // sort by id or name
    setStock(dataFilter);
  };

  const handleUpdateStock = (stock, idx) => {
    dispatch(updateStock({ stock: stock[idx].stock, idx }));
    alert("Stock has been updated");
  };

  return (
    <div className="flex justify-center font-mono">
      <table className="table-zebra w-11/12 mx-12 my-20">
        <thead className="border border-solid border-black">
          <tr>
            <th className="px-4 py-2 text-lg"></th>
            <th className="px-4 py-2 text-lg">Products</th>
            <th className="px-4 py-2 text-lg">Stock</th>
            <th className="px-4 py-2 text-lg">Action</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((item, idx) => (
            <tr key={idx}>
              <td className="border-b border-black">
                <Image
                  className="object-cover self-center"
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                />
              </td>
              <td className="border-b border-black">
                <div className="flex-col content-between items-center justify-between p-10">
                  <h2 className="font-medium text-lg w-full">{item.title}</h2>
                  <span className="bg-stone-200 px-2 py-0 h-fit w-fit text-sm text-gray-700">
                    {item.category}
                  </span>
                  <p className="font-normal leading-5 text-sm w-full">
                    {item.description}
                  </p>
                </div>
              </td>
              <td className="border-b border-black">
                <input
                  // id={item.id}
                  type="number"
                  className="text-center font-bold active:outline h-10 text-2xl w-32 mx-10"
                  value={item.stock}
                  min={0}
                  onChange={(e) =>
                    handleChange(e.target.value, stock, item.id, idx)
                  }
                />
              </td>
              <td className="border-b border-black">
                <button
                  onClick={() => handleUpdateStock(stock, idx)}
                  className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Apply
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
