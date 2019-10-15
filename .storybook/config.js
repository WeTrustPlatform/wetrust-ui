import './index.css';
import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { Box } from 'paramount-ui';

const Decorator = story => {
  return <Box flex={1}>{story()}</Box>;
};

addDecorator(Decorator);

configure(require.context('../src', true, /\.stories\.(tsx)$/), module);
