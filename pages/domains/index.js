import { useState } from "react";
import Layout from "../../components/Layout";
import Domain from "../../components/Domains/domain";
export default function Index() {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="w-full h-auto pt-36 font-['Inter'] bg-black">
        <div className="container w-full items-center mx-auto h-[620px]">
          <div
            className={`${
              searchText.length > 1
                ? "w-full h-[100%] flex flex-col items-center justify-start gap-8"
                : "w-full h-[100%] flex flex-col items-center justify-center gap-8"
            }`}
          >
            <h1
              className={`${
                searchText.length > 1
                  ? "hidden text-white text-4xl font-bold"
                  : "block text-white text-4xl font-bold"
              }`}
            >
              Find Your Perfect Domain
            </h1>
            <div
              className={`${
                searchText.length > 1
                  ? "border-b border-gray-600 w-full px-8 py-4"
                  : "border-b px-8 py-4"
              }`}
            >
              <div className="flex items-center gap-2 justify-center">
                <svg
                  className="text-gray-300"
                  data-testid="geist-icon"
                  fill="none"
                  height="16"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
                  <path d="M16 16l4.5 4.5"></path>
                </svg>
                <input
                  type="text"
                  value={searchText}
                  placeholder="Search for domains..."
                  className="bg-inherit text-white outline-none"
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            </div>
            <div
              className={`${
                searchText.length > 1
                  ? "block w-full flex flex-col justify-start py-8"
                  : "border-2 hidden py-8"
              }`}
            >
              <h3 className="text-xl text-white text-semibold">Top Results</h3>
              <div className="flex gap-8 py-8 flex-wrap w-full text-white">
                <Domain domain={searchText}/>
                <Domain domain={searchText}/>
                <Domain domain={searchText}/>
                <Domain domain={searchText}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Index.Layout = Layout;
