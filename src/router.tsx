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
// import Users from "./routes/Users";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />, //에러날때 뜨는 페이지 404 Page
    children: [
      {
        path: "",
        element: <Home />,
      },
      // {
      //   path: "users",
      //   element: <Users />,
      // },
    ],
  },
]);

export default router;
