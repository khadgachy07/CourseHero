import { useEffect } from "react";
import useSWR, { mutate } from "swr";
import Web3 from "web3";

export const handler = (web3, provider) => () => {
  const {mutate, ...rest} = useSWR(
    () => (web3 ? "web3/network" : null),
    async () => {
      const chainID = await web3.eth.getChainId();
      return chainID;
    }
  );

  useEffect(() => {
    provider && 
    provider.on("chainChanged", chainID => mutate(chainID) )
  })

  return {
    network: {
      mutate,
      ...rest
    },
  };
};
