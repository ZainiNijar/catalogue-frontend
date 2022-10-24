import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/img/logo512.png";

const About = () => {
  return (
    <div>
      About
      <img src={Logo} alt="" />
      <Link to="/">Home</Link>
    </div>
  );
};

export default About;
