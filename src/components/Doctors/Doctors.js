import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() =>{
        fetch("./doctors.json")
           .then(res => res.json())
           .then(data => setDoctors(data))
           console.log(doctors);
    }, [])
    return (
        <div>
          <Container className="mt-5 mb-5">
              <h1 className="text-center">OUR DOCTOR'S</h1>
              <h2 className="text-center">All the Providers You Need</h2>
              <hr />
              <Row xs={1} lg={3} md={2} className="4">
                   {
                
                    doctors.map(doctor => <Col key={doctor._Id}>
                        <Card className="text-center mt-5">
                            <div className="mt-2">
                                <img className="doctor-img" src={doctor.img} alt="" />
                            </div>
                            <Card.Body>
                                <Card.Title className="d-flex flex-column">
                                    {doctor.name}
                                </Card.Title>
                                <p>{doctor.Specialities}</p>
                                
                                <Card.Text>
                                    <p></p>
                                </Card.Text>
                                <div className="mt-auto ">

                              </div>
                            </Card.Body>

                        </Card>      
                     </Col>)
                        
                   }

              </Row>

          </Container>
        </div>
    );
};

export default Doctors;