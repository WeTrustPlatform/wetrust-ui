import { ThemeProvider } from 'paramount-ui';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import TRST from './contracts/TRST.json';
import { CurrencyProvider, Currency } from './CurrencyProvider';
import { Web3DialogsProvider } from './Web3DialogsProvider';
import { Web3Provider } from './Web3Provider';

export interface AppProviderProps {
  children?: React.ReactNode;
  initialCurrency?: Currency;
}

const ercContracts = {
  TRST,
  ETH: null,
};

export const AppProvider = (props: AppProviderProps): JSX.Element => {
  const { children, initialCurrency = 'ETH' } = props;

  return (
    <HashRouter basename="/">
      <ThemeProvider>
        <Web3Provider>
          <Web3DialogsProvider>
            <CurrencyProvider
              contracts={ercContracts}
              initialCurrency={initialCurrency}
            >
              {children}
            </CurrencyProvider>
          </Web3DialogsProvider>
        </Web3Provider>
      </ThemeProvider>
    </HashRouter>
  );
};
