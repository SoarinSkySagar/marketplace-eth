import { handler as createUseAccount } from "./useAccount";

export const setupHooks = (web3, provider) => {

    return {
        useAccount: createUseAccount(web3, provider)
    }
}