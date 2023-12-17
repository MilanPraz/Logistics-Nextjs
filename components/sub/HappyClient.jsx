import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

function HappyClient({ client }) {
  const { message, username } = client;
  return (
    <>
      <div className="  rounded-lg bg-slate-200   justify-between  h-48 md:h-64   w-full  flex flex-col gap-6 p-4 shadow-md text-start">
        <p className=" text-ellipsis  text-textOne md:text-sm lg:text-lg ">
          <FaQuoteLeft className=" text-myorange" />
          <span>{message}</span>
        </p>
        <div className="w-full flex justify-end">
          <FaQuoteRight className="  text-end  text-myorange" />
        </div>
        <div className=" flex items-center gap-4">
          <div className=" flex flex-col">
            <span className="  md:text-base lg:text-lg font-medium">
              {username}
            </span>
            <span className=" md:text-xs lg:text-sm text-textThree">
              Happy Client
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default HappyClient;
