import './App.css'
// import 'tailwindcss/tailwindcss.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomeMain } from './pages/Home.jsx'
import { HeaderComponent } from './components/Header.jsx'
import { Pendientes } from './pages/Pendings.jsx'
import { PendingDetails } from './pages/DetailsP.jsx'
import { FindState } from './pages/FindState.jsx'
import { DetailS } from './pages/DetailS.jsx'
import { FindDate } from './pages/FindDate.jsx';
import { NewQuery } from './pages/NewQuery.jsx'

function App() {
  return (
    <>
      <Router>
        <HeaderComponent/>
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/Pendientes" element={<Pendientes />} />
          <Route path="/Pendientes/:id" element={<PendingDetails />} />
          <Route path="/Estado" element={<FindState />} />
          <Route path="/Detalle/:id" element={<DetailS />} />
          <Route path="/Fecha" element={<FindDate />}/>
          <Route path="/Nueva" element={<NewQuery />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

