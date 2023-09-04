import { handler as createAccountHook } from "./useAccount";
import { handler as createNetworkhook } from "./useNetwork";

export const setupHooks = (...deps) => {

    return {
        useAccount: createAccountHook(...deps),
        useNetwork: createNetworkhook(...deps)
    }
}