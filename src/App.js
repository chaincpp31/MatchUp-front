import React, { Suspense, useState, useEffect,useContext } from 'react'
import auth from './components/firebase'
import Navbar from "./components/Navbar/index";
// import InformationEvent from "./pages/InformationEvent";
// import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import routes from "./config/routes";
import withHelmet from "./utils/with-Helmet";
import GlobalStyle from './components/GlobalStyle';
import Footer from './components/Footer';
import routes from './config/routes'
import Register from './Register/Register';
import Login from './components/Login'
import CreateEvent from './CreateEvent/CreateEvent';
import Home from './pages/Home'
import { StoreContext} from './Context/store'
// import { ReactComponent as Check } from './assets'

// import Home from './pages/Home';
// import Register from './pages/Register'
// import CreateEvent from './pages/CreateEvent';

function App() {
  const {session:[session,setSession]} = useContext(StoreContext)

  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null
        });
      }
    });

    return () => {
      handleAuth();
    };
  }, []);

  const handleLogout = () => {
    auth.signOut().then(response => {
      setSession({
        isLoggedIn: false,
        currentUser: null
      });
    });
  };
  
  return (
    <>
      <Router>
        <Navbar setSession={setSession}></Navbar>
        <GlobalStyle />
        <Suspense fallback="...loading">
          <Switch>
            {Object.keys(routes).map(routeKey => (
              <Route key={routeKey} {...routes[routeKey]}>
                {session.isLoggedIn ? (
                  <>
                    <CreateEvent session={setSession} />
                   
                  </>
                ) : (
                  <>
                    <Home setSession={setSession} />
                  </>
                )}
              </Route>
            ))}
          </Switch>
        </Suspense>
      </Router>
      <Footer />
      {/* <Register/> */}
      {/* <InformationEvent /> */}
    </>
  )
}

export default withHelmet('MatchUp') (App);
