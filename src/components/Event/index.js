import React from "react";
import { Link } from "@reach/router";

import "./event.scss";

const Event = ({ id, name, description, month }) => (
  <div className="box event">
    <span className="event__month">{month}</span>
    <div className="event__backdrop" />
    <h1>{name}</h1>
    <p>{description}</p>
    <Link to={`/events/${id}`}>
      <button className="button is-primary">Participate</button>
    </Link>
  </div>
);

export default Event;
