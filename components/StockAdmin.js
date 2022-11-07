import { useDispatch } from "react-redux";
import { updateStock } from "../../redux/ProductsSlice";

const StockAdmin = ({ product }) => {
  const dispatch = useDispatch();

  const handleStockChange = (e) => {
    dispatch(updateStock({ id: product.id, stock: e.target.value }));
  };

  const handleUpdateStock = () => {
    //Todo: toast info
  };

  return (
    <div>
      <input type="number" value={product.stock} onChange={handleStockChange} />
      <button onClick={handleUpdateStock}>Update</button>
    </div>
  );
};
