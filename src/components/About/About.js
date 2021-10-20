import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import about from '../../images/about.png'


const About = () => {
    return (
        <div className="about-section">
     
            <Row>     
                <Col className="col-lg-7 col-md-12 col-12 d-flex">
                    <img className="about-img" src={about} alt="" />
                   
                </Col>
                
                <Col className="col-lg-5 col-md-12 col-12">
                    <div className="mt-5 ms-3 me-2">
                        <h2 className="mb-4 fw-bold text-start">HEALTH CARE</h2>

                        <p className="">Our Mission is to provide excellent health care services to all of our clients with dedication to meet their expectation.

                        The Healthcare Diagnostic Center started its journey with the vision of taking the health care services into a new height through providing the most accurate and reliable test results to all its customers and caring the patients at the top of its values.
                        
                       </p>
                       <button className="btn btn-about mt-3 mb-3 p-2"><a className="text-decoration-none fw-bold" href="/about">READ MORE</a></button>
                    </div>
                    
                </Col>  
            
                <hr className="hr-color" />
            </Row>
 
    </div>
    );
};

export default About;