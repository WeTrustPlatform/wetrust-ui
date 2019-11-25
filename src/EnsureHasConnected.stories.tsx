import { storiesOf } from '@storybook/react';
import React from 'react';
import { Text } from 'paramount-ui';

import { EnsureHasConnected } from './EnsureHasConnected';

storiesOf('EnsureHasConnected', module).add('Default', () => (
  <EnsureHasConnected>
    <Text>Connected</Text>
  </EnsureHasConnected>
));
