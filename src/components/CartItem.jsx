import React from "react";

export const CartItem = (props) => {
  return (
    <div className="checkout-main-product">
      <div
        className="checkout-main-product-img"
        style={{
          backgroundImage: `url("https://cdn.shopify.com/s/files/1/0427/7095/6453/products/XBOX-SKATEBOARD-100391-Bottom-MF_a1d979f8-01d9-488f-970b-716f63302139.png?v=1631547186")`,
        }}
      ></div>
      <div className="checkout-main-product-body">
        <div className="checkout-main-product-details">
          <div className="checkout-main-product-details-title">
            <h4>Tabla RF1968-2013</h4>
            <div className="checkout-main-product-options-delete">
              <button>
                <i className="bi bi-x checkout-icon-delete"></i>
              </button>
            </div>
          </div>
          <div className="checkout-main-product-details-body">
            <div className="checkout-main-product-options">
              <div className="checkout-main-product-options-quantity">
                <button>
                  <i className="bi bi-plus checkout-icon-quantity"></i>
                </button>
                <input
                  type="number"
                  className="checkout-main-product-options-quantity-input"
                />

                <button>
                  <i className="bi bi-dash checkout-icon-quantity"></i>
                </button>
              </div>
              <div className="checkout-main-product-options-price">
                <small>$25000</small>
                <h6>$50000</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
