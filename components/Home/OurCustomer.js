import React from "react";
import Image from "next/image";

const OurCustomer = () => {
  return (
    <>
      <div className="bg-[#F6F9FF] py-10">
        <div className="container">
          <h1 className="text-[22px] text-center md:text-[42px] text-[#15095E] font-bold">
            Our Customers
          </h1>
          <div className="grid md:grid-cols-4 grid-cols-2 mt-6">
            <div className="p-3 bg-white border rounded-md m-2 w-100 h-36 shadow-md flex items-center justify-center">
              <Image src={"/images/Group16.png"} width={100} height={50} />
            </div>
            <div className="p-3 bg-white border rounded-md m-2 w-100 h-36 shadow-md flex items-center justify-center">
              <Image src={"/images/Group5710.png"} width={100} height={50} />
            </div>
            <div className="p-3 bg-white border rounded-md m-2 w-100 h-36 shadow-md flex items-center justify-center">
              <Image src={"/images/Path3112.png"} width={100} height={50} />
            </div>
            <div className="p-3 bg-white border rounded-md m-2 w-100 h-36 shadow-md flex items-center justify-center">
              <Image src={"/images/Group21.png"} width={100} height={50} />
            </div>
            <div className="p-3 bg-white border rounded-md m-2 w-100 h-36 shadow-md flex items-center justify-center">
              <Image src={"/images/Group5715.png"} width={100} height={50} />
            </div>
            <div className="p-3 bg-white border rounded-md m-2 w-100 h-36 shadow-md flex items-center justify-center">
              <Image src={"/images/Group25.png"} width={100} height={50} />
            </div>
            <div className="p-3 bg-white border rounded-md m-2 w-100 h-36 shadow-md flex items-center justify-center">
              <Image src={"/images/Group5690.png"} width={100} height={50} />
            </div>
            <div className="p-3 bg-white border rounded-md m-2 w-100 h-36 shadow-md flex items-center justify-center">
              <Image src={"/images/Group5693.png"} width={100} height={50} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCustomer;
