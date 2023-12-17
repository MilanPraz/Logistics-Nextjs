import Image from "next/image";
import { RiQuestionnaireFill } from "react-icons/ri";
import Feedbacks from "../sub/Feedbacks";
import Accordion from "./Accordion";
function About() {
  return (
    <section id="about" className=" bg-mypurple">
      <div className=" container mx-auto  py-8 px-10">
        <h2 className=" tracking-wider underline underline-offset-8  text-gray-200 font-bold text-2xl text-center">
          About Us
        </h2>
        <div className="flex items-center justify-center mt-8">
          <div className=" flex flex-col  justify-center items-center">
            <RiQuestionnaireFill className=" text-white text-5xl text-center" />

            <div className=" flex flex-col md:flex-row md:px-20 mt-8 gap-8">
              <div className=" grow bg-truck w-full  h-96 bg-no-repeat bg-cover bg-center"></div>
              {/* <Image
                src={"/aboutus.jpg"}
                alt="truck"
                height={400}
                width={400}
              /> */}
              <div className=" grow-0 md:w-2/3">
                <p className=" mt-4 font-light text-sm text-gray-300 ">
                  At Nabin Logistics, we are dedicated to redefining the
                  logistics landscape through innovation, efficiency, and
                  unwavering commitment. With a passion for seamless supply
                  chain solutions, we leverage our extensive industry expertise
                  and cutting-edge technology to deliver unparalleled services.
                </p>
                <p className=" mt-4 font-light text-sm text-gray-300">
                  Our mission is to empower businesses with customized logistics
                  strategies that optimize efficiency, reduce costs, and enhance
                  overall operational excellence. As a customer-centric team, we
                  pride ourselves on reliability, transparency, and a relentless
                  pursuit of excellence in every aspect of our Inland Service
                  Logistics. With a nationwide network, a focus on last-mile
                  expertise, and a dedication to meeting unique client needs,
                  Nabin Logistics stands as your trusted partner for
                  transformative logistics solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Feedbacks />
        </div>
        <div>
          <Accordion />
        </div>
      </div>
    </section>
  );
}

export default About;
