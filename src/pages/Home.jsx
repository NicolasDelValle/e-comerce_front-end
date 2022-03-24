import { Container, Row, Col } from "react-bootstrap";
import "./css/homeStyles.css";

function Home() {
  return (
    <>
      {/*       <div className="w-100 h-100">
        
      </div> */}
      <section
        className="vw-100 vh-100"
        style={{
          backgroundImage: "url(https://wallpaper.dog/large/5450544.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {" "}
        <h1 className="bg-primary">Esto es por si queres meterle mas cosas</h1>
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
              <Col>Esto es un producto</Col>
              <Col>Esto es un producto</Col>
              <Col>Esto es un producto</Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;
