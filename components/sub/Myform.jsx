"use client";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function Myform() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [userData, setUserData] = useState({});
  // console.log(errors);
  const onSubmit = async (data) => {
    setUserData(data);
    // console.log(data);
    await axios
      .post("/api/send", data)
      .then((res) => {
        reset();
        // console.log(res.data);

        Swal.fire({
          position: "top",
          icon: "success",
          title: "Submitted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 mt-12  px-12 md:px-0">
        <h2 className=" mb-8 text-lg tracking-wide  font-semibold  text-myorange ">
          Fill up the form and we&apos;ll get back to you soon
        </h2>
        <div>
          <input
            {...register("fullname", { required: "*fullname is required" })}
            placeholder="Full Name"
            className=" text-mydark outline-none rounded-md drop-shadow-md px-4 py-4 w-full"
          />
          <small className=" text-red-700">{errors?.fullname?.message}</small>
        </div>
        <div>
          <input
            type="email"
            {...register("email", { required: "*email is required" })}
            placeholder="Email"
            className=" text-mydark outline-none rounded-md drop-shadow-md px-4 py-4 w-full"
          />
          <small className=" text-red-700">{errors?.email?.message}</small>
        </div>
        <div>
          <input
            type="phone"
            {...register("contact", { required: "*contact is required" })}
            placeholder="Contact Number"
            className=" text-mydark outline-none rounded-md drop-shadow-md px-4 py-4 w-full"
          />
          <small className=" text-red-700">{errors?.contact?.message}</small>
        </div>
        <div>
          <input
            {...register("subject", { required: "*subject is required" })}
            placeholder="Subject"
            className=" text-mydark outline-none rounded-md drop-shadow-md px-4 py-4 w-full"
          />
          <small className=" text-red-700">{errors?.subject?.message}</small>
        </div>
        <div>
          <textarea
            {...register("details", { required: "*details is required" })}
            placeholder="Details"
            className=" h-52 text-mydark outline-none rounded-md drop-shadow-md px-4 py-4 w-full"
          />
          <small className=" text-red-700">{errors?.details?.message}</small>
        </div>
        <div>
          <button
            type="submit"
            className=" bg-myblue w-full py-4 rounded-md drop-shadow-md"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Myform;
