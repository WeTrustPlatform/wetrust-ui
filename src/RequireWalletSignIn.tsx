import { Box, Heading, Text, Container, Spacing } from 'paramount-ui';
import React from 'react';

export const RequireWalletSignIn = () => {
  return (
    <Box padding={48} alignItems="center">
      <Container size="medium">
        <Heading
          align="center"
          size="xxxlarge"
          weight="bold"
          testID="SIGNIN_METAMASK_TITLE"
        >
          No account selected
        </Heading>
        <Spacing size="xxlarge" />
        <Text align="center" size="large">
          We detected a wallet available but no account was selected. Please log
          in to your account in e.g. Metamask
        </Text>
        <Spacing size="xxlarge" />
        <img
          style={{ width: '100%' }}
          src="https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/v1574922889/metamask-instructions-popup-window.jpg"
        />
      </Container>
    </Box>
  );
};
