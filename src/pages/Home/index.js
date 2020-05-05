import React from "react";

import Event from "../../components/Event";

import "./home.scss";

const event = {
  id: 1,
  name: "Event Driven Architecture",
  description: `We’re a global software consultancy solving complex problems with
  technology. We connect strategy and execution, helping our clients to
  strengthen their core technology, scale with flexibility and create
  seamless digital experiences.`,
  month: "decmeber",
};

export default () => (
  <div className="homepage">
    <section className="hero is-medium is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Prepare for the unpredictable</h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h1 className="title">What we do</h1>
        <h2 className="subtitle">
          We’re a global software consultancy solving complex problems with
          technology. We connect strategy and execution, helping our clients to
          strengthen their core technology, scale with flexibility and create
          seamless digital experiences. From our extensive experience in
          developing software, we pioneered open-source products that support
          development teams to create better software. We partner with our
          clients to continuously evolve their tech and enable an adaptive
          mindset to meet their business goals.
        </h2>
        <button class="button is-primary">Participate</button>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h1 className="title">Events</h1>
      </div>
      <div className="container events-container">
        <Event {...event} />
        <Event {...event} />
      </div>
    </section>
  </div>
);
