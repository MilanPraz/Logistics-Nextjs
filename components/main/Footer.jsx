"use client";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <footer className=" bg-[#38315a] h-full md:h-72">
      <section className=" flex px-8 flex-col md:flex-row justify-around">
        <div>
          <h2 className=" text-white py-4">Nabin Logo</h2>
        </div>
        <div className=" flex flex-col ">
          <h2 className=" text-white text-3xl font-semibold my-4">
            Company Details
          </h2>
          <ul className=" flex flex-col gap-3">
            <li className=" flex items-center  text-myText font-semibold gap-2">
              <FaLocationDot className=" text-xl text-white" />
              tinkune, kathmandu
            </li>
            <li className=" flex items-center  text-myText font-semibold gap-2">
              <FaPhoneAlt className=" text-xl text-white" />
              +977-9841800224
            </li>
            <li className=" flex items-center  text-myText font-semibold gap-2">
              <FaWhatsapp className=" text-xl text-white" />
              +977-9841800224
            </li>
            <li className=" flex items-center  text-myText font-semibold gap-2">
              <MdEmail className=" text-xl text-white" />
              nabinraut.nkr@gmail.com
            </li>
          </ul>
        </div>
        <div className=" flex flex-col ">
          <h2 className=" text-white text-3xl font-semibold my-4">Company</h2>
          <ul className=" flex flex-col gap-3">
            <li className=" flex items-center  text-myText font-semibold gap-2">
              About
            </li>
            <li className=" flex items-center  text-myText font-semibold gap-2">
              Services
            </li>
            <li className=" flex items-center  text-myText font-semibold gap-2">
              Our Team
            </li>
            <li className=" flex items-center  text-myText font-semibold gap-2">
              Contact
            </li>
          </ul>
        </div>
      </section>
      <section className=" mt-8">
        <hr className=" h-[0.5px] w-full bg-slate-400" />
        <p className=" text-center text-gray-300 py-4 font-semibold">
          Copyright All Rights Reserved 2024 | Nabin Logistics
        </p>
      </section>
    </footer>
  );
}

export default Footer;
