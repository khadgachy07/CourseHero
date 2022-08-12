import { handler as createAccountHook} from "./useAccounts";
import { handler as createNetworkHook } from "./useNetwork";

export const setupHooks = (...deps ) => {

    return{
        useAccount: createAccountHook(...deps),
        useNetwork: createNetworkHook(...deps)
    }
} 