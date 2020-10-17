import React, {Suspense} from 'react';
import Navbar from "./components/Navbar";
// import InformationEvent from "./pages/InformationEvent";
// import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import routes from "./config/routes";
import withHelmet from "./utils/with-Helmet";
import GlobalStyle from './components/GlobalStyle';
import Footer from './components/Footer';

import Home from './pages/Home';
import Register from './pages/Register'

function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
        <Navbar />
        {/* <Suspense fallback="...loading"> */}
          <switch>


            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register}/>


            {/* {Object.keys(routes).map((routeKey) => ( */}
              {/* <Route key={routeKey} {...routes[routeKey]} /> */}
            {/* ))} */}
          </switch>
        {/* </Suspense> */}
      </Router>
      <Footer/>
      {/* <Register/> */}
      {/* <InformationEvent /> */}
    </>
  );
}

export default withHelmet('MatchUp') (App);
