import Navbar from './componentes/Navbar';
import Home from './componentes/home';
import Senai from './componentes/senai';
import Footer from './componentes/footer';
import QuemSomos from './componentes/QuemSomos';
import Contato from './componentes/Contato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Senai />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quemsomos" element={<QuemSomos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;
