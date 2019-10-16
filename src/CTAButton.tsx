import { Button, ButtonProps } from 'paramount-ui';
import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';

export const CTAButton = (props: ButtonProps): JSX.Element => {
  return (
    <Button
      color="primary"
      overrides={{
        Touchable: {
          style: ({ appearance }): ViewStyle => ({
            minWidth: 280,
            backgroundColor:
              appearance === 'primary' ? '#e98100' : 'transparent',
            borderWidth: appearance === 'outline' ? 1 : 0,
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
