import { useState } from "react";
import "./css/AddCart.css";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions/cartActions";

function AddCart({ product, quantity }) {
  const dispatch = useDispatch();
  const productToAdd = useState({ product, quantity });

  const handleClick = () => {
    dispatch(actions.addToCart(productToAdd));
    console.log();
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
