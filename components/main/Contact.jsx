import Myform from "../sub/Myform";

function Contact() {
  return (
    <div id="contact" className=" bg-[#dbe0e4] pt-8 pb-8 ">
      <div className="">
        <h2 className=" text-3xl font-bold text-center mb-8 text-myorange">
          Contact Us
        </h2>
        <section className=" container mx-auto flex flex-col justify-center md:flex-row items-start md:justify-around py-8 md:px-0 px-12 ">
          <div className=" flex flex-col gap-2    p-4">
            <h2 className=" text-xl font-semibold ">Address</h2>
            <p className=" text-myText">Tinkune, Kathmandu</p>
          </div>
          <div className=" flex flex-col p-4">
            <h2 className=" text-xl font-semibold ">Contact Numbers</h2>
            <p className=" text-myText">+977-9856565656</p>
            <p className=" text-myText">+977-1-593566</p>
          </div>
          <div className=" flex flex-col p-4">
            <h2 className=" text-xl font-semibold ">Web</h2>
            <p className=" text-myText">info@nabinlogistics.com.np</p>
            <p className=" text-myText">www.nabinlogistics.com.np</p>
          </div>
        </section>
        <section className=" container mx-auto flex flex-col md:flex-row justify-around items-start\ ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56530.006119741!2d85.27229354863277!3d27.682519400000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19534799e81b%3A0x28ef6d5e4d62a64b!2sTinkune!5e0!3m2!1sne!2snp!4v1702811038310!5m2!1sne!2snp"
            width="600"
            height="600"
            className=" w-3/4  md:w-3/5 self-center h-80 md:h-[600px] "
            style={{ border: "none" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <Myform />
        </section>
      </div>
    </div>
  );
}

export default Contact;
