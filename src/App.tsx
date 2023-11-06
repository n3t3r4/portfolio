import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Start } from "./components/Start";
import { Desktop } from "./components/Desktop";

function App() {
  return (
    <>
      <section className="bg-[#008080]">
        <div className="min-h-screen flex flex-col justify-between">
          <Desktop />
          <Start />
        </div>
      </section>
    </>
  );
}

export default App;
