import React from "react";
import Link from "next/link";
export default function Git() {
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
                <h3 className="text-xl font-semibold">
                  Connected Git Repository
                </h3>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="font-medium">
                    Seamlessly create Deployments for any commits pushed to your
                    Git repository.
                  </p>
                  <div className="flex justify-between items-center p-4 border border-gray-400 rounded-md">
                    <div className="flex items-center gap-4">
                      <svg
                        aria-label="github"
                        height="24"
                        viewBox="0 0 14 14"
                        width="24"
                      >
                        <path
                          d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                          fill="currentColor"
                          fillRule="nonzero"
                        ></path>
                      </svg>
                      <div>
                        <p className="font-medium flex gap-1 items-center">
                          <Link href="#">username/xyz-project</Link>
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
                        <p className="text-gray-600 font-normal">
                          Connected 4d ago
                        </p>
                      </div>
                    </div>
                    <button className="border border-gray-400 hover:border-gray-900 text-center text-sm px-4 h-8 rounded-md">Disconnect</button>
                  </div>
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-200 w-full rounded-b-md flex items-center justify-between">
                <div className="flex gap-1">
                  <p>Learn more about</p>{" "}
                  <p className="text-[#0073cf] flex gap-1 items-center">
                    <Link href="#">Vercel for Git</Link>
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
            </div>

            <div className="border border-gray-400 rounded-md">
              <div className="border-b p-8">
                <h3 className="text-xl font-semibold">Production Branch</h3>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="font-medium">
                    By default, every commit pushed to the main branch will
                    trigger a Production Deployment instead of the usual Preview
                    Deployment. You can switch to a different branch here.
                  </p>
                  <div className="flex flex-col gap-[4PX]">
                    <p className="text-sm text-gray-600 font-medium">
                      BRANCH NAME
                    </p>
                    <input
                      type="text"
                      placeholder="main"
                      defaultValue="master"
                      className="border border-gray-400 rounded-md p-2 w-1/3"
                    />
                  </div>
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-200 w-full rounded-b-md flex items-center justify-between">
                <div className="flex gap-1">
                  <p>Learn more about</p>{" "}
                  <p className="text-[#0073cf] flex gap-1 items-center">
                    <Link href="#">Production Branch</Link>
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
                  Save
                </button>
              </div>
            </div>

            <div className="border border-gray-400 rounded-md">
              <div className="border-b p-8">
                <h3 className="text-xl font-semibold">Deploy Hooks</h3>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="font-medium">
                  Deploy hooks are unique URLs that allow you to trigger a deployment of a given branch.
                  </p>
                  <p className="font-medium">This project does not have any deploy hooks.</p>
                  <div className="flex flex-col gap-[4PX]">
                    <p className="text-gray-900 font-semibold">
                      Create Hook
                    </p>
                    <div className="flex justify-between items-center w-full">
                    <input
                      type="text"
                      placeholder="My Example Hook"
                      className="border border-gray-400 rounded-md p-2 w-[50%]"
                    />
                    <input
                      type="text"
                      placeholder="main"
                      className="border border-gray-400 rounded-md p-2 w-[20%]"
                    />
                    <button className="bg-gray-900 rounded text-center text-sm text-white h-[42px] w-[20%]">Create Hook</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-200 w-full rounded-b-md flex items-center justify-between">
                <div className="flex gap-1">
                  <p>Learn more about</p>{" "}
                  <p className="text-[#0073cf] flex gap-1 items-center">
                    <Link href="#">Deploy Hooks</Link>
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
                  Save
                </button>
              </div>
            </div>

            <div className="border border-gray-400 rounded-md">
              <div className="border-b p-8">
                <h3 className="text-xl font-semibold">Ignored Build Step</h3>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex flex-col gap-4">
                    <p className="font-medium">
                      When a commit is pushed to the Git repository that is
                      connected with your Project, its SHA will determine if a
                      new Build has to be issued. If the SHA was deployed
                      before, no new Build will be issued.
                    </p>
                    <p className="font-medium">
                      You can customize this behavior with a command that exits
                      with code 1 (new Build needed) or code 0.
                    </p>
                  </div>
                  <div className="flex flex-col gap-[4PX]">
                    <p className="text-sm text-gray-600 font-medium">COMMAND</p>
                    <input
                      type="text"
                      placeholder="git diff --quit HEAD^ HEAD ./"
                      className="border border-gray-400 rounded-md p-2 w-1/3"
                    />
                  </div>
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-200 w-full rounded-b-md flex items-center justify-between">
                <div className="flex gap-1">
                  <p>Learn more about</p>{" "}
                  <p className="text-[#0073cf] flex gap-1 items-center">
                    <Link href="#">Ignored Build Step</Link>
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
                <button className="border border-gray-400 bg-gray-200 text-gray-600 rounded-md px-6 py-[4px] text-center">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
