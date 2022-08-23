import type { BigNumberish } from '@ethersproject/bignumber';
import { formatUnits } from '@ethersproject/units';
import { networks } from './config';

export function shortenHex(hex: string, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length
  )}`;
}

const ETHERSCAN_PREFIXES = {
  1: '',
  3: 'ropsten.',
  4: 'rinkeby.',
  5: 'goerli.',
  42: 'kovan.',
};

export function formatEtherscanLink(
  type: 'Account' | 'Transaction',
  data: [number, string]
) {
  switch (type) {
    case 'Account': {
      const [chainId, address] = data;
      return `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/address/${address}`;
    }
    case 'Transaction': {
      const [chainId, hash] = data;
      return `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/tx/${hash}`;
    }
  }
}

export const parseBalance = (
  value: BigNumberish,
  decimals = 18,
  decimalsToDisplay = 3
) => parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay);

export const getNetwork = (id: number) => {
  return networks[id];
};

export const isSupportedNetwork = (id: number): boolean => {
  const networks = {
    1: false,
    3: false,
    4: true,
    5: false,
    137: true,
    80001: true,
  };

  return networks[id];
};

export const switchNetwork = (hexId) => {
  // @ts-ignore
  window.ethereum.on('chainChanged', () => {
    window.location.reload();
  });
  // @ts-ignore
  window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: hexId }],
  });
  return;
};
