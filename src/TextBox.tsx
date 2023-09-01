import React from 'react';

const TextBox = ({
  title,
  content,
}: {
  title: string | null;
  content: string;
}) => {
  return (
    <div className="textBox">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default TextBox;
