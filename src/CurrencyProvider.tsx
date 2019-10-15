import BigNumber from 'bn.js';
import React from 'react';
import { useAsync } from 'react-use';

import { useSmartContract } from './useSmartContract';
import { useWeb3 } from './Web3Provider';

export type Currency = 'ETH' | 'TRST';

export interface CurrencyContext {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  tokenInstance: any;
  isCurrencyLoading: boolean;
  approve: (spender: string, amount: BigNumber) => Promise<void>;
}

interface CurrencyProviderProps {
  children?: React.ReactNode;
  initialCurrency: Currency;
  contracts: {
    [currency in Currency]: any;
  };
}

const CurrencyContext = React.createContext<CurrencyContext>({
  currency: 'TRST',
  setCurrency: () => {},
  tokenInstance: null,
  isCurrencyLoading: true,
  approve: async () => {},
});

export const useCurrency = () => {
  return React.useContext(CurrencyContext);
};

export const CurrencyProvider = (props: CurrencyProviderProps) => {
  const { children, initialCurrency, contracts } = props;
  const [currency, setCurrency] = React.useState(initialCurrency);
  const { account } = useWeb3();

  const { contract, loading: smartContractLoading } = useSmartContract(
    contracts[currency],
  );

  const {
    value: tokenInstance,
    loading: instanceLoading,
  } = useAsync(async () => {
    return await contract.deployed();
  }, [contract]);

  const approve = React.useCallback(
    (spender: string, amount: BigNumber) => {
      if (!contracts[currency]) {
        throw new Error(`${currency} does not have corresponding contract`);
      }

      return new Promise<void>(async (resolve, reject) => {
        tokenInstance.approve
          .sendTransaction(spender, amount.toString(), {
            from: account,
          })
          .once('transactionHash', () => {
            // At this point we have received the approval's transaction hash and can proceed with next transaction.
            // However, Metamask may need some time to pick up this transaction,
            // which is needed to validate next transactions, and 3 seconds is considered a "safe" waiting time.
            // Metamask will still display the error however, but it can be ignored
            setTimeout(() => resolve(), 3000);
          })
          .on('error', (error: Error) => reject(error));
      });
    },
    [tokenInstance, account, currency, contracts],
  );

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        tokenInstance,
        isCurrencyLoading: instanceLoading || smartContractLoading,
        approve,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
