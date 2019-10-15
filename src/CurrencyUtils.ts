import BigNumber from 'bn.js';
import Web3 from 'web3';

import { Currency } from './CurrencyProvider';

const currencyInfoMap = {
  ETH: {
    decimalsBn: new BigNumber('1000000000000000000'),
    decimals: 1000000000000000000,
  },
  TRST: {
    decimalsBn: new BigNumber('1000000'),
    decimals: 1000000,
  },
};

export const formatCurrency = (
  bigNumber: BigNumber,
  currency: Currency,
): string => {
  if (currency !== 'ETH') {
    const num = bigNumber.div(currencyInfoMap[currency].decimalsBn).toNumber();

    // bn.js does not support decimals
    // so for small enough numbers (less than 1 rounded to 0) we use normal division
    if (num === 0) {
      return `${(
        bigNumber.toNumber() / currencyInfoMap[currency].decimals
      ).toString()} ${currency}`;
    }

    return `${num.toString()} ${currency}`;
  }

  return `${Web3.utils.fromWei(bigNumber.toString(), 'ether')} ${currency}`;
};

export const toBigNumber = (amount: string, currency: Currency) => {
  if (currency !== 'ETH') {
    const bigNumber = new BigNumber(amount).mul(
      currencyInfoMap[currency].decimalsBn,
    );
    if (bigNumber.toString().includes('undefined')) return new BigNumber(0);

    return bigNumber;
  }

  return new BigNumber(Web3.utils.toWei(amount, 'ether'));
};
