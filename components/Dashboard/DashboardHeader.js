import React, { useState, useContext, useEffect } from "react";
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faCircle,
  faBarsStaggered,
  faSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import SubHeaderLink from "./Subheaderlink";
import Slider from "./Slider";
import AuthContext from "../../utils/auth-context";
import { AvatarMenu } from "../Menu";

export default function DashboardHeader() {
  const { user } = useContext(AuthContext);
  const route = useRouter();
  const [username, setUsername] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (user && user.profile) {
      setUsername(user.profile.username);
    console.log("user", user.profile);
    }
  },[user]);

  return (
    <div className="w-full bg-[#FFFFFF]">
      <Slider open={open} setOpen={setOpen} />
      {/* MAIN HEADER  */}
      <div className="mx-auto maincontainer py-1 px-1 font-poppins xs:px-2">
        <div className="flex align-middle justify-between">
          <div className="flex align-middle justify-center py-2 mt-1">
            <div>
              <div className="w-8 rounded-full bg-black h-8"></div>
            </div>
            <div>
              <p className=" text-dark-blue-2 text-2xl mx-4 opacity-25"> / </p>
            </div>
            <div className="flex align-middle justify-center">
              <div className="w-8 rounded-full homeHeroGradient h-8 mr-2"></div>
              <p className=" text-dark-blue-2 lowercase mt-1 ">{username}</p>
              {/* <div className="flex align-middle justify-center flex-col ml-5 p-0">
                        <FontAwesomeIcon icon={faAngleUp} className='text-dark-blue-2 text-[12px]'/>
                        <FontAwesomeIcon icon={faAngleDown} className='text-dark-blue-2 text-[12px]'/>
                        </div> */}
            </div>
          </div>
          <div className="p-2 relative">
            <div className="sm:hidden md:hidden lg:hidden xl:hidden">
              <FontAwesomeIcon
                icon={faBarsStaggered}
                className="text-dark-blue-2 text-2xl mt-1"
                onClick={() => setOpen(!open)}
              />
            </div>
            <ul className="sm:flex md:flex lg:flex xl:flex justify-around p-2 align-middle hidden">
              <li className="px-2 py-[2px] mx-2 transition ease-in-out rounded-md  duration-300 cursor-pointer hover:-translate-y-1 text-gray-500 hover:text-dark-blue-2">
                Feedback
              </li>
              <li className="px-2 py-[2px] mx-2 transition ease-in-out duration-300 hover:-translate-y-1 text-gray-500 hover:text-dark-blue-2 cursor-pointer">
                Changelog
              </li>
              <li className="px-2 py-[2px] mx-2 transition ease-in-out duration-300 hover:-translate-y-1 text-gray-500 hover:text-dark-blue-2 cursor-pointer">
                Support
              </li>
              <AvatarMenu />
              {/* <li className="w-8 rounded-full homeHeroGradient h-8 ml-3 cursor-pointer"></li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* END MAIN HEADER  */}

      {/* SUB HEADER  */}

      <div className="w-full border-b-[1px] border-gray-300 mb-5 mt-1 bg-[#FFFFFF] xs:my-2 xs:py-1">
        <div className="maincontainer md:mx-auto lg:mx-auto xl:mx-auto font-poppins overflow-auto no-scrollbar">
          <ul className="flex  self-start">
            <SubHeaderLink
              text="Overview"
              active={route.pathname === "/dashboard"}
              path="/dashboard"
            />
            <SubHeaderLink
              text="Integerations"
              active={false}
              path="/dashboard"
            />
            <SubHeaderLink text="Activity" active={false} path="/dashboard" />
            <SubHeaderLink
              text="Domains"
              active={route.pathname === "/dashboard/domains"}
              path="/dashboard/domains"
            />
            {/* <SubHeaderLink text="Usage" active={false} path="/dashboard"/> */}
            <SubHeaderLink
              text="Settings"
              active={route.pathname.startsWith("/account")}
              path="/account"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
