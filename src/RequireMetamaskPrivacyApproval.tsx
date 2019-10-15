import { Box, Heading, Text } from 'paramount-ui';
import React from 'react';

export const RequireMetamaskPrivacyApproval = () => {
  return (
    <Box padding={24} alignItems="center">
      <Heading size="xxxlarge" color="secondary" align="center">
        Connect with Metamask
      </Heading>
      <Box paddingBottom={24}>
        <Text size="large" align="center">
          To continue, sign in Metamask and allow the application to connect.
        </Text>
      </Box>
    </Box>
  );
};
