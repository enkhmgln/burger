import React from "react";
import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";

function App() {
  return (
    <div className={css.container}>
      <Toolbar />
      <main className={css.main}>
        <BurgerPage />
      </main>
    </div>
  );
}

export default App;
