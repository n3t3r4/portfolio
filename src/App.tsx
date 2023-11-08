import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Start } from "./components/StartBar";
import { Desktop } from "./components/Desktop";
import { StartMenu } from "./components/StartMenu";
import { Window } from "./components/Window";

function App() {
  const [startMenuDesktop, setStartMenuDesktop] = useState(Boolean);

  const handleStartMenu = (startMenu: Boolean) => {
    setStartMenuDesktop(Boolean(!startMenu));
  };

  useEffect(() => {
    console.log(startMenuDesktop);
  }, [startMenuDesktop]);

  return (
    <>
      <section className="bg-[#008080]">
        <div className="flex flex-col min-h-screen max-md:min-h-[94vh]">
          <Desktop />
          {/* <Window /> */}
          <StartMenu visible={startMenuDesktop} />
          <Start onSubmit={handleStartMenu} />
        </div>
      </section>
    </>
  );
}

export default App;
