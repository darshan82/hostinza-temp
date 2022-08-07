import React from 'react'
import DetailsBox from './DetailsBox'
import InstructionsBox from './InstructionsBox'
import OverViewBox from './OverViewBox'

export default function DetailsContainer() {
  return (
    <div className='min-h-[90vh] w-[100%]'>
        <div className="flex align-middle justify-between w-full xs:flex-col sm:flex-col md:flex-row">
         <div className="lg:w-[60%] md:w-[55%] xs:w-[100%] sm:w-[100%] xs:px-4 sm:px-4 md:px-0">
         <OverViewBox />
         <InstructionsBox />
         </div>
         <div className="lg:w-[30%] md:w-[40%] xs:w-[100%] sm:w-[100%] xs:px-4 sm:px-4 md:px-0">
         <DetailsBox />
         </div>
        </div>
    </div>
  )
}
