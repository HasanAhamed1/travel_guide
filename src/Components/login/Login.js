import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, userG] = useSignInWithGoogle(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const handlePassWordReset = () => {
    sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log('email sent');
    })
  }
  return (
    <div>
      <div className="w-50 mx-auto m-5">
        <h2 className="text-primary">Login</h2>
        <Form onSubmit={handleUserSignIn} className="mt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onBlur={handleEmailBlur}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onBlur={handlePasswordBlur}
              required
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          
          
          <Button className="px-3" variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <br />
        <button className="text-muted border-0" onClick={handlePassWordReset}>Forget Password?</button>
        <br />
        <Container>
          <Row>
            <Col>
              <hr />
            </Col>
            <Col className="text-muted">or</Col>
            <Col>
              <hr />
            </Col>
          </Row>
        </Container>
        
        <br />
        <div className="container">
        <div className="row">
          <div className="col">
          <Button variant="success" onClick={() => signInWithGoogle()}>Google Sign In</Button>
          </div>
          <div className="col">
          <Button variant="danger" onClick={() => navigate("/register")}>Create new account</Button>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Login;