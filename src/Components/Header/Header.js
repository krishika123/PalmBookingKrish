import React from "react";
import Nav from "../Nav";

const Content = () => {
  return (
    <>
      <h1 className="logoStyle">PalmBooker</h1>
      {/* <Nav inputElement={inputElement} /> */}
      {/* <img onClick={focusInput} src={hammenu} className={"hammenuStyle"}></img> */}
    </>
  );
};

const Header = () => {
  return (
    <header>
      <Content />
      <Nav />
      <nav></nav>
    </header>
  );
};

export default Header;
