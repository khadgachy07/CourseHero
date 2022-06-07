

export const UseAccount = web3 => () =>
{
    return {
        account:web3 ? "Test Acount" : "null"
    }
}