"use client";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  motionValue,
} from "framer-motion";
// import { motion, motionValue } from "framer-motion";
import Image from "next/image";
import CountDown from "../sub/CountDown";

function Hero() {
  return (
    <section id="home" className="hero h-full">
      <div className=" h-full w-full bg-[#c1e6f6] relative">
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 200 }}
          className=" absolute top-8"
        >
          {/* <div className="  bg-city w-[100vw] h-80 object-cover"></div> */}
          <Image
            src={"/mybg.png"}
            alt="city"
            width={2000}
            height={500}
            objectFit="cover"
          />
        </motion.div>
        <motion.div
          className=" relative top-10 md:top-60"
          initial={{ opacity: 0.9, scale: 0.2, x: 1000 }}
          animate={{ opacity: 1, scale: 1, x: -370 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.5,
            ease: "circInOut",
          }}
        >
          <Image
            src={"/removed-jeep.png"}
            alt="jeep"
            width={300}
            height={300}
          />
          <p className="  font-bold text-[#6c617e] relative bottom-30 left-0  text-2xl  drop-shadow-lg">
            Your Cargo, Our Commitment
          </p>
        </motion.div>

        <motion.div
          className=" absolute top-10  md:top-60"
          initial={{ opacity: 0.8, scale: 0, x: -290 }}
          animate={{ opacity: 1, scale: 1, x: 20 }}
          transition={{ duration: 1, ease: "circIn", delay: 1.5 }}
        >
          <Image
            src={"/removed-jeep2.png"}
            alt="jeep"
            width={300}
            height={300}
          />
          <p className="  font-bold text-[#38315a] relative bottom-10 md:bottom-24 left-10 transform -translate-y-1 -translate-x-1 md:left-[430px]  text-xl md:text-3xl  drop-shadow-md">
            On Time. On Target. Every Time
          </p>
        </motion.div>
        <div
          className="bg-[#2e3842] mt-20 md:mt-60 h-52 w-full flex flex-col
         justify-around "
        >
          <div className=" flex  justify-around  items-start py-4  text-[#fc721a]">
            <h2 className=" text-xl font-semibold capitalize  tracking-wide  ">
              NABIN LOGISTICS
            </h2>
            <h2 className=" text-xl font-semibold capitalize  tracking-wide  ">
              SHIP IT, GET IT
            </h2>
          </div>
          <h2 className="  text-2xl text-center text-slate-200">
            FROM HERE TO ANYWHERE, WITH CARE{" "}
          </h2>
          <h2 className=" text-sm mb-8  text-center text-slate-200">
            &quot;Behind every great leader there was an even greater
            logistician &quot;-M. Cox
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
