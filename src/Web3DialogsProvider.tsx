import { Dialog } from 'paramount-ui';
import React from 'react';

import { RequireMetamaskPrivacyApproval } from './RequireMetamaskPrivacyApproval';
import { RequireMetamaskSetup } from './RequireMetamaskSetup';
import { RequireWalletSignIn } from './RequireWalletSignIn';
import { useWeb3 } from './Web3Provider';

interface Web3DialogsContext {
  setShowRequireMetamaskSetup: (isVisible: boolean) => void;
  setShowRequireWalletSignIn: (isVisible: boolean) => void;
  setShowRequireMetamaskPrivacyApproval: (isVisible: boolean) => void;
  ensureHasConnected: () => Promise<boolean>;
}

export const Web3DialogsContext = React.createContext<Web3DialogsContext>({
  setShowRequireMetamaskSetup: () => {},
  setShowRequireWalletSignIn: () => {},
  setShowRequireMetamaskPrivacyApproval: () => {},
  ensureHasConnected: async () => false,
});

export const useWeb3Dialogs = (): Web3DialogsContext => {
  return React.useContext(Web3DialogsContext);
};

export interface Web3DialogsProviderProps {
  children?: React.ReactNode;
}

export const Web3DialogsProvider = (
  props: Web3DialogsProviderProps,
): JSX.Element => {
  const { children } = props;
  const { account, hasWallet, isConnected, providerName } = useWeb3();
  const [
    showRequireMetamaskSetup,
    setShowRequireMetamaskSetup,
  ] = React.useState(false);
  const [showRequireWalletSignIn, setShowRequireWalletSignIn] = React.useState(
    false,
  );
  const [
    showRequireMetamaskPrivacyApproval,
    setShowRequireMetamaskPrivacyApproval,
  ] = React.useState(false);

  React.useEffect(() => {
    if (account) {
      setShowRequireWalletSignIn(false);
      setShowRequireMetamaskPrivacyApproval(false);
      setShowRequireMetamaskSetup(false);
    }
  }, [account]);

  const ensureHasConnected = React.useCallback(async () => {
    if (!hasWallet) {
      setShowRequireMetamaskSetup(true);
      return false;
    }

    if (!isConnected) {
      if (providerName === 'metamask') {
        setShowRequireMetamaskPrivacyApproval(true);
        await window.ethereum.enable();
      }

      return false;
    }

    if (!account) {
      setShowRequireWalletSignIn(true);
      if (providerName === 'metamask') {
        await window.ethereum.enable();
      }
      return false;
    }

    return true;
  }, [account, providerName, hasWallet, isConnected]);

  return (
    <Web3DialogsContext.Provider
      value={{
        setShowRequireMetamaskSetup: (isVisible): void =>
          setShowRequireWalletSignIn(isVisible),
        setShowRequireWalletSignIn: (isVisible): void =>
          setShowRequireWalletSignIn(isVisible),
        setShowRequireMetamaskPrivacyApproval: (isVisible): void =>
          setShowRequireMetamaskPrivacyApproval(isVisible),
        ensureHasConnected,
      }}
    >
      {children}

      {showRequireMetamaskSetup && (
        <Dialog
          isVisible
          onRequestClose={(): void => setShowRequireMetamaskSetup(false)}
        >
          <RequireMetamaskSetup />
        </Dialog>
      )}

      {showRequireMetamaskPrivacyApproval && (
        <Dialog
          isVisible
          onRequestClose={(): void =>
            setShowRequireMetamaskPrivacyApproval(false)
          }
        >
          <RequireMetamaskPrivacyApproval />
        </Dialog>
      )}

      {showRequireWalletSignIn && (
        <Dialog
          isVisible
          onRequestClose={(): void => setShowRequireWalletSignIn(false)}
        >
          <RequireWalletSignIn />
        </Dialog>
      )}
    </Web3DialogsContext.Provider>
  );
};
