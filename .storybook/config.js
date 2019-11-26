import './index.css';
import '../src/wetrust-ui.css';
import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { Box } from 'paramount-ui';
import { AppProvider } from '../src/AppProvider';

const Decorator = story => {
  return (
    <AppProvider>
      <Box flex={1}>{story()}</Box>
    </AppProvider>
  );
};

addDecorator(Decorator);

configure(require.context('../src', true, /\.stories\.(tsx)$/), module);
