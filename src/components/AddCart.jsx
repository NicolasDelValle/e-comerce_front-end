import "./css/AddCart.css";
import { useDispatch } from "react-redux";
import actions from "../redux/actions/cartActions";

function AddCart({ product, quantity }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actions.addToCart({ ...product, quantity }));
  };

  return (
    <>
      <button
        className="my-2 btn bg-black text-white w-auto rounded-pill"
        onClick={handleClick}
        title="Agregar al carrito"
      >
        <p className="p-0 m-0"> Agregar al carrito</p>
      </button>
    </>
  );
}

export default AddCart;
