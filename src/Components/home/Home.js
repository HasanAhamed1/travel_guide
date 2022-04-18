import {
    Button,
    Carousel,
    Col,
    Container,
    Row,
  } from "react-bootstrap";
  
import React from "react";
import Services from "../services/Services";

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
      <Services></Services>
    </div>
  );
};

export default Home;
