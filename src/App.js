import React from "react";
import HomePage from "./pages/home/HomePage";
import sl from "./styles/App.module.scss";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className={sl.App}>
        {/*<Login />*/}
      <HomePage/>
    </div>
  );
}

export default App;
