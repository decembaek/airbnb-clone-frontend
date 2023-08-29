// <Router>
//     <Route path="/">
//         <Home>
//     </Route>
//     <Route path="/movies">
//         <Movie>
//     </Route>
// </Router>  5버전 방법

import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import React from "react";
import Users from "./routes/Users";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

export default router;
