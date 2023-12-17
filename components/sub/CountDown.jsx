import { FaSuitcase } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { FaUsers } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
function CountDown() {
  return (
    <section className="  flex w-full justify-between  ">
      <div className="flex flex-col gap-2 md:flex-row items-center justify-between w-full h-auto px-2 py-2 bg-[#00c0ef] text-white font-bold">
        <div className=" flex flex-col md:items-start items-center">
          <h2 className=" text-xl">10</h2>
          <p className=" text-xs font-light">Order Pending</p>
        </div>
        <div className=" flex items-center">
          <FaSuitcase className=" text-2xl md:text-4xl opacity-60 " />
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row items-center  justify-between w-full h-auto py-2 px-2 bg-[#00a65a] text-white font-bold">
        <div className=" flex flex-col md:items-start items-center">
          <h2 className=" text-base md:text-xl">10</h2>
          <p className=" text-xs font-light">Order in Progress</p>
        </div>
        <div className=" flex items-center">
          <LiaShippingFastSolid className=" text-2xl md:text-4xl opacity-60 " />
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row items-center justify-between w-full h-auto px-2 py-2 bg-[#f39c12] text-white font-bold">
        <div className=" flex flex-col md:items-start items-center">
          <h2 className=" text-xl">10</h2>
          <p className=" text-xs font-light">Order Delivered</p>
        </div>
        <div className=" flex items-center">
          <TiTick className=" text-2xl md:text-4xl opacity-60 " />
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row items-center justify-between w-full h-auto px-2 py-2 bg-[#f00] text-white font-bold">
        <div className=" flex flex-col md:items-start items-center">
          <h2 className=" text-xl">10</h2>
          <p className=" text-xs font-light">Customers</p>
        </div>
        <div className=" flex items-center">
          <FaUsers className="text-2xl md:text-4xl opacity-60 " />
        </div>
      </div>
    </section>
  );
}

export default CountDown;
