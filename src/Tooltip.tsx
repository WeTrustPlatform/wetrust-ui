import { Popover, PositionerPosition } from 'paramount-ui';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Hoverable } from './Hoverable';

export interface TooltipProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
  position?: PositionerPosition;
}

export const Tooltip = (props: TooltipProps): JSX.Element => {
  const { content, children, position } = props;

  return (
    <Hoverable>
      {(isHovered): JSX.Element => (
        <TouchableOpacity disabled>
          <Popover position={position} isVisible={isHovered} content={content}>
            {children}
          </Popover>
        </TouchableOpacity>
      )}
    </Hoverable>
  );
};
