import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Container from './components/Container'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { TaskForm } from './components/TaskForm'

function App() {

  return (
    <Container className="justify-center h-screen bg-orange-100 dark:bg-slate-900 p-8">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/addTask' element={<TaskForm />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
