import React, { useRef } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

export default function AuthPage() {
    let username = useRef();
    let password = useRef();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const data = {
          username: username.current.value,
          password: password.current.value,
      };
  
      axios.post("/authenticate", data)
      .then(
          res => {
          console.log(res.data)
          localStorage.setItem('token', res.data.token);
          
      })
      .catch(
          err => {
              console.log(err);
          }
      )
  };  
    
    return (
        <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter username" ref={username} />
        </Form.Group>
  
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" ref={password} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    )
}
