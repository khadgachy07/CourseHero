import { useState,useEffect } from "react"


export const handler = (web3,provider) => () =>{
    const [account, setAccount] = useState(null)

    useEffect(() => {
        const getAcccount = async () =>{
            const accounts = await web3.eth.getAccounts()
            setAccount(accounts[0])
        }
        web3 && getAcccount()
    }, [web3])

    useEffect (() => {
        provider && 
        provider.on("accountsChanged",
        (accounts) => setAccount(accounts[0] ?? null)) 
    },[provider])
    return { account }
}