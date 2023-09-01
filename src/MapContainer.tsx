import React from 'react';

const MapContainer = ({
  location,
  city,
  state,
}: {
  location: string;
  city: string;
  state: string;
}) => {
  return (
    <section className="mapContainer">
      <iframe
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAEW9YDLD1iAGzJFyb69gY4JUsOSQJzrR8&q=${location},${city}+${state}`}
      ></iframe>
    </section>
  );
};

export default MapContainer;
