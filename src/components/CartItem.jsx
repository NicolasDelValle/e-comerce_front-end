import React from "react";

export const CartItem = (props) => {
  return (
    <div className="d-flex flex-row align-items-center w-100 mb-3">
      <div
        className="item-image rounded me-2"
        style={{
          backgroundImage:
            "url(https://cybmmybwfbmxasdepuyj.supabase.co/storage/v1/object/public/images/hardware/tornillos.png)",
        }}
      ></div>
      <div className="w-100">
        <div className="w-100 d-flex flex-row align-items-start mb-1">
          <span className="w-75 text-start overflow-hidden">
            NOMBRE RE GOD CON LA PATINETA DE LO DIOSE
          </span>
          <span className="ms-auto fw-bold">$3123123123</span>
        </div>
        <div className="d-flex flex-row align-items-start text-secondary fw-light mb-1">
          <span>
            $12.99<i class="bi bi-x"></i>Unidad
          </span>
        </div>
        <div className="d-flex flex-row align-items-center">
          <div>
            <div className="d-flex flex-row align-items-center rounded-pill border px-2 w-50">
              <button className="text-secondary fs-5 me-1 border-0 rounded-pill bg-white">
                +
              </button>
              <input
                className=" text-center w-50 border-0 border-start-0 border-1 border-secondary"
                type="number"
                value={1}
              />
              <button className="text-secondary fs-5 ms-1 border-0 rounded-pill bg-white">
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
