import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface Props$1 {
    text: string;
    color?: 'red' | 'green' | 'yellow' | 'orange' | 'blue';
    fontSize?: number;
}
declare const Ticker: React.FC<Props$1>;

declare const Counter: () => react_jsx_runtime.JSX.Element;

interface Props {
    children: React.ReactNode;
    fontSize?: number;
}
declare const Heading: React.FC<Props>;

export { Counter, Heading, type Props$1 as Props, Ticker, Ticker as default };
