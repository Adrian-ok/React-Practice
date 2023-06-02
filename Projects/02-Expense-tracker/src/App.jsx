import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { FormTransaction } from './components/FormTransaction'
import { TransactionItem } from './components/transactions/TransactionItem'

function App() {

  return (
    <>
      <Header />
      <Balance />
      <FormTransaction />
      <TransactionItem />
    </>
  )
}

export default App
