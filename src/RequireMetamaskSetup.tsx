import { Box, Heading, Text, Container, Spacing, Button } from 'paramount-ui';
import React from 'react';

const METAMASK_CHROME_LINK =
  'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn';

const METAMASK_FIREFOX_LINK =
  'https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/';

const MetaMaskIcon = () => (
  <img
    style={{ width: 32, height: 32 }}
    src="https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/v1574923931/meta-mask.jpg"
  />
);

export const RequireMetamaskSetup = (): JSX.Element => {
  const handlePressGetMetamask = React.useCallback(() => {
    const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    if (isFirefox) {
      window.open(METAMASK_FIREFOX_LINK, '_blank');
    } else {
      window.open(METAMASK_CHROME_LINK, '_blank');
    }
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
          Install MetaMask
        </Heading>
        <Spacing size="xxlarge" />
        <Text align="center" size="large">
          To use WeTrust Identity, you need a web3 wallet like the MetaMask
          extension for your browser to store your Ether, and to sign
          transactions.
        </Text>
        <Spacing size="xxlarge" />
        <Box alignItems="center">
          <Button
            appearance="outline"
            onPress={handlePressGetMetamask}
            title="Get MetaMask"
            overrides={{
              Touchable: { style: { width: 280 } },
              IconBefore: {
                component: MetaMaskIcon,
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};
