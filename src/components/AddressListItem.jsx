import React from "react";

export const Component = ({
  id,
  name,
  state,
  city,
  adress,
  number,
  postalCode,
}) => {
  return (
    <div className="w-100 d-flex flex-row border rounded-3  mb-2 ps-3">
      <div className="w-100">
        <div className="w-100 d-flex flex-column justify-content-center align-items-start ">
          <div className="d-flex flex-row w-100">
            <span className="fw-bold fs-6 me-auto">{name}</span>
            <button className="m-1 rounded-circle border-0 bg-transparent d-flex justify-content-center align-items-start fw-bold ">
              <i className="bi bi-x-lg p-0 m-0"></i>
            </button>
          </div>
          <div className="d-flex flex-row align-items-start me-auto my-1">
            <span className="fw-light pe-1 text-start">
              {`${adress} ${number} - ${state}, ${city} - ${postalCode}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
