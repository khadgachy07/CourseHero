import { handler as createUseAccount } from "./useAccounts";

export const setupHooks = web3 => {

    return{
        useAccount: createUseAccount(web3)
    }
} 