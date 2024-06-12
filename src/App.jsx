import { useState, createContext, useContext } from "react";
import "./App.css";

function App() {
  return (
    <section className="main-container" style={divStyle}>
      <UserProfile />
    </section>
  );
}

export default App;
