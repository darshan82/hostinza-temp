import React from "react";
import Link from "next/link";
export default function Variables() {
  return (
    <>
      <div className="w-[70%] mt-12">
      <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">Environment Variables</h2>
            <p>In order to provide your Deployment with Environment Variables at Build and Runtime, you may enter them right here, for the Environment of your choice.</p>
            <p>A new Deployment is required for your changes to take effect.</p>
          </div>


          <div className="flex flex-col gap-8">
            <div className="border border-gray-400 rounded-md flex flex-col gap-4 p-4 w-full bg-gray-100 mt-8">
                <h3 className="text-sm font-semibold">Add New</h3>
                <div className="border-b border-gray-400"></div>
                <div className="flex items-start justify-between w-full">
                    <div className="flex flex-col gap-2 w-[49%]">
                        <div className=" text-sm flex flex-col gap-1">
                            <label htmlFor="name" className="text-gray-600">NAME</label>
                            <input type='text' id='name' placeholder='EXAMPLE_NAME'  className="border border-gray-600 bg-gray-100 rounded-md p-2 w-full"/>
                        </div>
                        <div className=" text-sm flex flex-col gap-1">
                            <label htmlFor="value" className="text-gray-600">VALUE</label>
                            <textarea rows={3} type='text' id='value' placeholder="SKE23423KJ23" className="border border-gray-600 bg-gray-100 rounded-md resize-none p-2 w-full" />
                        </div>
                    </div>

                    <div className="w-[49%]">
                        <p className="text-sm text-gray-600">ENVIRONMENT</p>
                        <div className="flex gap-1 border-b border-gray-400 py-1">
                            <input type='checkbox' id='production'/>
                            <label htmlFor="production">Production</label>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-400 py-1">
                            <div className="flex gap-1">
                                <input type='checkbox' id='preview' />
                                <label>Preview</label>
                            </div>
                            <p className="text-[#0073cf]"><Link href='#'>Select Custom Branch</Link></p>
                        </div>
                        <div className="py-1 flex gap-1">
                            <input type='checkbox' id='development' />
                            <label htmlFor="development">Development</label>
                        </div>
                    </div>
                </div>
                <div className="border-b border-gray-400"></div>
                <div className="w-full rounded-b-md flex items-center justify-between">
                <div className="flex gap-1">
                  <p>Learn more about</p>{" "}
                  <p className="text-[#0073cf] flex gap-1 items-center">
                    <Link href="#">Environment Variables</Link>
                    <svg
                      data-testid="geist-icon"
                      fill="none"
                      height="1em"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="1em"
                      className="link_externalIcon__lLA3x"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </p>
                </div>
                <button className=" bg-[#0070F3] text-white rounded-md px-6 py-[4px] text-center">
                  Add
                </button>
              </div>
            </div>

            <div className="border border-gray-400 rounded-md flex items-center p-4 w-full bg-gray-100">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="source" />
                <label htmlFor="source">Automatically expose</label>
                <p className="text-[#0073cf] flex gap-1 items-center">
                  <Link href="#">System Environment Variables</Link>
                  <svg
                    data-testid="geist-icon"
                    fill="none"
                    height="1em"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="1em"
                    className="link_externalIcon__lLA3x"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </p>
              </div>
            </div>

            <div className="border-b border-gray-400"></div>

            <div className="flex justify-between items-center w-full bg-gray-100">
              <div className="flex items-center border border-gray-400 rounded-md p-2 h-[42px] w-[48%]">
                <svg
                  data-testid="geist-icon"
                  fill="none"
                  height="20"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
                  <path d="M16 16l4.5 4.5"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-2 outline-none w-full bg-gray-100"
                />
              </div>
              <div className="border border-gray-400 rounded-md py-2 w-[25%]">
                <select name="updated" className="w-full h-full">
                  <option value="">All Environments</option>
                  <option value="">Production</option>
                  <option value="">Preview</option>
                  <option value="">Development</option>
                </select>
              </div>
              <div className="border border-gray-400 rounded-md py-2 w-[25%]">
                <select name="updated" className="w-full h-full">
                  <option value="">Last Updated</option>
                  <option value="">Name</option>
                  <option value="">Type</option>
                </select>
              </div>
            </div>

            <div className="border border-gray-400 rounded-md flex flex-col items-center justify-center gap-4 p-8 w-full bg-gray-100">
              <h3 className="font-semibold">No Environment Variables Added</h3>
              <p className="font-medium text-center">
                Customize the behavior of your application based on the phase of
                the Develop. Preview. Ship. workflow that it is in.
              </p>
            </div>
          </div>
      </div>
    </>
  );
}
