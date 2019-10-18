import { Button, ButtonProps } from 'paramount-ui';
import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';

export const CTAButton = (props: ButtonProps): JSX.Element => {
  return (
    <Button
      color="primary"
      appearance="primary"
      overrides={{
        Touchable: {
          style: ({ appearance }): ViewStyle => ({
            minWidth: 280,
            backgroundColor:
              appearance === 'primary' ? '#e98100' : 'transparent',
            borderWidth: appearance === 'outline' ? 1 : 0,
            borderColor: '#e98100',
          }),
        },
        Title: {
          style: ({ appearance }: any): TextStyle => ({
            fontSize: 18,
            color: appearance === 'primary' ? 'white' : '#e98100',
          }),
        },
      }}
      {...props}
    />
  );
};
