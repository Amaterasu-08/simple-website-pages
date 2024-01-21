import React from "react";
import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import styles from "navbar.module.css";

const Navbar: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isNavbarFixed = scrollY > 10; // Adjust this value based on when you want the navbar to become fixed
      setIsFixed(isNavbarFixed);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isFixed ? "fixed" : ""}`}>
      <div className="nav-elements">
        <ul>
          <li>
            <a href="#">
              <img src="imgs/logo.png"></img>
            </a>
          </li>
          <li>
            <a href="#usecase">Use Cases</a>
          </li>
          <li>
            <a href="#howitworks">How it Works</a>
          </li>
          <li>
            <a href="pricing">Pricing</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
          <li>
            <a href="#getstarted">
              <button className="button">Get Started - it's Free</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
