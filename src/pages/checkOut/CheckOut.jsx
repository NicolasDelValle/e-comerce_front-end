import { Container, Row, Col, Button } from "react-bootstrap";
import NavigationBar from "../../components/NavigationBar";
import CheckOutItem from "../../components/CheckOutItem";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./checkOut.css";
import "./card.css";
import { postOrder } from "../../api/orderApi";
import CardReactFormContainer from "card-react";
function CheckOut() {
  const { cart, user, address } = useSelector((state) => state);
  const subTotalCost = cart.reduce(function (prev, product) {
    return prev + Number(product.price) * product.quantity;
  }, 0);
  const [CCNumber, setCCNumber] = useState("");
  const [CCExpiry, setCCExpiry] = useState("");
  const [CCCvc, setCCCvc] = useState("");
  const [CCName, setCCName] = useState("");
  const [addressSelected, setAddressSelected] = useState();
  const [show, setShow] = useState(false);
  const total = subTotalCost * 1.21;
  const taxes = total - subTotalCost;

  const handlebuy = async () => {
    const productList = [];
    cart.map((item) =>
      productList.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })
    );
    await postOrder(productList, addressSelected, total, user.newToken);
  };
  console.log(user);
  return (
    <>
      <NavigationBar />
      <Container className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col md={12} lg={5} className="pe-lg-0 mb-2">
            <div className="border p-3">
              <div className="d-flex flex-column text-start mb-2">
                <span className="fw-bold fs-6">Detalles De Pago</span>
                <span className="fw-light">
                  Completa los siguentes campos para finalizar la compra
                </span>
              </div>
              <div className="my-3" id="card-wrapper"></div>
              <CardReactFormContainer
                container="card-wrapper"
                formInputsNames={{
                  number: "CCnumber",
                  expiry: "CCexpiry",
                  cvc: "CCcvc",
                  name: "CCname",
                }}
              >
                <div>
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-column justify-content-start mb-2">
                      <span className="me-auto fw-bold mb-1 ">
                        Numero De Tarjeta
                      </span>
                      <input
                        placeholder="•••• •••• •••• ••••"
                        className="border rounded p-1 me-auto w-100"
                        type="text"
                        name="CCnumber"
                      />
                    </div>
                    <div className="d-flex flex-row">
                      <div className="d-flex flex-column justify-content-start mb-2 me-2">
                        <span className="me-auto fw-bold mb-1">
                          Vencimiento
                        </span>
                        <input
                          placeholder="••/••"
                          className="border rounded p-1 me-auto"
                          type="text"
                          name="CCexpiry"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-start mb-2">
                        <span className="me-auto fw-bold mb-1">
                          Codigo de Seguridad
                        </span>
                        <input
                          placeholder="•••"
                          className="border rounded p-1 me-auto"
                          type="text"
                          name="CCcvc"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-start mb-2">
                    <span className="me-auto fw-bold mb-1">
                      Nombre en Tarjeta
                    </span>
                    <input
                      placeholder="Nombre Completo"
                      className="border rounded p-1 me-auto"
                      type="text"
                      name="CCname"
                    />
                  </div>
                  <div className="d-flex flex-column justify-content-start mb-3 w-100 overflow-hidden">
                    <span className="me-auto fw-bold mb-1">Direccion</span>
                    <select
                      className="border rounded p-1 me-auto "
                      name="address"
                      onChange={(e) => setAddressSelected(e.target.value)}
                    >
                      <option value="">Seleccione una direccion</option>
                      {address?.map(
                        ({ address, number, state, city, postalCode }) => (
                          <option
                            value={`${address}, ${number} - ${state}, ${city} - ${postalCode}`}
                          >{`${address}, ${number}`}</option>
                        )
                      )}
                    </select>
                  </div>
                </div>

                <Link to={user.newToken ? /*indicar ruta */ "" : "/login"}>
                  <Button
                    className="rounded-pill w-100 px-auto py-1 text-decoration-none"
                    variant="dark"
                    size="lg"
                    onClick={() => handlebuy()}
                  >
                    Finalizar Compra
                  </Button>
                </Link>
              </CardReactFormContainer>
            </div>
          </Col>
          <Col md={12} lg={7}>
            <div className="border p-3 mb-3">
              <div className="border-start border-3 border-dark d-flex flex-column align-items-start mb-2 bg-light">
                {cart.map((product, i) => (
                  <CheckOutItem
                    key={i}
                    url={product.imageUrl}
                    price={product.price}
                    mountProp={product.quantity}
                    name={product.name}
                    stock={product.stock}
                    productId={product.id}
                  />
                ))}
              </div>
              <div className="d-flex align-items-start">
                <span className="fs-6 fw-light">Subtotal</span>
                <span className="fs-6 me-1 ms-auto">${subTotalCost}</span>
              </div>
              <div className="d-flex align-items-start mb-2">
                <span className="fs-6 fw-light">IVA</span>
                <span className="fs-6 ms-auto me-1">${taxes.toFixed(2)}</span>
              </div>
              <div className="d-flex align-items-start py-1 my-2 border-top">
                <span className="fs-5 fw-light">Total</span>
                <span className="fs-5 fw-bold ms-auto me-1">
                  ${total.toFixed(2)}
                </span>
              </div>
              <div></div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default CheckOut;
