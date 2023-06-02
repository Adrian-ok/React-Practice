import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { FormTransaction } from './components/FormTransaction'
import { TransactionItem } from './components/transactions/TransactionItem'
import { IncomeExpenses } from './components/IncomeExpenses'

function App() {

  return (
    <>
      <Header />
      <IncomeExpenses/>
      <Balance />
      <FormTransaction />
      <TransactionItem />
    </>
  )
}

export default App
