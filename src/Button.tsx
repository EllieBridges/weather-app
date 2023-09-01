import { Link } from 'react-router-dom';
import React, { MouseEvent } from 'react';

interface ButtonProps {
  link: string;
  clickHandler: (event: MouseEvent) => void;
  text: string;
}

const Button = ({ link, clickHandler, text }: ButtonProps) => {
  return (
    <div className="button">
      <Link to={link} className="buttonText" onClick={clickHandler}>
        {text}
      </Link>
    </div>
  );
};

export default Button;
