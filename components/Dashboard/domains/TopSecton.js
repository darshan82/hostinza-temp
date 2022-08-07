import React, { useState } from "react";
import { AddDomainModel, TransferInModel } from "../../Account/billing/Model";
import Button from "./Button";

export default function TopSection(){

    const [state,setstate] = useState(false)
    const [secondstate,setsecondstate] = useState(false)

    return(
        <div className="w-full border-b-[1px] border-gray-300 py-2 font-poppins">
            <AddDomainModel state={state} setstate={setstate}/>
            <TransferInModel state={secondstate} setstate={setsecondstate}/>
        <div className="maincontainer mx-auto">
            <div className="flex align-middle justify-between xs:flex-col">
                <div>
                    <h1 className="text-3xl font-semibold text-dark-blue-2 xs:mx-2">Domains</h1>
                </div>
                <div className="flex align-middle xs:mt-3">
                    <Button text={'Buy'} />
                    <Button text={'Add'} onClick={() => setstate(true)}/>
                    <Button text={'Transfer In'} onClick={() => setsecondstate(true)}/>
                </div>
            </div>
        </div>
        </div>
    )
}