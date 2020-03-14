import React, { useEffect, useState } from "react";
import api from "api";

export default ({ eventId }) => {
  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await api.get(`events/${eventId}`);
      if (response.status === 200) {
        setEvent(response.data);
      }
    };
    fetchEvent();
  }, [eventId]);

  return (
    <div className="eventpage">
      <h1>Event ID: {eventId}</h1>
      {event.name?.text}
      {event.description?.html}
    </div>
  );
};
