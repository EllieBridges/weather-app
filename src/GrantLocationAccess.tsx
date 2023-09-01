import React from 'react';
import Button from './Button';

const GrantLocationAccess = () => {
  // const status = document.querySelector('#status');
  // const mapLink = document.querySelector('#map-link');

  // mapLink.href: string |null= "";
  // mapLink.textContent = "";

  const success = (position: GeolocationPosition) => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
  };

  //   status.textContent = "";
  //   mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  //   mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  // }

  // const error: string | null= ()=> {
  //   status.textContent = "Unable to retrieve your location";
  // }

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      //status.textContent = "Geolocation is not supported by your browser";
      console.log('Geolocation is not supported by your browser');
    } else {
      // status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, (data) => {
        console.log(data);
      });
    }
  };

  return (
    <div className="buttonContainer">
      <button onClick={getUserLocation}>Test</button>
      <Button
        link="/today"
        clickHandler={getUserLocation}
        text="Today's Weather"
      />
      <Button
        link="/forecast"
        clickHandler={getUserLocation}
        text="This Week's Forecast"
      />
    </div>
  );
};

export default GrantLocationAccess;
