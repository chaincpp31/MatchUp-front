import React, {Suspense} from 'react';
import Navbar from "./components/Navbar/index";
// import InformationEvent from "./pages/InformationEvent";
// import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import routes from "./config/routes";
import withHelmet from "./utils/with-Helmet";
import GlobalStyle from './components/GlobalStyle';
import Footer from './components/Footer';
import routes from './config/routes'

// import Home from './pages/Home';
// import Register from './pages/Register'
// import CreateEvent from './pages/CreateEvent';

function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
        <Navbar />
        <Suspense fallback="...loading">
          <Switch>
            {Object.keys(routes).map((routeKey) => (
               <Route key={routeKey} 
               {...routes[routeKey]} 
              /> 
              ))} 
          </Switch>
        </Suspense>
      </Router>
      {/* <Footer/> */}
      {/* <Register/> */}
      {/* <InformationEvent /> */}
    </>
  );
}

export default withHelmet('MatchUp') (App);
