import { useState } from "react";
import windowsLogo from "../assets/Windows_Logo_(1992-2001).png";
import soundLogo from "../assets/som.png";

export const Start = ({ onSubmit }: any) => {
  const date = new Date();
  const [startMenu, setStartMenu] = useState(false);

  const handleStartMenu = () => {
    setStartMenu(!startMenu);
    onSubmit(startMenu);
  };

  return (
    <div className="bg-[#C0C0C0] border-t-[1px] border-solid border-white flex justify-between">
      <div
        className={
          startMenu
            ? `shadow-inner shadow-black cursor-pointer`
            : `cursor-pointer`
        }
        onClick={handleStartMenu}
      >
        <div className="flex my-2 mx-4 items-center">
          <img src={windowsLogo} className="max-w-[30px] select-none" />
          <span className="font-bold mb-[-4px] select-none pr-1">Start</span>
        </div>
      </div>
      <div className="flex items-center shadow-inner shadow-black p-2 pr-4 cursor-default select-none">
        <img src={soundLogo} className="max-w-[30px]" />
        <span>
          {date.getHours()}:
          {date.getMinutes().toString().length === 1
            ? "0" + date.getMinutes()
            : date.getMinutes()}
        </span>
      </div>
    </div>
  );
};
