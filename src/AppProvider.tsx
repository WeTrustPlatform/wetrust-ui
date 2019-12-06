import { ThemeProvider } from 'paramount-ui';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ViewStyle, TextStyle } from 'react-native';

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
      <ThemeProvider
        value={{
          colors: {
            text: {
              // eslint-disable-next-line
              // @ts-ignore
              dark: '#515151',
              default: '#7e7e7e',
              link: '#3fa296',
            },
          },

          headingSizes: {
            xxxlarge: {
              fontSize: 48,
              lineHeight: 56,
            },
            xxlarge: {
              fontSize: 36,
              lineHeight: 46,
            },
            large: {
              fontSize: 24,
              lineHeight: 32,
            },
          },
          textSizes: {
            large: {
              fontSize: 24,
              lineHeight: 32,
            },
            medium: {
              fontSize: 18,
              lineHeight: 24,
            },
          },
          fontFamilies: {
            heading: 'proxima-nova, Arial, Helvetica, sans-serif',
            text: 'proxima-nova, Arial, Helvetica, sans-serif',
          },
          overrides: {
            Alert: {
              Root: {
                style: ({ intent }): ViewStyle => {
                  if (intent === 'danger') {
                    return {
                      backgroundColor: '#fffcfc',
                      borderWidth: 1,
                      borderLeftWidth: 1,
                      borderColor: '#d53939',
                    };
                  }

                  if (intent === 'success') {
                    return {
                      backgroundColor: '#f9fffe',
                      borderWidth: 1,
                      borderLeftWidth: 1,
                      borderColor: '#67c5bb',
                    };
                  }

                  return {};
                },
              },
              Description: {
                props: ({ intent }) => {
                  if (intent === 'danger') {
                    return {
                      align: 'center',
                      color: '#d53939',
                    };
                  }

                  if (intent === 'success') {
                    return {
                      align: 'center',
                      color: '#67c5bb',
                    };
                  }

                  return { align: 'center' };
                },
              },
            },
            Button: {
              Touchable: {
                style: ({ appearance, isLoading }): ViewStyle => {
                  const backgroundColor = isLoading
                    ? '#fffcf5'
                    : appearance === 'primary'
                    ? '#eb7209'
                    : 'transparent';

                  return {
                    backgroundColor,
                    borderWidth: appearance === 'outline' ? 1 : 0,
                    borderColor: '#eb7209',
                  };
                },
              },
              Title: {
                style: ({ appearance }: any): TextStyle => {
                  return {
                    fontSize: 18,
                    color: appearance === 'primary' ? '#ffffff' : '#eb7209',
                  };
                },
              },
              Loading: {
                props: {
                  appearance: 'primary',
                },
              },
            },
          },
        }}
      >
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
