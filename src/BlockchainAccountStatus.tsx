import { Box, Text, ThemeContext } from 'paramount-ui';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

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
            <Image
              source={{
                uri: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='16' height='16' viewBox='0 0 16 16'%3E%3Cdefs%3E%3Ccircle id='a' cx='8' cy='8' r='8'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cuse fill='%23D8D8D8' xlink:href='%23a'/%3E%3Cg fill-rule='nonzero' mask='url(%23b)'%3E%3Cpath fill='%23FA3A00' d='M-1.334-1.334h16.667v16.667H-1.334z'/%3E%3Cpath fill='%23018E72' d='M1.758 17.153L-4.237 1.601l15.551-5.995 5.995 15.552z'/%3E%3Cpath fill='%2318CDF2' d='M20.992 16.147L4.33 15.852 4.624-.811l16.663.295z'/%3E%3Cpath fill='%23C81477' d='M27.6 22.61l-15.773 5.382-5.382-15.774 15.773-5.381z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A"`,
                height: 16,
                width: 16,
              }}
              accessibilityLabel="metamask account icon"
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
