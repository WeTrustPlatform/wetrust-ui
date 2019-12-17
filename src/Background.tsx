import React from 'react';

export interface BackgroundProps {
  pattern: 'dotted' | 'textured' | 'dark-pattern' | 'dark-logo';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Background = (props: BackgroundProps): JSX.Element => {
  const { children, pattern = 'textured', style } = props;

  if (pattern === 'dark-pattern') {
    return (
      <div
        style={{
          backgroundImage: `url('https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/v1573530837/dark-bg.jpg')`,
          ...style,
        }}
      >
        {children}
      </div>
    );
  }

  if (pattern === 'dark-logo') {
    return (
      <div
        style={{
          backgroundImage: `url('https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/v1573530837/wetrust-bg.jpg')`,
          ...style,
        }}
      >
        {children}
      </div>
    );
  }

  if (pattern === 'dotted') {
    return (
      <div
        style={{
          backgroundImage: `url('https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/c_crop,w_400/v1568706049/dotted-bg.png')`,
          ...style,
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url('https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/c_crop,w_400/v1568706049/textured-bg.png')`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
