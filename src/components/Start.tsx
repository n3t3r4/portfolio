import { useState } from "react";
import windowsLogo from "../assets/Windows_Logo_(1992-2001).png";

export function Start() {
  const [startMenu, setStartMenu] = useState(false);

  return (
    <div className="bg-[#C0C0C0] border-t-[1px] border-solid border-white flex">
      <div
        className={
          startMenu
            ? `shadow-inner shadow-black cursor-pointer`
            : `cursor-pointer`
        }
        onClick={() => setStartMenu(!startMenu)}
      >
        <div
          className={
            startMenu
              ? `flex m-1  items-center p-1 border-dotted border-2 border-black`
              : `flex m-2  items-center `
          }
        >
          <img src={windowsLogo} className="max-w-[30px] select-none" />
          <span className="font-bold mb-[-4px] select-none pr-1">Start</span>
        </div>
      </div>
    </div>
  );
}
