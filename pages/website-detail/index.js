
import React from "react";
import Image from "next/image";
export default function() {
 
  return (
    <>
      <div className="w-full h-auto py-12 font-['Inter']">
      <div className="container w-full items-center mx-auto">
        <div className="flex items-center justify-between py-12">
          <h2 className="text-4xl font-bold">Project Name</h2>
          <div className="flex gap-2">
            <button className="text-center px-4 py-2 border border-gray-400 hover:border-gray-900 rounded-md text-sm">View Git Repository</button>
            <button className="text-center px-4 py-2 bg-gray-200 border hover:border-gray-900 rounded-md text-sm">Visit</button>
          </div>
        </div>
        <div className="border-b border-gray-500"></div>
        <div className="flex flex-col gap-8 py-12">
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Production Deployment</h2>
                    <p className="text-md text-gray-600">The deployment that is available to your visitors.</p>
                </div>
                <div className="flex gap-2">
                <button className="text-center px-4 py-2 border border-gray-400 hover:border-gray-900 rounded-md text-sm">View Build Logs</button>
                <button className="text-center px-4 py-2 border border-gray-400 hover:border-gray-900 rounded-md text-sm">View Domains</button>
                <div className="relative">
                <img src="https://avatars.githubusercontent.com/akramnarejo?s=64" className="w-8 rounded-full border"/>
                <svg className="absolute top-6 left-0" aria-label="github" height="14" viewBox="0 0 14 14" width="14" color="currentColor"><path d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z" fill="#000" fillRule="nonzero"></path></svg>
                </div>
                </div>
            </div>
            <div></div>
        </div>
      </div>
      </div>
    </>
  );
}


