import React from "react";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import "./checkOut.css";

function CheckOut() {
  return (
  <>
  <NavigationBar />
  <div className="checkout-main-container">
    <div className="checkout-main-header">
      <h1>MI CARRITO</h1>
    </div>
    <div className="checkout-main-content">
      <div className="checkout-main-product">
        <div className="checkout-main-product-img" style={{backgroundImage : `url("https://cdn.shopify.com/s/files/1/0427/7095/6453/products/XBOX-SKATEBOARD-100391-Bottom-MF_a1d979f8-01d9-488f-970b-716f63302139.png?v=1631547186")`}}>
        </div>
        <div className="checkout-main-product-body">
          <div className="checkout-main-product-details">
            <h6>Tabla RF1968-2013</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis ricardo fort el comandante usaba este skate pariatur unde possimus aliquid. Nisi veritatis expedita sed ea soluta optio velit laboriosam, accusantium, assumenda id temporibus illo doloribus earum.</p>
          </div>
          <div className="checkout-main-product-options">
            <div className="checkout-main-product-options-quantity">
              <i class="bi bi-plus checkout-icon"></i>
              <input type="number" className="checkout-main-product-options-quantity-input"/>
              <i class="bi bi-dash checkout-icon"></i>
            </div>
            <div className="checkout-main-product-options-delete">
              <i class="bi bi-trash checkout-icon"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-main-product">
        <div className="checkout-main-product-img" style={{backgroundImage : `url("https://cdn.shopify.com/s/files/1/0427/7095/6453/products/XBOX-SKATEBOARD-100391-Bottom-MF_a1d979f8-01d9-488f-970b-716f63302139.png?v=1631547186")`}}>
        </div>
        <div className="checkout-main-product-body">
          <div className="checkout-main-product-details">
            <h6>Tabla RF1968-2013</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis pariatur unde possimus aliquid. Nisi si estás leyendo esto marcus te debe un chivito pero nunca te va a llegar veritatis expedita sed ea soluta optio velit laboriosam, accusantium, assumenda id temporibus illo doloribus earum.</p>
          </div>
          <div className="checkout-main-product-options">
            <div className="checkout-main-product-options-quantity">
              <i class="bi bi-plus checkout-icon"></i>
              <input type="number" className="checkout-main-product-options-quantity-input"/>
              <i class="bi bi-dash checkout-icon"></i>
            </div>
            <div className="checkout-main-product-options-delete">
              <i class="bi bi-trash checkout-icon"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-main-product">
        <div className="checkout-main-product-img" style={{backgroundImage : `url("https://cdn.shopify.com/s/files/1/0427/7095/6453/products/XBOX-SKATEBOARD-100391-Bottom-MF_a1d979f8-01d9-488f-970b-716f63302139.png?v=1631547186")`}}>
        </div>
        <div className="checkout-main-product-body">
          <div className="checkout-main-product-details">
            <h6>Tabla RF1968-2013</h6>
            <p>Lorem ipsum dolor tengo hambre sit amet consectetur adipisicing elit. Ea officiis pariatur unde possimus aliquid. Nisi veritatis expedita sed ea soluta optio velit laboriosam, accusantium, assumenda id temporibus illo doloribus earum.</p>
          </div>
          <div className="checkout-main-product-options">
            <div className="checkout-main-product-options-quantity">
              <i class="bi bi-plus checkout-icon"></i>
              <input type="number" className="checkout-main-product-options-quantity-input"/>
              <i class="bi bi-dash checkout-icon"></i>
            </div>
            <div className="checkout-main-product-options-delete">
              <i class="bi bi-trash checkout-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="checkout-main-purchase">
      <h3 className="checkout-main-purchase-title">OPCIONES DE COMPRA</h3>
    </div>
  </div>
  {/* <Footer /> */}
  </>
);
}

export default CheckOut;