import React from 'react'
import { useGlobalState } from '../hooks/useGlobalState'

export function IncomeExpenses() {

    const {transactions} = useGlobalState()

    const mounts = transactions.map(transaction => transaction.mount)

    const income = mounts.filter(item => item > 0)
                            .reduce((acc, item) => (acc += item), 0)
                            .toFixed(2)

    const expenses = (mounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1)
                            .toFixed(2)


  return (
    <>
        <div>
            <h4>Ingresos</h4>
            <p>{income}</p>
        </div>
        <div>
            <h4>Gastos</h4>
            <p>{expenses}</p>
        </div>
    </>
  )
}
