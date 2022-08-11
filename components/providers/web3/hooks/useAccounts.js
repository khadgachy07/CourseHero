import { useEffect } from "react";
import useSWR from "swr";

const adminAddresses = {
  "0xe8dc1e1ebdeb10b5fb051d474209bee8727d968add97f33be6cba9df7d0ca8da": true
}

export const handler = (web3, provider) => () => {
  const { data,mutate, ...rest } = useSWR(() => 
    web3 ? "web3/accounts" : null,
      async () => {
        const accounts = await web3.eth.getAccounts();
        return accounts[0];
      }
  );

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => mutate(accounts[0] ?? null));
  }, );

  return {
    account: { 
      data,
      isAdmin: (data && adminAddresses[web3.utils.keccak256(data) ]) ?? false,
      mutate, 
      ...rest },
  };
};
