import React, { useState } from "react";
import Link from "next/link";
export default function () {
  const [toggle, setToggle] = useState(false);
  const handleChange = (e) => {
    if (e.target.checked) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <>
      <div className="w-full h-auto py-12 font-['Inter']">
        <div className="container w-full items-center mx-auto">
          <div className="flex items-center justify-between py-12">
            <h2 className="text-4xl font-bold">Project Settings</h2>
          </div>
          <div className="border-b border-gray-500"></div>

          <div className="flex flex-col gap-8">
            <div className="border border-gray-400 rounded-md mt-12">
              <div className="border-b p-8">
                <h3 className="text-xl font-semibold">Project Name</h3>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="font-medium">
                    Used to identify your Project on the Dashboard, Vercel CLI,
                    and in the URL of your Deployments.
                  </p>
                  <div className="flex border border-gray-400 rounded-md">
                    <span className="bg-gray-200 p-2 border-r rounded-l-md">
                      vercel.com/username/
                    </span>
                    <input
                      className="p-2 w-full rounded-r-md"
                      type="text"
                      defaultValue="hostinza-temp"
                    />
                  </div>
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-200 w-full rounded-b-md flex items-center justify-between">
                <div className="flex gap-1">
                  <p>Learn more about</p>{" "}
                  <p className="text-[#0073cf] flex gap-1 items-center">
                    <Link href="#">Project Name</Link>
                    <svg
                      data-testid="geist-icon"
                      fill="none"
                      height="1em"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="1em"
                      class="link_externalIcon__lLA3x"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </p>
                </div>
                <button className="border border-gray-400 bg-gray-200 text-gray-600 rounded-md px-6 py-[4px] text-center">
                  Save
                </button>
              </div>
            </div>

            <div className="border border-gray-400 rounded-md">
              <div className="border-b p-8">
                <h3 className="text-xl font-semibold">
                  Build & Development Settings
                </h3>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="font-medium">
                    When using a framework for a new project, it will be
                    automatically detected. As a result, several project
                    settings are automatically configured to achieve the best
                    result. You can override them below.
                  </p>
                  <div className="flex flex-col gap-[4px] rounded-md">
                    <span className="text-gray-600 text-sm font-medium">
                      FRAMEWORK RESET
                    </span>
                    <div className="border-2 border-gray-400 rounded-md">
                      <select name="framework" className=" p-[5px] w-full">
                        <option>Create React App</option>
                        <option>Angular</option>
                        <option>Vue</option>
                      </select>
                    </div>
                  </div>
                  <div className="border-b border-gray-600 my-2"></div>
                  <div className="">
                    <div className="mt-4 flex items-center justify-between gap-8 box-border">
                      <div className="flex gap-4 items-center w-[25%]">
                        <h4 className="text-sm font-medium">BUILD COMMAND</h4>
                        <svg
                          data-testid="geist-icon"
                          fill="none"
                          height="18"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="18"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"></path>
                          <circle cx="12" cy="17" r=".5"></circle>
                        </svg>
                      </div>
                      <input
                        type="text"
                        value="`npm run build` or `react-scripts build`"
                        readOnly
                        className="border border-gray-600 rounded-md bg-gray-400 w-[60%] p-2"
                      />
                      <div className="flex items-center justify-end w-[15%] gap-8">
                        <h4 className="text-sm font-medium">OVERRIDE</h4>
                        <div className="">
                          <label
                            for="toggleB"
                            className="flex items-center cursor-pointer"
                          >
                            {/* toggle */}
                            <div className="relative">
                              {/* input */}
                              <input
                                type="checkbox"
                                name="check"
                                id="toggleB"
                                className="sr-only"
                                onChange={handleChange}
                              />
                              {/* line*/}
                              <div
                                className={`${
                                  toggle
                                    ? "block w-14 h-8 bg-[#0070F3] rounded-full"
                                    : "block w-14 h-8 bg-gray-600 rounded-full"
                                }`}
                              ></div>
                              {/*dot*/}
                              <div
                                className={`${
                                  toggle
                                    ? "absolute left-1 top-1 bg-gray-900 w-6 h-6 rounded-full transition translate-x-6"
                                    : "absolute left-1 top-1 bg-gray-900 w-6 h-6 rounded-full transition"
                                }`}
                              ></div>
                            </div>
                            {/* label */}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-8 box-border w-full">
                      <div className="flex gap-4 items-center w-[25%]">
                        <h4 className="text-sm font-medium">BUILD COMMAND</h4>
                        <svg
                          data-testid="geist-icon"
                          fill="none"
                          height="18"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="18"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"></path>
                          <circle cx="12" cy="17" r=".5"></circle>
                        </svg>
                      </div>
                      <input
                        type="text"
                        value="build"
                        readOnly
                        className="border border-gray-600 rounded-md bg-gray-400 w-[60%] p-2"
                      />
                      <div className="flex items-center justify-end gap-8 w-[15%]">
                        <h4 className="text-sm font-medium">OVERRIDE</h4>
                        <div className="">
                          <label
                            for="toggleB"
                            className="flex items-center cursor-pointer"
                          >
                            {/* toggle */}
                            <div className="relative">
                              {/* input */}
                              <input
                                type="checkbox"
                                name="check"
                                id="toggleB"
                                className="sr-only"
                                onChange={handleChange}
                              />
                              {/* line*/}
                              <div
                                className={`${
                                  toggle
                                    ? "block w-14 h-8 bg-[#0070F3] rounded-full"
                                    : "block w-14 h-8 bg-gray-600 rounded-full"
                                }`}
                              ></div>
                              {/*dot*/}
                              <div
                                className={`${
                                  toggle
                                    ? "absolute left-1 top-1 bg-gray-900 w-6 h-6 rounded-full transition translate-x-6"
                                    : "absolute left-1 top-1 bg-gray-900 w-6 h-6 rounded-full transition"
                                }`}
                              ></div>
                            </div>
                            {/* label */}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-8 box-border">
                      <div className="flex gap-4 items-center w-[25%]">
                        <h4 className="text-sm font-medium">BUILD COMMAND</h4>
                        <svg
                          data-testid="geist-icon"
                          fill="none"
                          height="18"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="18"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"></path>
                          <circle cx="12" cy="17" r=".5"></circle>
                        </svg>
                      </div>
                      <input
                        type="text"
                        value="`yarn install`, `pnpm install`, or `npm install`"
                        readOnly
                        className="border border-gray-600 rounded-md bg-gray-400 w-[60%] p-2"
                      />
                      <div className="flex items-center justify-end w-[15%] gap-8">
                        <h4 className="text-sm font-medium">OVERRIDE</h4>
                        <div className="">
                          <label
                            for="toggleB"
                            className="flex items-center cursor-pointer"
                          >
                            {/* toggle */}
                            <div className="relative">
                              {/* input */}
                              <input
                                type="checkbox"
                                name="check"
                                id="toggleB"
                                className="sr-only"
                                onChange={handleChange}
                              />
                              {/* line*/}
                              <div
                                className={`${
                                  toggle
                                    ? "block w-14 h-8 bg-[#0070F3] rounded-full"
                                    : "block w-14 h-8 bg-gray-600 rounded-full"
                                }`}
                              ></div>
                              {/*dot*/}
                              <div
                                className={`${
                                  toggle
                                    ? "absolute left-1 top-1 bg-gray-900 w-6 h-6 rounded-full transition translate-x-6"
                                    : "absolute left-1 top-1 bg-gray-900 w-6 h-6 rounded-full transition"
                                }`}
                              ></div>
                            </div>
                            {/* label */}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-8 box-border">
                      <div className="flex gap-4 items-center w-[25%]">
                        <h4 className="text-sm font-medium">DEVELOPMENT COMMAND</h4>
                        <svg
                          data-testid="geist-icon"
                          fill="none"
                          height="18"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="18"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"></path>
                          <circle cx="12" cy="17" r=".5"></circle>
                        </svg>
                      </div>
                      <input
                        type="text"
                        value="react-scripts start"
                        readOnly
                        className="border border-gray-600 rounded-md bg-gray-400 w-[60%] p-2"
                      />
                      <div className="flex items-center justify-end w-[15%] gap-8">
                        <h4 className="text-sm font-medium">OVERRIDE</h4>
                        <div className="">
                          <label
                            for="toggleB"
                            className="flex items-center cursor-pointer"
                          >
                            {/* toggle */}
                            <div className="relative">
                              {/* input */}
                              <input
                                type="checkbox"
                                name="check"
                                id="toggleB"
                                className="sr-only"
                                onChange={handleChange}
                              />
                              {/* line*/}
                              <div
                                className={`${
                                  toggle
                                    ? "block w-14 h-8 bg-[#0070F3] rounded-full"
                                    : "block w-14 h-8 bg-gray-600 rounded-full"
                                }`}
                              ></div>
                              {/*dot*/}
                              <div
                                className={`${
                                  toggle
                                    ? "absolute left-1 top-1 bg-gray-900 w-6 h-6 rounded-full transition translate-x-6"
                                    : "absolute left-1 top-1 bg-gray-900 w-6 h-6 rounded-full transition"
                                }`}
                              ></div>
                            </div>
                            {/* label */}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-200 w-full rounded-b-md flex items-center justify-between">
                <div className="flex gap-1">
                  <p>Learn more about</p>{" "}
                  <p className="text-[#0073cf] flex gap-1 items-center">
                    <Link href="#">Build and Development Settings</Link>
                    <svg
                      data-testid="geist-icon"
                      fill="none"
                      height="1em"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="1em"
                      class="link_externalIcon__lLA3x"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </p>
                </div>
                <button className="border border-gray-400 bg-gray-200 text-gray-600 rounded-md px-6 py-[4px] text-center">
                  Save
                </button>
              </div>
            </div>

            <div className="border border-gray-400 rounded-md">
              <div className="border-b p-8">
                <h3 className="text-xl font-semibold">Root Directory</h3>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="font-medium">
                    The directory within your project, in which your code is
                    located. Leave this field empty if your code is not located
                    in a subdirectory. A new Deployment is required for your
                    changes to take effect.
                  </p>
                  <input
                    type="text"
                    placeholder="./"
                    className="border border-gray-400 rounded-md p-2 w-1/3"
                  />
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="source" />
                    <label for="source">
                      Include source files outside of the Root Directory in the
                    </label>
                    <p className="text-[#0073cf] flex gap-1 items-center">
                      <Link href="#">Build Step</Link>
                      <svg
                        data-testid="geist-icon"
                        fill="none"
                        height="1em"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="1em"
                        class="link_externalIcon__lLA3x"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14L21 3"></path>
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-200 w-full rounded-b-md flex items-center justify-between">
                <div className="flex gap-1">
                  <p>Learn more about</p>{" "}
                  <p className="text-[#0073cf] flex gap-1 items-center">
                    <Link href="#">Root Directory</Link>
                    <svg
                      data-testid="geist-icon"
                      fill="none"
                      height="1em"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="1em"
                      class="link_externalIcon__lLA3x"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </p>
                </div>
                <button className="border border-gray-400 bg-gray-200 text-gray-600 rounded-md px-6 py-[4px] text-center">
                  Save
                </button>
              </div>
            </div>

            <div className="border border-gray-400 rounded-md">
              <div className="border-b p-8">
                <h3 className="text-xl font-semibold">Node.js Version</h3>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="font-medium">
                    The version of Node.js that is used in the Build Step and
                    for Serverless Functions. A new Deployment is required for
                    your changes to take effect.
                  </p>
                  <div className="border border-gray-400 rounded-md w-1/3">
                    <select name="nodeVersion" className="p-[5px] w-full">
                      <option value="">16.x</option>
                      <option value="">14.x</option>
                      <option value="">12.x</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-200 w-full rounded-b-md flex items-center justify-between">
                <div className="flex gap-1">
                  <p>Learn more about</p>{" "}
                  <p className="text-[#0073cf] flex gap-1 items-center">
                    <Link href="#">Node.js Version</Link>
                    <svg
                      data-testid="geist-icon"
                      fill="none"
                      height="1em"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="1em"
                      class="link_externalIcon__lLA3x"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </p>
                </div>
                <button className="border border-gray-400 bg-gray-200 text-gray-600 rounded-md px-6 py-[4px] text-center">
                  Save
                </button>
              </div>
            </div>

            <div className="border border-gray-400 rounded-md">
              <div className="border-b p-8">
                <h3 className="text-xl font-semibold">Project ID</h3>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="font-medium">
                    Used when interacting with the Vercel API.
                  </p>
                  <div className="border border-gray-400 rounded-md w-1/3 p-2 flex justify-evenly items-center">
                    <input
                      type="text"
                      value="prj_Zc4uKDhKzgRsAWeXclbhor1zWnBG"
                      readOnly
                      className="w-full outline-none"
                    />
                    <svg
                      data-testid="geist-icon"
                      fill="none"
                      height="22"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="22"
                    >
                      <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-200 w-full rounded-b-md flex items-center justify-between">
                <div className="flex gap-1">
                  <p>Learn more about</p>{" "}
                  <p className="text-[#0073cf] flex gap-1 items-center">
                    <Link href="#">Project ID</Link>
                    <svg
                      data-testid="geist-icon"
                      fill="none"
                      height="1em"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="1em"
                      class="link_externalIcon__lLA3x"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 rounded-md">
              <div className="border-b p-8">
                <h3 className="text-xl font-semibold">Transfer Project</h3>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="font-medium">
                    Get full access to collaborative features, multiple
                    Concurrent Builds, and more powerful Serverless Functions by
                    transferring your Project to a Vercel Team.
                  </p>
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-200 w-full rounded-b-md flex items-center justify-between">
                <div className="flex gap-1">
                  <p>Learn more about</p>{" "}
                  <p className="text-[#0073cf] flex gap-1 items-center">
                    <Link href="#">Transferring Projects</Link>
                    <svg
                      data-testid="geist-icon"
                      fill="none"
                      height="1em"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="1em"
                      class="link_externalIcon__lLA3x"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </p>
                </div>
                <button className="border border-gray-400 bg-white text-gray-900 rounded-md px-6 py-[4px] text-center">
                  Transfer
                </button>
              </div>
            </div>

            <div className="border border-[#FF0000] rounded-md">
              <div className="border-b p-8">
                <h3 className="text-xl font-semibold">Delete Project</h3>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="font-medium">
                    The project will be permanently deleted, including its
                    deployments and domains. This action is irreversible and can
                    not be undone.
                  </p>
                </div>
              </div>
              <div className="border-b border-gray-400"></div>
              <div className="flex items-start gap-4 p-8">
                <img
                  src="https://www.creative-tim.com/blog/content/images/size/w960/wordpress/2021/01/blog-4-1.jpg"
                  alt=""
                  className="w-[20%] rounded-md hover:cursor-pointer hover:brightness-75 transition ease-in-out"
                />
                <div className="flex flex-col">
                  <h4 className="text-md font-medium">Project Name</h4>
                  <p className="text-md font-medium">Last updated 4d ago</p>
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-200 w-full rounded-b-md flex items-center justify-end">
                <button className="bg-[#FF0000] text-white rounded-md px-6 py-[4px] text-center">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
