import React, {Suspense} from 'react';
import Navbar from "./components/Navbar";
// import InformationEvent from "./pages/InformationEvent";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes";
import withHelmet from "./utils/with-Helmet"
import GlobalStyle from './components/GlobalStyle'

function App() {
  return (
    <>
    <GlobalStyle/>
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
      <Register/>
      {/* <InformationEvent /> */}
    </>
  );
}

export default withHelmet('MatchUp') (App);
