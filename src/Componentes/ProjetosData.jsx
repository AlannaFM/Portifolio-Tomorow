import React from 'react';
import Space from '../imagens/space.png';
import Poke from '../imagens/pokedex.png';
import Noticias from '../imagens/noticias.png';
import Silver from '../imagens/silver.png';


const ProjetosData = {
  orionx: (
    <>
      <h1>OrionX</h1>
      <img src={Space} alt="OrionX" className="imagem-detalhes" />
      <hr></hr>
      <p>
        Projeto desenvolvido em React com Formik para gerenciamento  de formulários e Yup para validação de dadoss fictícios de uma empresa espacial.
      </p>
    </>
  ),

  pokedex: (
    <>
      <h1>Pokedex</h1>
      <img src={Poke} alt="Pokedex" className="imagem-detalhes" />
      <hr></hr>
      <p>Projeto React com integração com a PokeAPI, utilizando React Hooks para requisições assíncronas. Ele exibe cards dinâmicos com detalhes como stats, tipos e sprites dos Pokémons, demonstrando o consumo de API. </p>
    </>
  ),

  silverscreen: (
    <>
      <h1>Silver Screen</h1>
      <img src={Silver} alt="Silver Screen" className="imagem-detalhes" />
      <hr></hr>
      <p>
        Catálogo de filmes e séries utilizando React Router para redirecionamento dinâmico
        entre páginas. O projeto reforça o uso de rotas, props e mapeamento de dados.
      </p>
    </>
  ),

  sitedenoticias: (
    <>
      <h1>Site de Notícias</h1>
      <img src={Noticias} alt="Site de Notícias" className="imagem-detalhes" />
      <hr></hr>
      <p>
        Projeto focado em componentização e boas práticas de estruturação
        de componentes no React. Ele explora estratégias que  garantem reusabilidade e evitam prop drilling.
      </p>
    </>
  ),
};

export default ProjetosData;
