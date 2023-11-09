import React, { Component } from "react";
import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import { Route, Routes } from "react-router-dom";
import OrderPage from "../OrderPage";
import ShippingPage from "../ShippingPage";
import ContactData from "../../components/ContactData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showSideBar: false,
    };
  }
  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSideBar: !prevState.showSideBar };
    });
  };

  render() {
    return (
      <div className={css.container}>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar
          showSideBar={this.state.showSideBar}
          toggleSideBar={this.toggleSideBar}
        />
        <main className={css.main}>
          <Routes>
            <Route path="/" Component={BurgerPage} />
            <Route path="/shipping" Component={ShippingPage} />
            <Route path="/orders" Component={OrderPage} />
          </Routes>
        </main>
      </div>
    );
  }
}
export default App;
