import React from 'react';

const Heading = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="mainHeadingDiv">
      <h1 className="mainHeading">{title}</h1>
      <h1 className="mainHeading">{subtitle}</h1>
    </div>
  );
};

export default Heading;
