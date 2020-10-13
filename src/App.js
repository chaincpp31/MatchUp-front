import React, {Suspense} from 'react';
import Navbar from "./components/Navbar";
import InformationEvent from "./pages/InformationEvent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes";
import withHelmet from "./utils/with-Helmet"

function App() {
  return (
    <>
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

export default withHelmet('MatchUp') (App);
