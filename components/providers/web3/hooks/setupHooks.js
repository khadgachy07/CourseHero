import { UseAccount } from "./useAccounts";

const DEFAULT_HOOKS = {
    UseAccount: () => ({account : null })
}

export const setupHooks = web3 => {
    if(!web3){ return DEFAULT_HOOKS }

    return{
        UseAccount: UseAccount(web3)
    }
}