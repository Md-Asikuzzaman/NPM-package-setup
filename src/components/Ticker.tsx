import React from 'react';

export interface Props {
  text: string;
  color?: 'red' | 'green' | 'yellow' | 'orange' | 'blue';
  fontSize?: number;
}

const Ticker: React.FC<Props> = ({ text, fontSize, color }) => {
  return (
    <div>
      <h1
        style={{
          fontSize: `${fontSize ? fontSize + 'rem' : '1rem'}`,
          color: color,
        }}
      >
        {text}
      </h1>
    </div>
  );
};

export default Ticker;
