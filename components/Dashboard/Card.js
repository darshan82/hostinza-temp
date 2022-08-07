import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card() {
  return (
    <div className=" xs:w-[95%] w-[100%]  p-5 border-[1px] border-gray-300 rounded-md my-2 hover:scale-[1.02] hover:border-gray-600 cursor-pointer hover:shadow-md transition duration-200">
      <div className="flex align-middle justify-between w-full">
        <div className="flex align-middle justify-center ">
          <div className="w-6 rounded-full homeHeroGradient h-6 mr-2 self-center"></div>
          <div className="">
            <p className="text-dark-blue-2 font-semibold">Website Name</p>
            <p className="text-dark-blue-2 text-sm font-light">website.com</p>
          </div>
        </div>
        <div className="self-center">
          <div className="w-6 rounded-full border-gray-300 border-[1px] h-6"></div>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-dark-blue-2 text-sm font-light">Commit Name</p>
      </div>
      <div className="mt-5 flex align-middle">
        <p className="text-dark-blue-2 text-sm font-light">15 days ago username </p>
        <FontAwesomeIcon icon={faGithub} className="text-black ml-2 self-center"/>
      </div>
    </div>
  );
}


