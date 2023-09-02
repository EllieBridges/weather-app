import React from 'react';
import TextBox from './TextBox';

interface locationProps {
  location: {
    latitude: number;
    longitude: number;
  };
}

const Today = ({ location }: locationProps) => {
  return (
    <div className="todaysweatherpage">
      <section>
        <TextBox
          title="Today's Weather"
          content={`At Latitude = ${location.latitude} Longitude = ${location.longitude}`}
        />
      </section>
    </div>
  );
};

export default Today;
