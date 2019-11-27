import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Alert, Spacing } from 'paramount-ui';

storiesOf('Alert', module).add('Intents', () => (
  <Box>
    <Alert intent="danger" description="primary" />
    <Spacing />
    <Alert intent="success" description="loading" />
  </Box>
));
