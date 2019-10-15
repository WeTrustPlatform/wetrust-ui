import { Box, Heading, Text } from 'paramount-ui';
import React from 'react';

export interface RequireEthereumNetworkProps {
  network: string;
}

export const RequireEthereumNetwork = (props: RequireEthereumNetworkProps) => {
  const { network } = props;

  return (
    <Box padding={48} alignItems="center">
      <Heading
        testID="INSTALL_METAMASK_TITLE"
        size="xxxlarge"
        color="secondary"
      >
        Network not supported
      </Heading>
      <Box paddingVertical={24}>
        <Text size="large">
          Please switch to the {network} Ethereum Network
        </Text>
      </Box>
      <Box paddingVertical={24}>
        <img
          style={{ width: '100%' }}
          alt="At the top right corner"
          src="/switch-network.png"
        />
      </Box>
    </Box>
  );
};
