"use client";
import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [openHam, setOpenHam] = useState(false);

  return (
    <nav className="  w-full bg-white z-40">
      <div className="menu fixed z-40 bg-white  w-full md:px-8  py-3 drop-shadow-sm  flex items-center justify-between ">
        <div className=" pl-4">
          <h2 className=" text-xl font-bold">Nabin Logo</h2>
        </div>
        <div className=" hidden md:block">
          <ul className="  cursor-pointer flex gap-4 text-xs font-medium ">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
                delay={200}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
                delay={200}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
                delay={200}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
                delay={200}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* hamburger section */}

        <div className=" md:hidden mr-4" onClick={() => setOpenHam(!openHam)}>
          <div className={openHam === true ? "crossHam" : "hamburger"}></div>
        </div>
      </div>
      <div
        className={`transition-all  z-30 bg-white w-full ease-in-out duration-500 fixed ${
          openHam === true ? "top-12" : "-top-80"
        }`}
      >
        <div
          onClick={() => setOpenHam(!openHam)}
          className=" transition-all ease-in-out duration-500 pt-8  px-4 pb-8"
        >
          <ul className=" transition-all ease-in-out  duration-500 cursor-pointer flex flex-col gap-4 text-2xl font-semibold ">
            <li>
              <Link
                onClick={() => setOpenHam(!openHam)}
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
                delay={200}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenHam(!openHam)}
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
                delay={200}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenHam(!openHam)}
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
                delay={200}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenHam(!openHam)}
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
                delay={200}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
