import { useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../redux/actions/cartActions";

export const CheckOutItem = ({
  url,
  price,
  mountProp,
  name,
  stock,
  productId,
}) => {
  return (
    <div className="d-flex flex-row align-items-center w-100 mb-1">
      <div className="w-100 me-1 ps-2">
        <div className="w-100 d-flex flex-row align-items-start">
          <span className="w-75 fs-6 fw-light text-start overflow-hidden">
            <span className="fw-bold me-1">{mountProp}x</span>
            {name}
          </span>
          <span className="ms-auto fs-6 fw-bold fw-light">
            ${Number(price) * Number(mountProp)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckOutItem;
