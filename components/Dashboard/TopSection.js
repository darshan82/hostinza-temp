import React, { useState } from "react";
import Button from "./Button";
import SearchBar from "./Searchbar";
import { faPerson, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {TeamModel} from "../Account/billing/Model";

export default function TopSection() {

  const [state,setstate] = useState(false)

  return (
    <div className="mx-auto xs:w-full sm:w-[90%] max-w-6xl font-poppins">
      <TeamModel state={state} setstate={setstate}/>
      <div className="flex align-middle  mx-auto">
        <SearchBar />
        <div className="flex align-middle  ml-3">
          <button onClick={() => setstate(true)} className="bg-transparent w-[180px] md:w-[140px] sm:w-[140px] lg:w-[180px] border-[2px] border-dark-blue-2 hover:scale-[1.03] hover:shadow-sm text-dark-blue-2 text-sm  rounded  transition duration-200 mr-2 xs:hidden">
            <FontAwesomeIcon
              icon={faUserGroup}
              className="text-dark-blue-2  mx-auto"
            />
            <span className="text-dark-blue-2  ml-2  text-sm mx-auto">
              Create a team
            </span>
          </button>
          <button className="bg-dark-blue-2 w-[180px] md:w-[140px] sm:w-[140px] xs:w-[50px] border-[2px] border-dark-blue-2 hover:scale-105  text-sm  rounded transition duration-200 mr-2">
            <FontAwesomeIcon icon={faPlus} className="text-light-gray " />
            <span className="text-light-gray ml-2  text-sm xs:hidden">
              New Project
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
