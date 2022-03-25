import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import "./css/homeStyles.css";
import prod1 from "../img/productos/tablas/tabla.png";
import prod2 from "../img/productos/tablas/tabla2.png";
import prod3 from "../img/productos/tablas/tabla3color.png";
import videoLosi from "../Videos/LosiwebLanding.mp4";

function Home() {
  return (
    <div className="scrollContainer" id="scrollContainer">
      <section>
        <div width="100%">
          <NavigationBar />
          <video loop autoPlay muted playsInline fluid={false} width="100%">
            <h1>Losi</h1>
            <source src={videoLosi} type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="vw-100 vh-100">
        <Container>
          <div>
            <div className="border-bottom border-2">
              <h2>
                <span>Shop</span>
              </h2>
            </div>
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
      </section>
    </div>
  );
}

export default Home;
