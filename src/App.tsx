import React, { lazy } from "react";
import { Link, useRoutes } from "react-router-dom";
// import Home from './pages/Home'
// import About from './pages/About'
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Comment = lazy(() => import("./pages/comments/Comment"));
const Country = lazy(() => import("./pages/Country/Country"));

const App = () => {
  return (
    <>
    <Link to={"/"}>Home</Link>
    <Link to={"/about"}>About</Link>
    <Link to={"/comment"}>Comment</Link>
    <Link to={"/country"}>Country</Link>
      {useRoutes([
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/comment", element: <Comment /> },
            { path: "/country", element: <Country /> },
      ])}
    </>
  );
};

export default React.memo(App);
