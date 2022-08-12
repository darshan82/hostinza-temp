import React from "react";
import Link from "next/link";
export default function Deployment() {
  return (
    <>
      <div className="w-full h-auto py-12 font-['Inter']">
        <div className="container w-full items-center mx-auto">
          <div className="flex items-center justify-between py-12">
            <h2 className="text-4xl font-bold">Deployments</h2>
          </div>
          <div className="border-b border-gray-500"></div>
          <div className="flex flex-col gap-8 py-12">
            <div className="flex justify-between items-center border border-gray-400 rounded-md p-4">
              <div className="flex gap-8 items-center">
              <div className="flex gap-4 items-center">
                <div>
                  <p className="text-sm font-bold">
                    <Link href="#">
                      https://vercel.com/akramnarejo/savings-calcula...
                    </Link>
                  </p>
                  <p className="text-sm text-gray-600">Production (Current)</p>
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <span className="bg-sky-500 w-[10px] h-[10px] rounded-full"></span>
                    <p className="font-medium text-gray-600">Ready</p>
                  </div>
                  <p className="text-gray-600 text-sm">1m 13s</p>
                </div>
              </div>
              <div>
                <p className="text-gray-600 font-medium text-sm hover:text-gray-900">
                  <Link href="#">fix: package.json will replace homepage name.</Link>
                </p>
                <div className="flex gap-[4px] items-center">
                  <svg
                    className="text-gray-600"
                    data-testid="geist-icon"
                    fill="none"
                    height="16"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <path d="M6 3v12"></path>
                    <circle cx="18" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M18 9a9 9 0 01-9 9"></path>
                  </svg>
                  <span className="text-gray-600 text-sm"><Link href="#">master</Link></span>
                </div>
              </div>
              </div>
              <div className="flex gap-2 items-center">
                <p>3d ago by username</p>
                <div className="relative">
                  <img
                    src="https://avatars.githubusercontent.com/akramnarejo?s=64"
                    alt=""
                    className="w-8 rounded-full border"
                  />
                  <svg
                    className="absolute top-6 left-0"
                    aria-label="github"
                    height="14"
                    viewBox="0 0 14 14"
                    width="14"
                    color="currentColor"
                  >
                    <path
                      d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                      fill="#000"
                      fillRule="nonzero"
                    ></path>
                  </svg>
                </div>
                <svg
                  className="cursor-pointer"
                  data-testid="geist-icon"
                  fill="none"
                  height="18"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <circle cx="12" cy="12" r="1" fill="currentColor"></circle>
                  <circle cx="12" cy="5" r="1" fill="currentColor"></circle>
                  <circle cx="12" cy="19" r="1" fill="currentColor"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
