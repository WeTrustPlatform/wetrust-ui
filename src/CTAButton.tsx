import { Button, ButtonProps } from 'paramount-ui';
import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';

export const CTAButton = (props: ButtonProps): JSX.Element => {
  return (
    <Button
      color="primary"
      overrides={{
        Touchable: {
          style: (): ViewStyle => ({
            minWidth: 280,
            backgroundColor: '#e98100',
          }),
        },
        Title: {
          style: (): TextStyle => ({
            fontSize: 18,
          }),
        },
      }}
      {...props}
    />
  );
};
