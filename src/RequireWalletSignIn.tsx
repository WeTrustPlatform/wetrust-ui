import { Box, Heading, Text } from 'paramount-ui';
import React from 'react';

export const RequireWalletSignIn = () => {
  return (
    <Box padding={48} alignItems="center">
      <Heading size="xxxlarge" color="secondary" testID="SIGNIN_METAMASK_TITLE">
        No account selected
      </Heading>
      <Box paddingVertical={24}>
        <Text size="large">
          We detected a wallet available but no account was selected. Please log
          in to your account in e.g. Metamask
        </Text>
      </Box>
    </Box>
  );
};
