import React, { useState, useEffect } from "react";

export const CartItem = ({ url, price, mountProp, name, stock }) => {
  const [mount, setMount] = useState(mountProp);

  const handleIncrement = () => {
    setMount(Number(mount) + 1);
  };
  const handleDecrement = () => {
    Number(mount) === 0 ? setMount(0) : setMount(Number(mount) - 1);
  };

  return (
    <div className="d-flex flex-row align-items-center w-100 mb-3">
      <div
        className="item-image rounded border me-2"
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
      <div className="w-100 me-3 ps-2">
        <div className="w-100 d-flex flex-row align-items-start mb-1">
          <span className="w-75 text-start overflow-hidden">{name}</span>
          <span className="ms-auto fw-bold">
            ${Number(price) * Number(mount)}
          </span>
        </div>
        <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-start text-secondary fw-light mb-1 ">
          <span>
            ${price}
            <i class="bi bi-x"></i>Unidad
          </span>
          <i class="bi bi-dot d-none d-sm-flex"></i>
          <span>{stock} En Stock</span>
        </div>
        <div className="d-flex flex-row align-items-center">
          <div>
            <div className="d-flex flex-row align-items-center rounded-pill border px-2 w-75">
              <button
                onClick={() => handleIncrement()}
                className="text-secondary fs-5 me-1 border-0 rounded-pill bg-white"
              >
                +
              </button>
              <input
                className=" text-center w-75 border-0 border-start-0 border-1 border-secondary"
                type="number"
                value={mount}
              />
              <button
                onClick={() => handleDecrement()}
                className="text-secondary fs-5 ms-1 border-0 rounded-pill bg-white"
              >
                -
              </button>
            </div>
          </div>
          <div className="ms-auto">
            <button className="rounded-pill border d-flex flex-row fw-light text-secondary">
              <i class="bi bi-trash3"></i> <span>Eliminar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
