import { Button, Carousel, Col, Container, Row } from "react-bootstrap";

import React from "react";
import Services from "../services/Services";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <Carousel className="py-3">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/0jx5cyf/14885730736-8ee6652e9e-b.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Vj7J5Cb/saint-martin.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/H2FWkFR/Panthumai.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="my-5 py-3">
        <Row>
          <Col className="text-center my-5 py-5">
            <h1>Travel Guide</h1>
            <p>
              Start planning your next trip with a little help from my travel
              guide.
            </p>
            <Button variant="primary">See More</Button>
          </Col>
          <Col>
            <img
              src="https://travel.discoverybangladesh.com/images/sylhet-sidebar.jpg"
              alt=""
              srcset=""
            />
          </Col>
        </Row>
      </Container>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
