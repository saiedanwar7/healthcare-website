import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import './ServiceDetails.css'

const ServiceDetails = () => {
     const{serviceId} = useParams();
     //console.log(serviceId);

    const [services, setServices] = useState([])
   // console.log(services)

    useEffect(() =>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))

    }, [])

const singleService = services?.find(service =>service.id === serviceId)

 // console.log(singleService);

    return (
        <div>
           
           <Container>
                    
                 <h1 className="text-center mt-5">{singleService?.name}</h1>
                    <hr />
                <Row>  
                    <Col className="col-lg-7 col-md-12 col-12">
                        <div className="">
                        <img className=" service-img" src={singleService?.img} alt="" />
                        </div>
                   </Col>

                <Col className="col-lg-5 col-md-12 col-12">
                    <div className="">
                    <p>{singleService?.description}</p>
                    </div>
                </Col>  
                </Row> 
            </Container>

           
        </div>
    );
};

export default ServiceDetails;