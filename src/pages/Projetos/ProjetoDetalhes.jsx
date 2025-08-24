import React from 'react';
import { useParams } from 'react-router-dom';
import ProjetosData from '../../Componentes/ProjetosData';
import Menu from '../../Componentes/Menu';
import '../../pages/Projetos/Projetos.css';

function ProjetoDetalhes() {
  const { id } = useParams();
  const conteudo = ProjetosData[id];

  return (
    <div className="App">
      <header>
        <Menu />
      </header>

      <main>
        {conteudo ? (conteudo) : (<p>Projeto não encontrado.</p>)}
        
      </main>
    </div>
  );
}

export default ProjetoDetalhes;
