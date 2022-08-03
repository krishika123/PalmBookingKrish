import React from "react";
import Nav from "../Nav";

const Content = () => {
  return (
    <>
      <h1 className="logoStyle">PalmBooker</h1>
    </>
  );
};

const Header = () => {
  return (
    <header>
      <Content/>
      <Nav/>
      <nav></nav>
    </header>
  );
};

export default Header;
