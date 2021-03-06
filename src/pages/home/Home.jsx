import { Container, Row } from "react-bootstrap";
import "./homeStyles.css";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import AboutProjectTongue from "../../components/AboutProjectTongue";
import losiVideoWeb from "../../videos/LosiWebVid.mp4";
import losilogo from "../../img/logos/logoBlanco.png";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import actions from "../../redux/actions/welcomeActions";
import tablasDestacadas from "../../img/newReleasesImg/tablasDestacadas.png";
function Home() {
  const { welcomeModal } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [newRelease, setNewRelease] = useState([]);
  const navigate = useNavigate();

  function handleModalClick() {
    navigate("/login");
    dispatch(actions.changeWelcome());
  }

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

    getProducts();
    getNewRelease();
  }, []);

  const handleCloseModal = () => {
    dispatch(actions.changeWelcome());
  };

  return (
    <>
      <Modal
        className="rounded text-white my-modal container-fluid p-0"
        show={welcomeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter "
        centered
      >
        <div className="row mx-0">
          <div
            className="col m-0 border-end-2 modalImage"
            style={{
              backgroundImage: `url(${tablasDestacadas})`,
            }}
          ></div>
          <div className="col p-3 pt-5 text-center text-black ">
            <h2>Bienvenidos a Losi Skateboards</h2>
            <p>Este es un proyecto acad??mico</p>
            <Button
              className="my-3"
              variant=" btn-dark"
              onClick={() => handleCloseModal()}
            >
              Solo quiero navegar la p??gina.
            </Button>
            <Button variant=" btn-dark" onClick={() => handleModalClick()}>
              Me interesa navegar como administrador.
            </Button>
          </div>
        </div>
      </Modal>
      <NavigationBar />
      <div className="homeScrollContainer">
        <div
          className="fixed-top w-100 d-none d-sm-block "
          style={{ zIndex: -1 }}
        >
          <video
            loop
            className="vw-100"
            src={losiVideoWeb}
            autoPlay={true}
            muted={true}
          />
        </div>

        <div className="homeScrollContainer-header d-none d-sm-flex ">
          <img
            className="homeScrollContainer-header-logo_overlay"
            src={losilogo}
            alt="losiLogo"
          />
        </div>
        <AboutProjectTongue />
        <section className="homeScrollContainer-seccion bg-white pt-3 pb-5 ">
          <Container className="pb-5">
            <div id="shop">
              <Row className="mt-3 d-flex justify-content-center pt-5 new-release-row">
                <div className="">
                  <h2>Nuevos Lanzamientos</h2>
                  <p>Enterate de cuales son nuestros ultimos modelos </p>
                </div>

                <div className="col-md-6 col-8 overflow-hidden ">
                  <Link to={`/shop`}>
                    <img
                      src={newRelease.imageUrl}
                      className="img-fluid new-release-bottom-photo"
                      alt="productImage"
                    />
                  </Link>
                </div>
              </Row>

              <div className="border-top border-1 justify-content-around  home-shop-section py-5 ">
                <h2 className="pt-5">Shop</h2>

                <Row className="g-5">
                  {products.slice(0, 8).map((product, i) => (
                    <ProductCard key={i} product={product} />
                  ))}
                </Row>
              </div>
            </div>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
