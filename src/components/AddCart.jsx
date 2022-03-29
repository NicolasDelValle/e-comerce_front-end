import { useState } from "react";
import "./css/AddCart.css";

function AddCart() {
  const [addCart, setAddCart] = useState(false);
  return (
    <>
      <button
        className="my-2 btn bg-black text-white w-auto rounded-pill"
        onClick={() => {}}
        title="Agregar al carrito"
      >
        <p className="p-0 m-0"> Agregar al carrito</p>
      </button>
    </>
  );
}

export default AddCart;
