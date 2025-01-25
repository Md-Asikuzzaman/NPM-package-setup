import React from 'react';

interface Props {
    text: string;
    color?: 'red' | 'green' | 'yellow' | 'orange' | 'blue';
    fontSize?: number;
}
declare const Ticker: React.FC<Props>;

export { type Props, Ticker, Ticker as default };
