import React from "react";
import Main from "./components/Main";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.container}>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
