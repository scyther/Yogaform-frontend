import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/apiCalls";
import "../assets/css/UserForm.css";

const UserForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [alert, setAlert] = useState({ text: "", variant: "", show: false });

  const navigate = useNavigate();
  const handleUserData = (e) => {
    e.preventDefault();
    if (!age || !name) {
      setAlert({
        ...alert,
        text: "Enter requried Fields",
        variant: "danger",
        show: true,
      });
      return console.log("Enter required Fields");
    }
    createUser(name, age)
      .then((data) => {
        if (data.error?.code === "P2002") {
          return setAlert({
            ...alert,
            text: "User with same name already exists",
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
        navigate("/enroll", { replace: true, state: { data } });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form className="form" onSubmit={handleUserData}>
      {alert.show && <Alert variant={alert.variant}>{alert.text}</Alert>}
      <Form.Group className="mb-3" controlId="formGridName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          name="age"
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="submitButton">
        Submit
      </Button>
    </Form>
  );
};

export default UserForm;
