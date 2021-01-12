import React, { useRef } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

export default function Register() {
  let username = useRef();
  let password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      user: {
        username: username.current.value,
        password: password.current.value,
      },
    };

    axios.post("/register", data)
    .then(
        res => {
        console.log(res)
    })
    .catch(
        err => {
            console.log(err);
        }
    )
};

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter username" ref={username} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" ref={password} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
}
