import React from "react";
import Card from "./Card";

export default function CardContainer(){
    return(

       
        <div className="grid mt-3 py-2 gap-x-4 gap-y-1 xs:place-items-center grid-rows-1 sm:place-items-center xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 maincontainer mx-auto">
           <Card />
           <Card />
           <Card />
           <Card />
        </div>
    )
}