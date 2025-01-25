import React from 'react';

interface Props {
  children: React.ReactNode;
  fontSize?: number;
  center?: boolean;
}

const Heading: React.FC<Props> = ({ children, fontSize }) => {
  return <h1 style={{ fontSize: fontSize + 'rem' }} >{children}</h1>;
};

export default Heading;
