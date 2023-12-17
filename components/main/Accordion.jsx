"use client";

import { useState } from "react";
import AccordionItem from "../sub/AccordionItem";

const accordionData = [
  {
    title: "What services do you offer?",
    answer:
      "We offer a range of logistics services, including Inland Service Logistics, Warehousing Solutions, International Freight, and Customs Brokerage.",
  },
  {
    title: "How can I track my shipments?",
    answer:
      "You can easily track your shipments using our online tracking system. Simply enter your tracking number on our website, and you'll get real-time updates on the status of your shipments.",
  },
  {
    title: "What makes your last-mile delivery unique?",
    answer:
      "Our last-mile delivery services are characterized by precision and reliability. We leverage advanced technology to ensure your packages reach their destination on time, whether it's in urban centers or remote locations.",
  },
  {
    title: "How can I request a quote for your services?",
    answer:
      "To get a quote for our services, you can fill out the online quote request form on our website. Our team will review your requirements and provide you with a customized quote tailored to your logistics needs.",
  },
  {
    title: "What sets your company apart from others in the industry?",
    answer:
      "What sets us apart is our commitment to innovation, efficiency, and personalized service. We strive to understand the unique needs of each client and provide tailored logistics solutions that contribute to their success.",
  },
];

function Accordion() {
  const [open, setOpen] = useState(false);

  function toggle(index) {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
    // setOpen(!open)
  }

  return (
    <section className="">
      <h2 className=" text-center text-myorange text-4xl font-semibold">
        FAQs
      </h2>
      <div>
        {accordionData.map((data, index) => {
          return (
            <AccordionItem
              key={index}
              title={data.title}
              answer={data.answer}
              toggle={() => toggle(index)}
              open={open === index}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Accordion;
