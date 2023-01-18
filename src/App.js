import React from "react";
import CandyDispenser from "./components/Extras/CandyDispenser";

import "./styles.css";
// export const userContext = React.createContext();
// export const collageContext = React.createContext();
// export const CountContext = React.createContext();

export default function App() {
  return (
    <div className="app">
      <CandyDispenser />
    </div>
  );
}
