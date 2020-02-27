import React from "react";
import { Helmet } from "react-helmet";
import { Link, Router } from "@reach/router";
import "./App.css";

import Home from "./pages/Home";
import Event from "./pages/Event";
import Events from "./pages/Events";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GeekNight - Hyderabad</title>
        <meta
          title="description"
          content="An open forum for geeks to connect, discuss & learn latest ideas, technologies and trends in software development"
        />
      </Helmet>
      <div class="app-container">
        <nav>
          <Link to="/">Home</Link> | <Link to="/events">Events</Link> |{" "}
          <Link to="/events/123">Event</Link>
        </nav>
        <Router>
          <Home path="/" />
          <Events path="/events" />
          <Event path="/events/:eventId" />
        </Router>
      </div>
    </>
  );
}

export default App;
