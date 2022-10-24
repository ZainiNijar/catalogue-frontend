import React from "react";
import { Link } from "react-router-dom";
import Foot from "../components/layouts/foot";
import Nav from "../components/layouts/nav";

const Home = () => {
  return (
    <>
      <Nav />
      <div>
        Home
        <Link to="/about">About</Link>
      </div>
      <Foot />
    </>
  );
};

export default Home;
