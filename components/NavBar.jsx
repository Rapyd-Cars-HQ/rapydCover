"use client";
import React, { useState } from "react";
import "./nav-bar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import logo from "./../public/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentRoute = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className="container container-header">
        <div className="left">
          <Link href="/">
            <Image src={logo} alt="Rapyd Cover Logo" />
          </Link>
        </div>
        <div className={`menuNav ${isOpen ? "active" : ""}`}>
          <nav>
            <Link
              href="/drive"
              onClick={toggleNavbar}
              className={currentRoute === "/drive" ? "isActive" : "notActive"}
            >
              Drive
            </Link>
            <Link
              href="/ride"
              onClick={toggleNavbar}
              className={currentRoute === "/ride" ? "isActive" : "notActive"}
            >
              Ride
            </Link>
            <Link
              href="/autocare"
              onClick={toggleNavbar}
              className={
                currentRoute === "/autocare" ? "isActive" : "notActive"
              }
            >
              Autocare
            </Link>
            <Link
              href="/about"
              onClick={toggleNavbar}
              className={currentRoute === "/about" ? "isActive" : "notActive"}
            >
              About
            </Link>
            <Link
              href="/subscription"
              onClick={toggleNavbar}
              className={
                currentRoute === "/subscription" ? "isActive" : "notActive"
              }
            >
              Subscription
            </Link>
            <a
              href="https://rapydcars.com/"
              target="_blank"
              onClick={toggleNavbar}
              className={currentRoute === "/auto" ? "isActive" : "notActive"}
            >
              Auto Financing
            </a>
          </nav>
          <div className="ccc">
            <Link href="/">
              <button className="navBtn" onClick={toggleNavbar}>
                Get Started{" "}
              </button>
            </Link>
          </div>
        </div>

        <div onClick={toggleNavbar} className="vvv">
          <button className="nav-btn">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
