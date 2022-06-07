import { handler as createUseAccount } from "./useAccounts";

export const setupHooks = (...deps ) => {

    return{
        useAccount: createUseAccount(...deps)
    }
} 