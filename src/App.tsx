import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Start } from "./components/StartBar";
import { Desktop } from "./components/Desktop";
import { StartMenu } from "./components/StartMenu";

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
        <div className="min-h-screen flex flex-col justify-between">
          <Desktop />

          <StartMenu visible={startMenuDesktop} />
          <Start onSubmit={handleStartMenu} />
        </div>
      </section>
    </>
  );
}

export default App;
