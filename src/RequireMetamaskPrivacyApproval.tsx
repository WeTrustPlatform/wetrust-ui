import { Box, Heading, Text, Container, Spacing, Button } from 'paramount-ui';
import React from 'react';

export const RequireMetamaskPrivacyApproval = (): JSX.Element => {
  const handlePressRetry = React.useCallback(async () => {
    await window.ethereum.enable();
  }, []);

  return (
    <Box padding={48} alignItems="center">
      <Container size="medium">
        <Heading
          align="center"
          size="xxxlarge"
          weight="bold"
          testID="SIGNIN_METAMASK_TITLE"
        >
          Connect to MetaMask
        </Heading>
        <Spacing size="xxlarge" />
        <Text align="center" size="large">
          To continue, please connect WeTrust Identity to your MetaMask wallet.
        </Text>
        <Spacing size="xxlarge" />
        <Box flexDirection="row" alignItems="center" justifyContent="center">
          <img
            style={{ width: 56, height: 56 }}
            src="https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/v1574922849/we-trust.svg"
          />
          <Box
            width={120}
            borderColor="#b1b1b1"
            borderBottomWidth={1}
            borderStyle="dashed"
          />
          <img
            style={{ width: 56, height: 56 }}
            src="https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/v1574922854/meta-mask-web-3-wallet-icon.svg"
          />
        </Box>
        <Spacing size="xxlarge" />
        <Box
          backgroundColor="greyLight"
          borderWidth={1}
          borderColor="#f7f7f7"
          padding={24}
          shape="rounded"
          alignItems="center"
        >
          <Text size="large" color="danger" weight="bold" align="center">
            Unable to connect
          </Text>
          <Spacing />
          <Text align="center">
            Please make sure you are signed in to your account.
          </Text>
          <Spacing size="xlarge" />
          <Button onPress={handlePressRetry} title="Retry" />
        </Box>
      </Container>
    </Box>
  );
};
