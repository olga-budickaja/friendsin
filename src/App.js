import React from "react";
import sl from "./styles/App.module.scss";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div className={sl.App}>
       <AppRouter/>
    </div>
  );
}

export default App;
