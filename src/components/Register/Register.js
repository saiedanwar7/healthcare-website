import React from 'react';
import {Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css'

const Register = () => {
    const { handleEmailChange, handlePasswordChange, handleRegistration, handleNameChange, signInUsingGoogle, error, handleError } = useAuth();
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })

    }

    return (
        <>
        <Container>
            <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded"> Please Register</h1>
            <Row className="mt-2">
            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
        
         <Form onSubmit={handleRegistration}>

         <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control onBlur={handleNameChange} type="name" placeholder="Enter name" required id="userName"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required/>
            </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control  onBlur={handlePasswordChange} type="password" placeholder="Password"  required/>


            <p className="text-center text-danger">{error}</p>

        </Form.Group>

  <Button className="btn w-100" variant="success" type="submit">
    Register
  </Button>
       <div className="text-center mt-3">
                    <Link OnClick={handleError} to='/login'>already Registered ?</Link>
                    {/* <Link onClick={() => setIsLogin(!isLogin)} to='/login'>already Registered ?</Link> */}
                </div>
</Form>

             <div className="login-from mx-auto mt-3">
                <p className="text-center">OR</p>
                <button onClick={handleGoogleLogin} className="btn w-100 ">Continue with google</button>
            </div>
                </Col>
            </Row>
            {/* <h6 className=" ">Copyright @ 2021 Saied Anwar. All Rights Reserved</h6> */}
        </Container>

     </>

    );
};

export default Register;