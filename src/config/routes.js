import { lazy } from "react";

export default {
  Home: {
    path: "/",
    exact: true,
    component: lazy(() => import("./../pages/Home")),
  },
  HomeGamer: {
    path: "/HomeGamer",
    exact: true,
    component: lazy(() => import("./../pages/HomeGamer")),
  },
  CreateEvent: {
    path: "/createEvent",
    exact: true,
    component: lazy(() => import("../pages/CreateEvent")),
  },

  // Game: {
  //   path: "/game",
  //   exact: true,
  //   component: lazy(() => import("../pages/Game")),
  // },


  About: {
    path: "/about",
    exact: true,
    component: lazy(() => import("../pages/About")),
  },
  Register: {
      path: "/register",
      exact: true,
      component: lazy(() => import("../Register/Register"))
  },
  Login: {
    path: "/login",
    exact: true,
    component: lazy(()=> import("../components/Login"))
  }
};
