import { Container, Row } from "react-bootstrap";
import "./homeStyles.css";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import losiVideoWeb from "../../videos/LosiWebVid.mp4";
import losilogo from "../../img/logos/logoBlanco.png";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [newRelease, setNewRelease] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}products`,
      });

      setProducts(data);
    };
    const getNewRelease = async () => {
      const { data } = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}newRelease`,
      });
      setNewRelease(data);
    };
    console.log(newRelease);
    console.log(products);
    getProducts();
    getNewRelease();
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="homeScrollContainer ">
        <div className="fixed-top w-100" style={{ zIndex: -1 }}>
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

        <section className="homeScrollContainer-seccion bg-white pt-5">
          <Container className="">
            <div id="shop">
              <Row className="mt-3 d-flex justify-content-center pt-5 new-release-row">
                <div className="">
                  <h2>Nuevos Lanzamientos</h2>
                  <p>Enterate de cuales son nuestros ultimos modelos </p>
                </div>

                <div className="col-md-6 overflow-hidden ">
                  <Link to={`/shop`}>
                    <img
                      src={newRelease.imageUrl}
                      className="img-fluid new-release-bottom-photo"
                      alt="productImage"
                    />
                  </Link>
                </div>
              </Row>

              <Row className="border-top border-1 justify-content-around  home-shop-section py-5">
                <div className="">
                  <h2>Shop</h2>
                </div>
                {products.slice(0, 8).map((product, i) => (
                  <ProductCard key={i} product={product} />
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
