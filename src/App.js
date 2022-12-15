import React from "react";
import HomePage from "./pages/home/HomePage";
import sl from "./styles/App.module.scss";

function App() {
  return (
    <div className={sl.App}>
      <HomePage/>
    </div>
  );
}

export default App;
