import React from "react";
import { Helmet } from "react-helmet";
import { Router } from "@reach/router";
import "./App.css";

import Layout from "./components/Layout";
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

      <div className="app-container">
        <Layout>
          <Router>
            <Home path="/" />
            <Events path="/events" />
            <Event path="/events/:eventId" />
          </Router>
        </Layout>
      </div>
    </>
  );
}

export default App;
