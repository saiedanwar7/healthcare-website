import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer mt-5 ft-color text-light pt-5 pb-4">
        <Container>
            <Row>
               
        
                <Col className="col-lg-5 col-md-5 d-flex justify-content-center">
                    <div className="text-start">
                      <h2 className="fw-bold"><span>Healthcare</span><br />Diagnostic Center Ltd.</h2>
                    </div>
                </Col>
                
                <Col className="col-lg-4 col-md-4 d-flex justify-content-center">
                   <div className="text-start">
                   <h4 className="mb-2 fw-bold">CONTACT INFO</h4>
                      <div>
                      <p>23/2, Khilji Road, Block-B,
                          Shyamoli, Dhaka-1207</p>
                      <p>Mail - info@hdclbd.com</p>
                       <h5>Call - 10662</h5>
                      </div>
                   </div>
                </Col>
        
                <Col className="col-lg-3 col-md-3 d-flex justify-content-center">
                   <div className="text-start">
                    <h4 className="mb-2 fw-bold">NAVIGATION</h4>
                    <ul className="list-style">
                        <li>
                            <h6>-<a className="text-decoration-none link-color" href="/doctors"> Doctor's</a></h6>
                            <h6>-<a className="text-decoration-none link-color" href="/about"> About</a></h6>
                            <h6>-<a className="text-decoration-none link-color" href="/home"> Home</a></h6>
                        </li>
                    </ul>
                   </div>
             
                </Col>
               
                
        
            </Row>
        </Container> 
    </div>
    );
};

export default Footer;


//------------- footer --------------
{/* <div className="footer mt-5 bg-dark text-light pt-5 pb-4">
<Container>
    <Row>
       

        <Col className="col-md-4 d-flex justify-content-center">
            <div className="text-start">
            <h3>Address</h3>
             <p>Banani Model Town,
                Awal Centre <br />
                Banani, Dhaka</p>
            </div>
        </Col>
        
        <Col className="col-md-4 d-flex justify-content-center">
           <div className="text-start">
           <h1>Course List</h1>
              <div>
              <p>C Programming For Beginners</p>
              <p>Python for Beginners</p>
              <p>React JS Web Development</p>
              </div>
           </div>
        </Col>

        <Col className="col-md-4 d-flex justify-content-center">
           <div className="text-start">
           <p>About Us</p>
            <p>Terms and conditions</p>
            <p>Privacy Policy</p>
            <p>Call - 018520-0000</p>
           </div>
     
        </Col>
       
        

    </Row>
</Container> */}