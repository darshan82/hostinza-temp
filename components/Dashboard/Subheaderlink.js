import React from "react";
import Link from "next/link";

export default function SubHeaderLink({active,text,path}){
    return(
        <div className={`lg:py-2 xl:py-2 md:py-2 py-1 ${active ? 'border-b-2 border-gray-500' : ''}`}>
            <Link href={path}>
              <li className="text-sm md:text-base xl:text-base lg:text-base sm:text-base  lg:px-1 lg:py-[2px] lg:mx-2 md:px-1 md:py-[2px] md:mx-2 xl:px-1 xl:py-[2px] xl:mx-2 px-1 py-[1px] mx-1 hover:bg-gray-400 hover:text-white rounded-md transition ease-in-out duration-300 cursor-pointer  text-gray-500">
                {text}
              </li>
            </Link>
            </div>
    )
}