import React from 'react';
import MapContainer from './MapContainer';

const Home = () => {
  return (
    <div className="pageContainer">
      <header>
        <h1 className="mainHeading">Weather Where You Are.</h1>
        <section>
          <h3>Intro</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quia
            ipsam deleniti iure harum? Ducimus dolores nobis neque eos,
            perspiciatis veniam iusto voluptatem placeat soluta corrupti velit,
            itaque voluptates repellendus!
          </p>
        </section>
        <MapContainer
          location="Amigos"
          city="Bury St Edmunds"
          state="Suffolk"
        />
      </header>
    </div>
  );
};

export default Home;
