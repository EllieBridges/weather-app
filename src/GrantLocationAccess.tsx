import React from 'react';
import Button from './Button';

interface locationProps {
  clickHandler: () => void;
}

const GrantLocationAccess = ({ clickHandler }: locationProps) => {
  return (
    <div className="buttonContainer">
      <button onClick={clickHandler}>Test</button>
      <Button
        link="/today"
        clickHandler={clickHandler}
        text="Today's Weather"
      />
      <Button
        link="/forecast"
        clickHandler={clickHandler}
        text="This Week's Forecast"
      />
    </div>
  );
};

export default GrantLocationAccess;
