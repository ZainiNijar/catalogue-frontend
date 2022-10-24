import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/icon/logo512.png";

const Nav = () => {
  return (
    <>
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <Link
            to="/"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
          >
            <img width={20} src={Logo} alt="" />
          </Link>
        </div>
        <div>
          <a
            href="/one"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            Product
          </a>
          <a
            href="/two"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            Category
          </a>
          <Link
            to="/about"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            About
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
