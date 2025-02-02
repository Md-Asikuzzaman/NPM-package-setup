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

const generateInitials = (name: string = ''): string => {
  if (!name) return '?';
  const words = name.split(' ').filter(Boolean);
  let initials = words[0] ? words[0][0] : ''; // Get first letter of the first word
  initials += words[1] ? words[1][0] : ''; // Get first letter of the second word (if available)
  return initials.toUpperCase(); // Ensure initials are uppercase
};

const stringToColor = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    color += ((hash >> (i * 8)) & 0xff).toString(16).padStart(2, '0');
  }
  return color;
};

const Avatar: React.FC<AvatarProps> = ({
  name = '',
  src = '',
  size = 50,
  color = '#fff',
  fontSize = '1em',
  borderRadius = '50%',
  className = '',
  style = {},
  defaultSrc = 'https://i.pravatar.cc/50',
}) => {
  const initials = generateInitials(name);
  const backgroundColor = stringToColor(name);
  const avatarStyle: React.CSSProperties = {
    width: size,
    height: size,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: backgroundColor,
    color: color,
    fontSize: fontSize,
    fontWeight: 'bold',
    borderRadius: borderRadius,
    overflow: 'hidden',
    ...style,
  };

  // Show default image if neither name nor src is provided
  if (!name && !src) {
    return (
      <div className={`avatar ${className}`} style={avatarStyle}>
        <img
          src={defaultSrc}
          alt='Default Avatar'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    );
  }

  // Show initials if name is provided but no src
  if (name && !src) {
    return (
      <div className={`avatar ${className}`} style={avatarStyle}>
        <span>{initials}</span>
      </div>
    );
  }

  // Show image if src is provided
  return (
    <div className={`avatar ${className}`} style={avatarStyle}>
      <img
        src={src}
        alt={name || 'Avatar'}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = defaultSrc;
        }}
      />
    </div>
  );
};

export default Avatar;
