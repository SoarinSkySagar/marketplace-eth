import { useEffect } from "react"
import  useSWR  from "swr"

export const NETWORKS = {
    '1': 'Ethereum Mainnet',
    '59144': 'Linea Mainnet',
    '137': 'Polygon Mainnet',
    '5': 'Goerli Testnet',
    '11155111': 'Sepolia Testnet',
    '59140': 'Linea Goerli Testnet',
    '1337': 'Ganache Devnet'
}

export const handler = (web3, provider) => () => {

    const {mutate, ...rest}  = useSWR(() => 
        web3 ? "web3/network" : null,
        async () => {
            const netId = await web3.eth.getChainId()
            return netId
        }
    )

    useEffect(() => {
        provider && provider.on("chainChanged", chainId => mutate(chainId) )
    }, [web3])

    return {
        network: {
            mutate,
            ...rest
        }
    }
}