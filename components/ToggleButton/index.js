import { useState } from "react";

export default function ToggleButton() {
    const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className="flex items-center cursor-pointer" onClick={() => setToggle(!toggle)}>
        
          {/* toggle */}
          <div className="relative">
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
      </div>
    </>
  );
}
