import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Alert, Button, Container, Form, InputGroup } from "react-bootstrap";
import { months, Slots } from "../utils/months";
import { EnrollUser } from "../api/apiCalls";

const Enroll = () => {
  const [selectedMonth, setSelectedMonth] = useState(11);
  const [selectedSlot, setSelectedSlot] = useState(1);
  const [alert, setAlert] = useState({ text: "", variant: "", show: false });
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state.data);

  const handlePayment = () => {
    //complete payment API calls
    return 23144;
  };
  const handleEnroll = (e) => {
    let paymentId = handlePayment();
    e.preventDefault();
    EnrollUser(selectedMonth, selectedSlot, state.data?.id, paymentId)
      .then((data) => {
        if (data.error?.code === "P2002") {
          return setAlert({
            ...alert,
            text: "User already enrolled for this month",
            show: true,
            variant: "danger",
          });
        }
        if (data.error?.code === "P2025") {
          return setAlert({
            ...alert,
            text: "Don't try to mess with app",
            show: true,
            variant: "danger",
          });
        }
        if (data.cError) {
          return setAlert({
            ...alert,
            text: data.cError,
            show: true,
            variant: "danger",
          });
        }
        navigate("/success", { replace: true, state: { data } });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(selectedSlot);
  return (
    <Container>
      <Form className="form" onSubmit={handleEnroll} style={{ marginTop: 20 }}>
        {alert.show && <Alert variant={alert.variant}>{alert.text}</Alert>}
        <Form.Label htmlFor="month">
          <h4 >Select Month : </h4>
        </Form.Label>
        <InputGroup className="mb-3" id="month">
          {months.map((month, index) => (
            <div key={index}>
              <input
                type="radio"
                className="btn-check"
                name="month"
                id={`month-${index}`}
                checked={index === selectedMonth}
                value={selectedMonth}
                onChange={() => {
                  setSelectedMonth(index);
                }}
              />
              <label className="btn" htmlFor={`month-${index}`}>
                <strong>{month}</strong>
              </label>
            </div>
          ))}
        </InputGroup>
        {/* Slot */}
        <Form.Label htmlFor="slot">
          <h4>Select Slot : </h4>
        </Form.Label>
        <InputGroup className="mb-3" id="slot">
          {Slots.map((slot, index) => (
            <div key={index}>
              <input
                type="radio"
                className="btn-check"
                name="slot"
                id={`slot-${index}`}
                checked={index === selectedSlot}
                onChange={(e) => {
                  setSelectedSlot(index);
                }}
              />
              <label className="btn" htmlFor={`slot-${index}`}>
                <strong>{slot}</strong>
              </label>
            </div>
          ))}
        </InputGroup>
        <Button variant="success" type="submit" className="submitButton">
          Pay Fee
        </Button>
      </Form>
    </Container>
  );
};

export default Enroll;
