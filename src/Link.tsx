import { useTheme } from 'paramount-ui';
import React from 'react';
import { Link as RRLink } from 'react-router-dom';

export interface LinkProps {
  testID?: string;
  to: string;
  isExternal?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Link = (props: LinkProps) => {
  const { testID, to, children, style, onClick, isExternal } = props;
  const theme = useTheme();

  const {
    fontVariant,
    fontWeight,
    textAlign,
    transform,
    lineHeight,
    ...validStyle
  } = theme.textSizes.medium;

  const linkStyle = {
    color: theme.colors.text.link,
    fontFamily: theme.fontFamilies.text,
    textDecoration: 'none',
    lineHeight: `${lineHeight}px`,
    ...validStyle,
    ...style,
  };

  if (isExternal) {
    return (
      <a
        style={linkStyle}
        data-testid={testID}
        href={to}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <RRLink style={linkStyle} data-testid={testID} to={to} onClick={onClick}>
      {children}
    </RRLink>
  );
};
