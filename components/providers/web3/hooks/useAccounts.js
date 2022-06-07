import { useState,useEffect } from "react"


export const handler = web3 => () =>{
    const [account, setAccount] = useState(null)

    useEffect(() => {
        const getAcccount = async () =>{
            const accounts = await web3.eth.getAccounts()
            setAccount(accounts[0])
        }
        web3 && getAcccount()
    }, [web3])
    return { account }
}