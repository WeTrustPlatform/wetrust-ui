import { storiesOf } from '@storybook/react';
import React from 'react';
import { Text } from 'paramount-ui';

import { EnsureHasConnected } from './EnsureHasConnected';
import { RequireMetamaskPrivacyApproval } from './RequireMetamaskPrivacyApproval';
import { RequireMetamaskSetup } from './RequireMetamaskSetup';
import { RequireWalletSignIn } from './RequireWalletSignIn';

storiesOf('EnsureHasConnected', module)
  .add('Default', () => (
    <EnsureHasConnected>
      <Text>Connected</Text>
    </EnsureHasConnected>
  ))
  .add('RequireMetamaskPrivacyApproval', () => (
    <RequireMetamaskPrivacyApproval />
  ))
  .add('RequireWalletSignIn', () => <RequireWalletSignIn />)
  .add('RequireMetamaskSetup', () => <RequireMetamaskSetup />);
