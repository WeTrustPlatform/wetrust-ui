import { Box, Text, ThemeContext } from 'paramount-ui';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { trimAddress } from './EthUtils';
import { useWeb3Dialogs } from './Web3DialogsProvider';
import { useWeb3 } from './Web3Provider';

interface BlockchainAccountStatus {
  onPress?: () => void;
}
export const BlockchainAccountStatus = (
  props: BlockchainAccountStatus,
): JSX.Element => {
  const { onPress = (): void => {} } = props;
  const { account, hasWallet, isConnected, web3IsLoading } = useWeb3();
  const theme = React.useContext(ThemeContext);
  const { ensureHasConnected } = useWeb3Dialogs();

  const handlePress = React.useCallback(async () => {
    if (await ensureHasConnected()) onPress();
  }, [ensureHasConnected, onPress]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Box
        testID="BLOCKCHAIN_ACCOUNT_STATUS"
        height={48}
        borderWidth={1}
        paddingVertical={8}
        paddingHorizontal={16}
        justifyContent="center"
        shape="rounded"
        flexDirection="row"
        alignItems="center"
        borderColor={theme.colors.border.default}
      >
        {account && (
          <Box paddingRight={16}>
            <img
              alt="metamask account icon"
              style={{ width: 16, height: 16 }}
              src="https://res.cloudinary.com/wetrust-cryptounlocked/image/upload/v1574922854/meta-mask-web-3-wallet-icon.svg"
            />
          </Box>
        )}
        <Box>
          <Text size="small">
            {web3IsLoading
              ? 'Loading...'
              : hasWallet
              ? isConnected
                ? account
                  ? trimAddress(account)
                  : `Sign in your wallet`
                : 'Connect to app'
              : `Connect to wallet`}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};
