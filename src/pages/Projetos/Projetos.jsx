import React from "react";
import Menu from "../../Componentes/Menu";
import "./Projetos.css";
import '../../pages/Menu.css';
import ProjetosElementos from "../../Componentes/ProjetosElementos";
import Space from '../../imagens/space.png';
import Poke from '../../imagens/pokedex.png';
import Noticias from '../../imagens/noticias.png';
import Silver from '../../imagens/silver.png';
import gifProjetos from '../../imagens/videoOrion.mp4.gif';

function Projetos() {
  return (
    <div className="projetos-container">
      <header>
        <Menu />
      </header>

      <section className="projetos-apresentacao">
        <div className="projetos-imagem" >
          <img src={gifProjetos} alt="Gif animado de projetos" className="gif-projetos" />
        </div>
       
        <div className="projetos-conteudo">
          <h2>Projetos Tomorrow</h2>
          <p>
            Na seção abaixo, estão todos os projetos desenvolvidos por mim durante o curso de Programação Front-End com React no Centro de Pesquisa e Capacitação Tomorrow, da UFBA. Cada projeto representa uma etapa do meu aprendizado, aplicando conceitos como componentização, gerenciamento de estado, consumo de APIs e boas práticas de desenvolvimento.
          </p>
        </div>
      </section>

      <section className="espaco-projetos">
        <hr id="linha" />


        <ProjetosElementos
          imagem={Space}
          titulo="OrionX"
          descricao="Projeto desenvolvido com React, utilizando Formik para gerenciamento de formulários e Yup para validação de dados fictícios de uma empresa espacial"
        />

        <ProjetosElementos
          imagem={Poke}
          titulo="Pokedex"
          descricao="Projeto React que se conecta à PokeAPI, utilizando React Hooks para requisições assíncronas e renderização de cards."
        />

        <ProjetosElementos
          imagem={Silver}
          titulo="Silver Screen"
          descricao="Catálogo de filmes e séries utilizando o React Router para o redirecionamento dinâmico entre páginas"
        />
        <ProjetosElementos
          imagem={Noticias}
          titulo="Site de Notícias"
          descricao="Projeto focado em componentização e boas práticas de estruturação
        de componentes no React. Ele explora estratégias que  garantem reusabilidade e evitam prop drilling."
        />

      </section>
    </div>
  );
}

export default Projetos;
