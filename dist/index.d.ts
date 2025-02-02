import React from 'react';

interface AvatarProps {
    name?: string;
    src?: string;
    size?: number;
    color?: string;
    fontSize?: string;
    borderRadius?: string;
    className?: string;
    style?: React.CSSProperties;
    defaultSrc?: string;
}
declare const Avatar: React.FC<AvatarProps>;

export { Avatar };
