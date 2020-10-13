import React, {Suspense} from 'react';
import Navbar from "./components/Navbar";
import InformationEvent from "./components/InformationEvent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Navbar />
        <Suspense fallback="...loading">
          <switch>
            {Object.keys(routes).map((routeKey) => (
              <Route key={routeKey} {...routes[routeKey]} />
            ))}
          </switch>
        </Suspense>
      </Router>
      <InformationEvent />
    </>
  );
}

export default App;
