import { useState, useEffect } from "react";
import NavigationBar from "../../components/NavigationBar";
import OrderListItem from "../../components/OrderListItem";
import { Col, Container, Row, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserOrders } from "../../api/orderApi";
export const UserOrderHistory = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState();

  const handleGetOrders = async () => {
    const orders = await getUserOrders(user.newToken);

    setOrders(orders.data);
  };

  useEffect(() => {
    handleGetOrders();
  }, []);
  console.log(orders);
  return (
    <>
      <NavigationBar />
      <Container className="mt-3 px-lg-5">
        <div>
          <span>Total de cuenta</span>
          <span>$44022</span>
        </div>
        <span className="w-100 me-auto d-flex fs-4 fw-light">Historial</span>
        <div>
          {orders?.map((order) => (
            <OrderListItem
              id={order.id}
              date={new Date(order.createdAt).toLocaleDateString()}
              total={order.totalPrice}
              address={order.address}
              productList={JSON.parse(order.productList)}
              status={order.status}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default UserOrderHistory;
