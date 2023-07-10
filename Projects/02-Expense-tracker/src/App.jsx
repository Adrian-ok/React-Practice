import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { FormTransaction } from './components/FormTransaction'
import { TransactionItem } from './components/transactions/TransactionItem'
import { IncomeExpenses } from './components/IncomeExpenses'
import Container from './components/Container'

function App() {

  return (
    <Container className='justify-center h-screen bg-slate-600 '>
      <Header />
      <IncomeExpenses/>
      <Balance />
      <FormTransaction />
      <TransactionItem />
    </Container>
  )
}

export default App
