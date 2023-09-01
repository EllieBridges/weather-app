import React from 'react';

const Slogan = () => {
  const slogans: string[] = [
    "We can't change the weather, but we can find plans that can",
    "For when it's a great day for storm chasing, Timmy's birthday BBQ not so much",
    "When your event can't be moved, but the outdoor canopes can",
  ];

  const randomIndexGenerator = (arr: string[]) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return randomIndex;
  };

  const sloganPicker = (arr: string[]) => {
    const i = randomIndexGenerator(arr);
    return arr[i];
  };

  const randomSlogan = sloganPicker(slogans);

  return (
    <div>
      <h2 className="slogan">{randomSlogan}</h2>
    </div>
  );
};

export default Slogan;
