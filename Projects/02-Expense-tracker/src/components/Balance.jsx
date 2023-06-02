import React from 'react'
import { useGlobalState } from '../hooks/useGlobalState'

export function Balance() {

  const {transactions} = useGlobalState()
  const amounts = transactions.map((transaction) => transaction.mount)
  const total = amounts.reduce((acc, item) => (acc += item), 0)

  return (
    <div>
      <h3>Balance Total</h3>
      <h4>${total}</h4>
    </div>
  )
}
