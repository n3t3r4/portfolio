import { useState } from "react";
import windowsLogo from "../assets/Windows_Logo_(1992-2001).png";
import soundLogo from "../assets/som.png";
import soundOffLogo from "../assets/som desativado.png";

export const Start = ({ onSubmit }: any) => {
  const date = new Date();
  const [startMenu, setStartMenu] = useState(false);
  const [sound, setSound] = useState(true);

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
        <div className="flex items-center mx-4 my-2">
          <img src={windowsLogo} className="max-w-[30px] select-none" />
          <span className="font-bold mb-[-4px] select-none pr-1">Start</span>
        </div>
      </div>
      <div className="flex items-center p-2 pt-3 pr-4 shadow-inner cursor-default select-none shadow-black">
        <img
          src={sound ? soundLogo : soundOffLogo}
          className="max-w-[30px] cursor-pointer"
          onClick={() => setSound(!sound)}
        />
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
