import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
     const [services, setServices] = useState([])
        useEffect(() =>{
            fetch('./services.json')
            .then(res => res.json())
            .then(data =>setServices(data))
        }, [])
         
    return (
   
        <div>

    <Container className="mt-2">
    <h2 className="text-black fw-bold text-center mt-5 mb-5">Our Services</h2>
    <hr />
         <Row xs={1} md={2} lg={3} className="g-4">
              {
                   services.map(service => <Col key={service.id}>
                       <Card className="h-100 course-card">
        <Card.Img className="card-img" variant="top" src={service.img} />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="text-center mt-2 mb-3">{service.name}</Card.Title>
         
         <div className="mt-auto ">
                <Link to={`/service/${service.id}`}><button className="btn w-100 button-color fw-semibold">Details</button></Link> 
               
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

export default Services;

