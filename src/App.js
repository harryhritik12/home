import React from "react";
import { BrowserRouter } from "react-router-dom"; 
import Home from "./page/home"; 

function App() {
  return (
    <BrowserRouter> {/* Wrap the entire app */}
      <div className="App">
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
