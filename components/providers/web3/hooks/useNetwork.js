import { useEffect } from "react";
import useSWR, { mutate } from "swr";

const NETWORK = {
  1: "Ethereum Main Network",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
  80001: "Polygon Test Network",
  97: "Binance Test Network",
  1337: "Ganache",
};

const targetNetwork = NETWORK[process.env.NEXT_PUBLIC_TARGET_CHAIN_ID];

export const handler = (web3, provider) => () => {
  const { data, error, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/network" : null),
    async () => {
      const chainID = await web3.eth.getChainId();
      return NETWORK[chainID];
    }
  );

  useEffect(() => {
    provider &&
      provider.on("chainChanged", (chainID) => {
        mutate(NETWORK[parseInt(chainID, 16)]);
      });
  });

  return {
  
      data,
      mutate,
      target: targetNetwork,
      isSupported: data === targetNetwork,
      ...rest
  };
};
