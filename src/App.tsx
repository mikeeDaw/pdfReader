import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cloud from "./assets/cloud.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen h-screen bg-cyan-100">
        {/* Upload File */}
        <div className="flex flex-col gap-1 w-1/6">
          <span className="bebas text-lg text-[#c6162b] mt-2 dark:text-[#ff7486]">
            Upload File
          </span>

          <input
            type="file"
            name="file"
            id="file"
            className="w-[0.1px] h-[0.1px] opacity-0 absolute z-0 overflow-hidden"
            accept=".csv"
          />
          <label
            htmlFor="file"
            className="bg-[#0c2c63] dark:bg-[#071b3d] cursor-pointer px-3 py-2 rounded-xl flex items-center gap-3 relative"
          >
            <span>
              <img src={Cloud} alt="Cloud" className="w-6" />
            </span>
            <span className="truncate text-sm text-white"> Upload A File</span>
            <span className="text-black opacity-90 text-[12px] absolute right-2 bottom-[-50%] dark:text-[#D8D8D8]">
              *
            </span>
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
