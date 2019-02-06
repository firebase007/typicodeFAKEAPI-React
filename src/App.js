import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "./utils/router";

const App = () => <BrowserRouter>
  {renderRoutes(Routes)}
</BrowserRouter>;

export default App;
