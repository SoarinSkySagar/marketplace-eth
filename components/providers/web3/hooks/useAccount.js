import { useEffect } from "react"
import useSWR from 'swr'

const adminAddresses = {
    "0x9D242C93155F5Aaa5911664b4f6F4452cd39B288": true
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
        provider && provider.on("accountsChanged", accounts => mutate(accounts[0] ?? null))
    }, [provider])

    return { 
        account: 
        {
            data,
            isAdmin: (data && adminAddresses[data]) ?? false ,
            mutate,
            ...rest
        } 
    }
}