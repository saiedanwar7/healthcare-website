import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Appointment.css'

const Appointment = () => {
    return (
        <div className="mt-5 mb-5">
            <h2 className="text-center fw-bold text-dark mb-4">Find Our Doctor's</h2>
            <Row>     
                <Col className="col-lg-4 col-md-12 col-12 section-1 text-center ">
                  <div className="overlay1">
                  <p  className="mt-5 ">FIND A CONSULTANT</p>
                  <button className="btn app-btn mt-5 px-4 fw-bold">FIND</button>
                  </div>
                </Col>

                <Col className="col-lg-4 section-2 col-md-12 text-center">
                  <div className="overlay2">
                  <p className="mt-5">APPOINTMENT</p>
                   <button className="btn app-btn mt-5 px-4 fw-bold">BOOK NOW</button>
                  </div>
                </Col>
                  
                   <Col className="col-lg-4 section-3 col-md-12 col-12 text-center">
                       <div className="overlay3">
                       <p className="section-3-title mt-4"> 24 X 7 SERVICES </p>
                       <p>Our Helpline is available 24 hours a day 7 <br /> days a week call us any time</p>
                       <button className="btn app-btn mt-3 px-4 fw-bold">DETAILS</button>
                       </div>
                   </Col>
                                 
           </Row>
    
    </div>
    );
};

export default Appointment;