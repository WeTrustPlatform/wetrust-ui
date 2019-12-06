import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box } from 'paramount-ui';

import { Background } from './Background';

storiesOf('Background', module)
  .add('Textured', () => (
    <Background pattern="textured">
      <Box width={60} height={60} />
    </Background>
  ))
  .add('Dotted', () => (
    <Background pattern="dotted">
      <Box width={60} height={60} />
    </Background>
  ))
  .add('Dark', () => (
    <Background pattern="dark-pattern">
      <Box width={60} height={60} />
    </Background>
  ))
  .add('Logo', () => (
    <Background pattern="dark-logo">
      <Box width={60} height={400} />
    </Background>
  ));
