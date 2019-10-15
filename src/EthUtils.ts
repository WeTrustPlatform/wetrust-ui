export const trimAddress = (address: string, front = 6, end = 6): string => {
  if (!address) return '';

  const endString = address.substring(address.length - end);
  const startString = address.substring(0, front);
  return `${startString}...${endString}`;
};

export const getGasPrice = async (): Promise<number> => {
  const defaultPrice = 20;

  const req = await fetch('https://ethgasstation.info/json/ethgasAPI.json');
  const json = await req.json();

  // oracle return gwei * 10
  return Math.ceil(json.fast / 10) || defaultPrice;
};

export const networkIdToNameMap = {
  1: 'MainNet',
  2: 'Morden',
  3: 'Ropsten',
  4: 'Rinkeby',
  5: 'Goerli',
  42: 'Kovan',
} as const;
