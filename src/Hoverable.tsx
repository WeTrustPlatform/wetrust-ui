import React from 'react';
import { Platform } from 'react-native';

let isEnabled = false;

if (Platform.OS === 'web') {
  const HOVER_THRESHOLD_MS = 1000;
  let lastTouchTimestamp = 0;

  const enableHover = (): void => {
    if (isEnabled || Date.now() - lastTouchTimestamp < HOVER_THRESHOLD_MS) {
      return;
    }
    isEnabled = true;
  };

  const disableHover = (): void => {
    lastTouchTimestamp = Date.now();
    if (isEnabled) {
      isEnabled = false;
    }
  };

  document.addEventListener('touchstart', disableHover, true);
  document.addEventListener('touchmove', disableHover, true);
  document.addEventListener('mousemove', enableHover, true);
}

function isHoverEnabled(): boolean {
  return isEnabled;
}

export interface HoverableProps {
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  children?: ((isHovered: boolean) => React.ReactNode) | React.ReactNode;
}

export const Hoverable = (props: HoverableProps): JSX.Element => {
  const { children, onHoverOut, onHoverIn } = props;
  const [isHovered, setIsHovered] = React.useState(false);
  const [showHover, setShowHover] = React.useState(true);

  const handleMouseEnter = React.useCallback(() => {
    if (isHoverEnabled() && !isHovered) {
      if (onHoverIn) onHoverIn();
      setIsHovered(true);
    }
  }, [isHovered, onHoverIn]);

  const handleMouseLeave = React.useCallback(() => {
    if (isHovered) {
      if (onHoverOut) onHoverOut();
      setIsHovered(false);
    }
  }, [isHovered, onHoverOut]);

  const handleGrant = React.useCallback(() => {
    setShowHover(false);
  }, [setShowHover]);

  const handleRelease = React.useCallback(() => {
    setShowHover(true);
  }, [setShowHover]);

  const child =
    typeof children === 'function'
      ? children(showHover && isHovered)
      : children;

  return React.cloneElement(React.Children.only(child), {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    // prevent hover showing while responder
    onResponderGrant: handleGrant,
    onResponderRelease: handleRelease,
    // if child is Touchable
    onPressIn: handleGrant,
    onPressOut: handleRelease,
  });
};
