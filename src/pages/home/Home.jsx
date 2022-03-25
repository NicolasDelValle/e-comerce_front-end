import { Container, Row, Col } from "react-bootstrap";

import "./homeStyles.css";
import prod1 from "../../img/productos/tablas/tabla.png";
import prod2 from "../../img/productos/tablas/tabla2.png";
import prod3 from "../../img/productos/tablas/tabla3color.png";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="homeScrollContainer ">
      <section
        className="homeScrollContainer-seccion "
        style={{
          backgroundImage: "url(https://wallpaper.dog/large/5450544.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <button>
            hola
            <i className="bi bi-caret-down-fill"></i>
          </button>
        </div>
      </section>
      <section className="homeScrollContainer-seccion">
        <Container>
          <div>
            <div className="border-bottom border-2">
              <h2>
                <span>Shop</span>
              </h2>
            </div>
            <Row>
              <Col className="productCard m-3 py-3">
                <img width="120px" height="440" src={prod1} alt="tabla 1" />
              </Col>
              <Col className="productCard m-3 py-3 rounded-circle">
                <img width="120px" height="440" src={prod2} alt="tyabla 2" />
              </Col>
              <Col className="productCard m-3 py-3 rounded-circle">
                <img width="120px" height="440" src={prod3} alt="tabla 3" />
              </Col>
            </Row>
            <Row>
              <Col className="productCard m-3 py-3 ">
                <img width="120px" height="440" src={prod1} alt="tabla 1" />
              </Col>
              <Col className="productCard m-3 py-3 ">
                <img width="120px" height="440" src={prod2} alt="tyabla 2" />
              </Col>
              <Col className="productCard m-3 py-3 ">
                <img width="120px" height="440" src={prod3} alt="tabla 3" />
              </Col>
            </Row>
          </div>
        </Container>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
