import React from 'react';
import {Button, Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import loginIcon from '../../images/user.svg'
import './Login.css' 
import uiImg from '../../images/login.svg'
import { Link, useLocation, useHistory } from 'react-router-dom';




const Login = () => {
    const {handleLogin,handleEmailChange, handlePasswordChange, signInUsingGoogle, error, handleError} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/home';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }

    return (
     <>
        <Container>
            <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded"> Please Login</h1>
            <Row className="mt-5">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">

                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                     <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />         
                  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordChange}  type="password" placeholder="Password" required/>
  </Form.Group>

   <p className="text-start text-danger">{error}</p> 
     

  <Button className="btn w-100" variant="success" type="submit">
    Login
  </Button>

               <div className="text-center mt-2">
                   {/* <Link onClick={() => setIsLogin(!isLogin)}  to="/register">new user ?</Link> */}
                    <Link onClick={handleError}  to="/register">new user ?</Link> 
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

export default Login;




//----------- Another Form --------------------------

// import React from 'react';
// import {Button, Col, Container, Form, Row } from 'react-bootstrap';
// import loginIcon from '../../images/user.svg'
// import './Login.css' 
// import uiImg from '../../images/login.svg'

// const Login = () => {
//     return (
//       <>
//         <Container className="mt-5">
//             <Row>
//                 <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
//                     <img className="icon-img" src={loginIcon} alt="icon" />
//                 <Form>

//                 <Form.Group controlId="formBasicEmail">
//                 <Form.Control type="email" placeholder="Enter email" />
//                 </Form.Group>

//                 <Form.Group  className="mt-2" controlId="formBasicPassword">
//                     <Form.Control type="password" placeholder="Password" />
//                 </Form.Group>


//   <Button className="mt-2 w-100" variant="primary px-5" type="submit">
//     Login
//   </Button>
  
//   {/* <div className="text-left mt-3">
//    <a href="#"><small className="reset">Password Reset</small></a>||

//    <a href="#"><small className="reset ml-2">Quick Recover</small></a>
//   </div> */}

// </Form>
//                 </Col>

//                 <Col lg={8} md={6} sm={12}>
//                  <img className="w-100" src={uiImg} alt="" />
//                 </Col>
//             </Row>
//         </Container>
//       </>
//     );
// };

// export default Login;







//--------------- test --------------------
// import React from 'react';
// import { Container, } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import useAuth from '../../Hooks/useAuth';
// // import useAuth from '../../Hooks/useAuth';
// import './Login.css'

// const Login = () => {
//     const { handleEmailChange, handlePasswordChange, signInUsingGoogle, handleLogin, error, isLogin, setIsLogin } = useAuth();
//     return (
//         <Container className="text-center mt-5 ">
//             <form onSubmit={handleLogin} className="login-from mx-auto">

//                 <h3 className="text-start mb-3">Login</h3>

//                 <div className="mb-3">
//                     {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
//                     <input type="email" onBlur={handleEmailChange} className="form-control form-control-lg" placeholder="email address" id="exampleInputEmail1" aria-describedby="emailHelp" required />
//                 </div>

//                 <div className="mb-3">
//                     {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
//                     <input type="password" onBlur={handlePasswordChange} placeholder="password" className="form-control form-control-lg" id="exampleInputPassword1" required />
//                     <p className="text-start text-danger">{error}</p> 
//                 </div>

//                 <div className="text-start mb-3">
//                     {/* <Link onClick={() => setIsLogin(!isLogin)}  to="/register">new user ?</Link> */}
//                     <Link to="/register">new user ?</Link>
//                 </div>
//                 <button type="submit" value="Submit" className="btn btn-primary w-100">Login</button>
//             </form>
//             <div className="login-from mx-auto mt-3">
//                 <p>or</p>
//                 <button onClick={signInUsingGoogle} className="btn w-100">Continue with google</button>
//             </div>
//         </Container>
//     );
// };

// export default Login;