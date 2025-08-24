import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicial from './pages/Inicial/Inicial';
import Contato from './pages/Contato/Contato';
import Projetos from './pages/Projetos/Projetos';
import ProjetoDetalhes from './pages/Projetos/ProjetoDetalhes';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Inicial />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/projetodetalhes/:id" element={<ProjetoDetalhes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
