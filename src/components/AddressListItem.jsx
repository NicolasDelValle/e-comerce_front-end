import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { deleteAddress } from "../api/addressApi";
import actions from "../redux/actions/adressActions";
import { useDispatch, useSelector } from "react-redux";
export const AddressListItem = ({
  id,
  name,
  state,
  city,
  adress,
  number,
  postalCode,
}) => {
  const { newToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleDeleteAddress = async () => {
    dispatch(actions.removeAddress(id));
    await deleteAddress(id, newToken);
  };
  return (
    <div key={id} className="w-100 d-flex flex-row border rounded-3  mb-2 ps-3">
      <div className="w-100">
        <div className="w-100 d-flex flex-column justify-content-center align-items-start ">
          <div className="d-flex flex-row w-100">
            <span className="fw-bold fs-6 me-auto">{name}</span>
            <button
              onClick={() => setShow(true)}
              className="m-1 rounded-circle border-0 bg-transparent d-flex justify-content-center align-items-start fw-bold "
            >
              <i className="bi bi-x-lg p-0 m-0"></i>
            </button>

            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Body className="d-flex flex-column align-items-start text-start">
                <span className="fs-4">
                  Seguro quieres eliminar esta dirección
                </span>
                <span className="my-2 fs-6 text-secondary">{`${adress} ${number} - ${state}, ${city} - ${postalCode}`}</span>
              </Modal.Body>
              <Modal.Footer className="bg-dark">
                <Button
                  onClick={() => handleDeleteAddress()}
                  className="text-danger py-1 rounded-pill"
                  variant="outline-light"
                >
                  Eliminar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="d-flex flex-row align-items-start me-auto my-1">
            <span className="fw-light pe-1 text-start">
              {`${adress} ${number} - ${state}, ${city} - ${postalCode}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressListItem;
