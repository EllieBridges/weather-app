import React from 'react';

interface locationProps {
  location: {
    latitude: number;
    longitude: number;
  };
}

const Forecast = ({ location }: locationProps) => {
  return (
    <div>
      <section>
        `Latitude = ${location.latitude} Longitude = ${location.longitude}`
      </section>
    </div>
  );
};

export default Forecast;
