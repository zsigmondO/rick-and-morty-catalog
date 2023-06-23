import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./App.css";
import MainNavbar from "./view/components/MainNavbar";

function App() {
  return (
    <div className="App">
      <MainNavbar/>
      <span>Hello World</span>
    </div>
  );
}

export default App;
