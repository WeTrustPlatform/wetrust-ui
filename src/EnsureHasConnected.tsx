import React from 'react';

import { useWeb3 } from './Web3Provider';
import { RequireMetamaskSetup } from './RequireMetamaskSetup';
import { RequireMetamaskPrivacyApproval } from './RequireMetamaskPrivacyApproval';
import { RequireWalletSignIn } from './RequireWalletSignIn';

export interface EnsureHasConnectedProps {
  children?: React.ReactNode;
}

export const EnsureHasConnected = (
  props: EnsureHasConnectedProps,
): JSX.Element => {
  const { children } = props;
  const { account, hasWallet, isConnected, providerName } = useWeb3();

  if (!isConnected && providerName === 'metamask') {
    return <RequireMetamaskPrivacyApproval />;
  }

  if (!account) return <RequireWalletSignIn />;
  if (!hasWallet) return <RequireMetamaskSetup />;

  return <>{children}</>;
};
