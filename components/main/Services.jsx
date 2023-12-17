"use client";
import { MdOutlineLocalShipping } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { useRef, useTransition } from "react";

const listItems = [
  "Efficient Transportation",
  "Last-Mile Expertise",
  "Customized Logistics Solutions",
  "Cost-Effective Strategies",
  "Real-Time Visibility",
  "Nationwide Network",
  "Dedicated Logistics Team",
];

function Services() {
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  console.log(inView);

  const listvariant = {
    initial: { opacity: 0, x: 50 },
    animate: { x: 0, opacity: 1 },
  };
  return (
    <section id="services" className=" bg-[#0083db]">
      <div className=" container mx-auto px-10  py-8">
        <h2 className=" tracking-wider underline underline-offset-8  text-gray-200 font-bold text-2xl text-center">
          Our Service
        </h2>
        <div className="flex items-center justify-center mt-8">
          <div className=" flex flex-col  justify-center items-center">
            <MdOutlineLocalShipping className=" text-white text-5xl text-center" />
            <h1 className=" font-semibold text-lg text-gray-200 tracking-wide ">
              Inland Service Logistics
            </h1>
            <p className=" mt-4 font-light text-sm text-gray-300">
              Efficient and seamless transport within borders is crucial for the
              success of your business, and our Inland Service Logistics is
              designed to meet your unique inland transportation needs. Whether
              it&apos;s road, rail, or a combination of both, we ensure the
              smooth movement of your goods from point A to point B.
            </p>
            <p className=" mt-4 font-light text-sm text-gray-300">
              Our dedicated team of professionals leverages industry expertise
              and a robust network to provide reliable and cost-effective inland
              transportation solutions. From last-mile delivery to comprehensive
              inland freight services, we are committed to optimizing your
              supply chain and enhancing the overall efficiency of your
              logistics operations.
            </p>
          </div>
        </div>
        <div ref={ref}>
          <h2 className=" drop-shadow-sm text-myorange mt-4 font-bold text-xl">
            Our Key Features
          </h2>
          <ul className=" text-xs text-slate-200  font-semibold space-y-2 list-disc pl-8 ">
            {listItems.map((item, index) => (
              <motion.li
                key={index}
                variants={listvariant}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
