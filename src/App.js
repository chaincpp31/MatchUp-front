import React, { Suspense, useState, useEffect } from 'react'
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

// import Home from './pages/Home';
// import Register from './pages/Register'
// import CreateEvent from './pages/CreateEvent';

function App() {
  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null
  });

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
        <Navbar setSession={setSession} ></Navbar>
        <GlobalStyle />
        <Suspense fallback="...loading">
          <Switch>
            {Object.keys(routes).map(routeKey => (
              <Route key={routeKey} {...routes[routeKey]} />
            ))}
          </Switch>
              {session.isLoggedIn ? (
              <>
                <Register setSession={setSession} />
                <h1>
                  Hell! {session.currentUser && session.currentUser.email}
                </h1>
                <button type="button" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <div>try again</div>
                <Login setSession={setSession} />
              </>
            )}
        </Suspense>
      </Router>
      {/* <Footer/> */}
      {/* <Register/> */}
      {/* <InformationEvent /> */}
    </>
  )
}

export default withHelmet('MatchUp') (App);
