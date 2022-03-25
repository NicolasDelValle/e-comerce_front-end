import { useState } from "react";
import "./css/AddCart.css";

function AddCart() {
  const [addCart, setAddCart] = useState(false);
  return (
    <>
      <div
        className="my-2 btn btn-outline-danger w-auto"
        onClick={() => {}}
        title="Agregar al carrito"
      >
        <i className="bi bi-cart3 p-0 m-0"> Add to Cart</i>
      </div>
    </>
  );
}

export default AddCart;
