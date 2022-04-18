import { signOut } from "firebase/auth";
import React from "react";
import { Nav } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomLink from "../customLink/CustomLink";

const Header = () => {
    const [user] = useAuthState(auth);
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
        <span>{user?.displayName && user.displayName}</span>
        {user?.uid ? (
          <button onClick={() => signOut(auth)}>Log Out</button>
        ) : (
          <CustomLink to="/login">Login</CustomLink>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default Header;
