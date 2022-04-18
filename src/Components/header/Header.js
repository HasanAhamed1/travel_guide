import React from "react";
import { Nav } from "react-bootstrap";
import CustomLink from "../customLink/CustomLink";


const Header = () => {
  return (
    <Nav className="justify-content-center fs-5 m-4" activeKey="/home">
      <Nav.Item className="px-3">
      <CustomLink to="/">Home</CustomLink>
      </Nav.Item>
      <Nav.Item className="px-3">
        <CustomLink to="/blogs">Blogs</CustomLink>
      </Nav.Item>
      <Nav.Item className="px-3">
        <CustomLink to="/about">About</CustomLink>
      </Nav.Item>
      <Nav.Item className="px-3">
          <CustomLink to="/login">Login</CustomLink>
      </Nav.Item>
    </Nav>
  );
};

export default Header;