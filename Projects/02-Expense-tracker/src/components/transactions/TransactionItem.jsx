import { useGlobalState } from "../../hooks/useGlobalState"

export function TransactionItem() {

    const {transactions, deleteTransaction} = useGlobalState()

    return (
        <>
            {transactions.map(transaction => {
                return (
                    <div key={transaction.id}>
                        <p>{transaction.description}</p>
                        <p>{transaction.mount}</p>
                        <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
                    </div>
                )
            })}
        </>
    )
}