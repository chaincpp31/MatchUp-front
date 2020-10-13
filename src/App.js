import React from 'react';
import Navbar from "./components/Navbar";
import InformationEvent from "./components/InformationEvent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes";

function App() {
  return (
    <div>
    <Navbar />
    <InformationEvent />
    </div>

  );
}

export default App;
