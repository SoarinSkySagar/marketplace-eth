import { useEffect } from "react"
import useSWR from 'swr'

const adminAddresses = {
    "0x32ecfb1bd3d1f25fdc586d4d22954e4937cffa7a5f74c1e3806828560adcaf49": true
}

export const handler = (web3, provider) => () => {

    const {data, mutate, ...rest} = useSWR(() => {
        return web3 ? "web3/accounts" : null },
        async () => {
            const accounts = await web3.eth.getAccounts()
            return accounts[0]
        }
    )

    useEffect(() => {
        provider && provider.on("accountsChanged", (accounts) => mutate(accounts[0] ?? null))
    }, [provider])

    return { 
        account: 
        {
            data,
            isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false ,
            mutate,
            ...rest
        } 
    }
}