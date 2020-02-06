import React from 'react';
// eslint-disable-next-line
import { BlockTransactionString } from 'web3-eth';

import { useWeb3 } from './Web3Provider';

export const useFetchBlock = (): ((
  blockNumber: number | 'latest',
) => Promise<BlockTransactionString>) => {
  const { web3 } = useWeb3();

  return React.useCallback(
    async (blockNumber: number | 'latest') => {
      return await web3.eth.getBlock(blockNumber);
    },
    [web3],
  );
};
