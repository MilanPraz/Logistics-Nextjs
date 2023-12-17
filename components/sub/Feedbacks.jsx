"use client";
// import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HappyClient from "./HappyClient";

const clients = [
  {
    username: "Shyam Ram",
    message:
      "Reliable, efficient, and always exceeding expectations. Nabin Logistics is our trusted partner for seamless Inland Service Logistics.",
  },
  {
    username: "Joseph Martin",
    message:
      "We found a logistics ally that combines innovation, dedication, and a nationwide reach, ensuring our supply chain is always in good hands",
  },
  {
    username: "Nabin paudel",
    message:
      "Precision in every delivery, transparency in every interaction they has transformed our logistics experience with their expertise and commitment",
  },
  {
    username: "Kiran praz",
    message:
      "last-mile excellence is not just a promise, but a reality. Their real-time tracking and personalized solutions make them our go-to logistics partner",
  },
  {
    username: "Milan praz",
    message:
      "Efficiency, cost-effectiveness, and a responsive team , consistently delivers exceptional Inland Service Logistics tailored to our unique business needs",
  },
];

function Feedbacks() {
  let settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 464,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className=" container mx-auto pt-20 pb-20 ">
      <div
        data-aos="fade-up"
        className=" flex flex-col  justify-center items-center"
      >
        <div className="flex items-center gap-2">
          <hr className=" h-[2px] w-12 bg-myPink " />
          <h1 className=" text-[12px] font-semibold   text-myorange">
            TESTIMONIAL
          </h1>
          <hr className=" h-[2px] w-12 bg-myPink" />
        </div>
        <h2 className=" dark:text-white mb-24 text-4xl mt-4 font-semibold text-myorange">
          Happy Clients
        </h2>
      </div>

      <div data-aos="fade-up" className=" ">
        <Slider {...settings}>
          {clients?.map((client, index) => {
            return (
              <div key={index} className=" p-4">
                <HappyClient client={client} />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default Feedbacks;
