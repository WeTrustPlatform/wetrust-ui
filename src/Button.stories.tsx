import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box, Button } from 'paramount-ui';

storiesOf('Button', module).add('Appearances', () => (
  <Box>
    <Button appearance="primary" title="primary" />
    <Button appearance="minimal" title="minimal" />
    <Button appearance="outline" title="outline" />
  </Box>
));
