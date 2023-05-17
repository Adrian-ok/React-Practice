import './App.css'
// import 'tailwindcss/tailwindcss.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomeMain } from './pages/Home.jsx'
import { HeaderComponent } from './components/Header';
import { Pendientes } from './pages/Pendings.jsx'
import { PendingDetails } from './pages/DetailsP';

function App() {
  return (
    <>
      <Router>
        <HeaderComponent/>
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/Pendientes" element={<Pendientes />} />
          <Route path="/Pendientes/:id" element={<PendingDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

