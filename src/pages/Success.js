import userEvent from "@testing-library/user-event";
import React from "react";
import { Alert } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { months, Slots } from "../utils/months";

const Success = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div
      className="container"
      style={{
        overflow: "auto",
        minHeight: "-webkit-fill-available",
        maxHeight: "100%",
        paddingTop: "30px",
        paddingRight: "auto",
      }}
    >
      <Alert variant="success">
        <Alert.Heading>Congratulations for your Registration.</Alert.Heading>
        <p>
          <strong>{state.data.user.name}</strong> is enrolled for the month{" "}
          <strong>{months[state.data.month]}</strong> and slot{" "}
          <strong>{Slots[state.data.slot]}</strong>.
        </p>
        <hr />
        <p className="mb-0">
          For new Registration , <a href="/">Click here</a>
        </p>
      </Alert>
    </div>
  );
};

export default Success;
