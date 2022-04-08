import { useState, useEffect } from "react";
import NavigationBar from "../../components/NavigationBar";

import { Col, Container, Row, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserOrders } from "../../api/orderApi";
export const UserOrderHistory = (props) => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState();

  const handleGetOrders = async () => {
    const orders = await getUserOrders(user.newToken);
    /* const a = JSON.parse(orders.data[0].productList); */
    setOrders(orders);
  };

  useEffect(() => {
    handleGetOrders();
  }, []);
  const time = new Date(orders?.data[0].createdAt).toLocaleDateString();
  console.log(orders);
  return (
    <>
      <NavigationBar />
      <Container className="mt-3 px-lg-5">
        <Button onClick={() => handleGetOrders()}>a</Button>
        <div>
          <span>Total de cuenta</span>
          <span>$44022</span>
        </div>
        <span className="w-100 me-auto d-flex fs-4 fw-light">Historial</span>
        <div></div>
      </Container>
    </>
  );
};

export default UserOrderHistory;
