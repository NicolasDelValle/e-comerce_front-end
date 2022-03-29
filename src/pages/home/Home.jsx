import { Container, Row } from "react-bootstrap";
import "./homeStyles.css";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import losiVideoWeb from "../../videos/LosiWebVid.mp4";
import losilogo from "../../img/logos/logoBlanco.png";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}products`,

        // headers: { Authorization: `Bearer ${token}` },
      });
      console.log(data);
      setProducts(data);
    };
    getUser();
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="homeScrollContainer ">
        <div className="position-fixed w-100" style={{ zIndex: -1 }}>
          <video
            loop
            className="vw-100"
            src={losiVideoWeb}
            autoPlay={true}
            muted={true}
          />
        </div>

        <div className="homeScrollContainer-header">
          <img
            className="homeScrollContainer-header-logo_overlay"
            src={losilogo}
            alt="losiLogo"
          />
        </div>

        <section className="homeScrollContainer-seccion bg-light pt-5">
          <Container>
            <div>
              <div id="shop" className="border-bottom border-2">
                <h2>
                  <span>Shop</span>
                </h2>
              </div>
              <Row>
                {products.map((product) => (
                  <ProductCard product={product} />
                ))}
              </Row>
            </div>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
