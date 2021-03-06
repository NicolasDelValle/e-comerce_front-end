import { useState, useEffect } from "react";
import NavigationBar from "../../components/NavigationBar";
import OrderListItem from "../../components/OrderListItem";
import { Container } from "react-bootstrap";
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

  return (
    <>
      <NavigationBar />
      <Container className="mt-3 px-lg-5">
        <span className="w-100 me-auto d-flex fs-4 fw-light">Historial</span>
        <div>
          {orders?.map((order) => (
            <OrderListItem
              id={order.id}
              date={new Date(order.createdAt).toLocaleDateString()}
              total={order.totalPrice}
              address={order.address}
              productList={order.productList}
              status={order.status}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default UserOrderHistory;
