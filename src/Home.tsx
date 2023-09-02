import React from 'react';
import Heading from './Heading';
import Slogan from './Slogan';
import GrantLocationAccess from './GrantLocationAccess';
import TextBox from './TextBox';

interface locationProps {
  clickHandler: () => void;
}

const Home = ({ clickHandler }: locationProps) => {
  return (
    <div className="pageContainer homebg">
      <header className="header">
        <Heading title="Weather" subtitle="Where You Are." />
        <Slogan />
      </header>

      <section className="localWeather">
        <TextBox
          title="Want local forecasts?"
          content="Click here to get today's weather, next weeks forecast and a map of things to do around your local area."
        />
        <GrantLocationAccess clickHandler={clickHandler} />
      </section>
    </div>
  );
};

export default Home;
