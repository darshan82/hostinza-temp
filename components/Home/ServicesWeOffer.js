import React from "react";
import Image from "next/image";

const ServicesWeOffer = () => {
  return (
    <>
      <div className="md:pt-20 md:pb-20 py-10">
        <div className="flex justify-evenly flex-col items-center pb-10">
          <h1 className="text-[22px] text-center md:text-[42px] text-[#15095E] font-bold">
            Deploy an instance with Vultr
          </h1>
          <p className="md:my-5 text-center px-10 text-sm md:text-[16px] text-[#6E727D] font-light">
            over <span className="font-normal">45 Million instances</span>{" "}
            deployed by thousands of clients
          </p>
        </div>
        <div className="container flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row justify-evenly w-[92vw] items-center">
          <div className="flex flex-1 flex-col justify-center text-center border rounded-lg py-10 shadow-md">
            <div className="my-4">
              <Image src={"/images/production.png"} width={100} height={100} />
            </div>
            <h3 className="text-[20px] h-24 p-4 text-[#061027] font-light">
              From prototype to production <br /> in seconds
            </h3>
            <p className="text-[16px] text-center text-[#6E727D] py-4 font-light px-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              repellendus reprehenderit aspernatur maiores mollitia amet.
            </p>
            <div className="mt-4">
              <button className="text-[#1868DD]">Expolore our API</button>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center text-center border rounded-lg py-10 shadow-md">
            <div className="my-4">
              <Image src={"/images/inifinite.png"} width={100} height={100} />
            </div>
            <h3 className="text-[20px] h-24 p-4 text-[#061027] font-light">
              Infinite Possibilities
            </h3>
            <p className="text-[16px] text-center text-[#6E727D] py-4 font-light px-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              repellendus reprehenderit aspernatur maiores mollitia amet.
            </p>
            <div className="mt-4">
              <button className="text-[#1868DD]">View operating Systems</button>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center text-center border rounded-lg py-10 shadow-md">
            <div className="my-4">
              <Image src={"/images/secure.png"} width={100} height={100} />
            </div>
            <h3 className="text-[20px] h-24 p-4 text-[#061027] font-light">
              Secure and reliable
            </h3>
            <p className="text-[16px] text-center text-[#6E727D] py-4 font-light px-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              repellendus reprehenderit aspernatur maiores mollitia amet.
            </p>
            <div className="mt-4">
              <button className="text-[#1868DD]">
                Learn more about our SLA
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-20 md:pb-20 py-10">
        <div className="container flex justify-evenly flex-col items-center pb-10">
          <h1 className="text-[22px] text-center md:text-[42px] text-[#15095E] font-bold">
            Grow With A Global Community
          </h1>
          <p className="md:my-5 text-center px-10 text-sm md:text-[16px] text-[#6E727D] leading-normal font-light">
            Our community is made up of people all over the world, who are
            driven to develop software and grow businesses in the cloud. Learn
            from other cloud users through open tutorials, resources, and
            events.
          </p>
        </div>
        <div className="container flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row justify-evenly w-[92vw] items-center">
          <div className="flex flex-1 flex-col justify-center text-center border rounded-lg py-10 shadow-md">
            <div className="my-4">
              <Image src={"/images/grow1.png"} width={150} height={150} />
            </div>
            <h3 className="text-[20px] h-24 p-4 text-[#061027] font-light">
              Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
              Repellat
            </h3>
            <p className="text-[14px] text-center text-[#6E727D] py-4 font-light px-10 md:mt-16 lg:mt-8">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At.
            </p>
            <div className="mt-4">
              <button className="text-white p-2 border bg-[#15095E] rounded-md hover:scale-105 duration-500">
                Read More
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center text-center border rounded-lg py-10 shadow-md">
            <div className="my-4">
              <Image src={"/images/grow2.png"} width={150} height={150} />
            </div>
            <h3 className="text-[20px] h-24 p-4 text-[#061027] font-light">
              Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
              Repellat
            </h3>
            <p className="text-[14px] text-center text-[#6E727D] py-4 font-light px-10 md:mt-16 lg:mt-8">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At.
            </p>
            <div className="mt-4">
              <button className="text-white p-2 border bg-[#15095E] rounded-md hover:scale-105 duration-500">
                Read More
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center text-center border rounded-lg py-10 shadow-md">
            <div className="my-4">
              <Image src={"/images/grow3.png"} width={150} height={150} />
            </div>
            <h3 className="text-[20px] h-24 p-4 text-[#061027] font-light">
              Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
              Repellat
            </h3>
            <p className="text-[14px] text-center text-[#6E727D] py-4 font-light px-10 md:mt-16 lg:mt-8">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At.
            </p>
            <div className="mt-4">
              <button className="text-white p-2 border bg-[#15095E] rounded-md hover:scale-105 duration-500">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="bg-[#1868DD] text-white rounded-md p-2 px-4 font-light hover:scale-105 duration-300 mb-20">
          Join Our Community
        </button>
      </div>
    </>
  );
};

export default ServicesWeOffer;
