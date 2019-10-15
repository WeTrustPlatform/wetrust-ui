import { Box, Heading, Text } from 'paramount-ui';
import React from 'react';

const METAMASK_CHROME_LINK =
  'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn';

const METAMASK_FIREFOX_LINK =
  'https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/';

export const RequireMetamaskSetup = () => {
  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

  return (
    <Box padding={48} alignItems="center">
      <Box maxWidth={500}>
        <Heading
          align="center"
          testID="REQUIRE_METAMASK"
          size="xxxlarge"
          color="secondary"
        >
          Wallet required
        </Heading>
        <Box paddingVertical={24}>
          <Text size="large" align="center">
            To continue, please attach a wallet to the session. You can use your
            browser and install{' '}
            <a
              style={{ textDecoration: 'none' }}
              href={isFirefox ? METAMASK_FIREFOX_LINK : METAMASK_CHROME_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text color="link">MetaMask extension.</Text>
            </a>{' '}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
