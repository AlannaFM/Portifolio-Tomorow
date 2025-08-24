
import React from 'react';
import '../../pages/Inicial/Inicial.css'
import '../../pages/Menu.css'
import { useNavigate } from "react-router-dom";
import Elemento1 from '../../Componentes/Elemento1'
import Menu from '../../Componentes/Menu'
import Space from '../../imagens/space.png'
import Poke from '../../imagens/pokedex.png'

function Inicial() {
    const navigate = useNavigate();

    return (
        <div className='App'>
            <header>
                <Menu />
            </header>

            <section className='section1'>


                <div className='texto'>
                    <h1>Olá.</h1>
                    <h1>Meu nome é Alanna.</h1>
                </div>


                <div className='descricao'>

                    <hr id='linha-superior' />
                    <p>Sou estudante de Engenharia de Software na Universidade Católica do Salvador</p>
                    <p>Atualmente, estudo desenvolvimento Front-end com React e programação web, focando em aprimorar minhas habilidades e aplicar as melhores práticas em ambas as áreas. Estou comprometida em aprender os fundamentos, e futuramente, conceitos avançados. Quero não apenas dominar as ferramentas, mas entender como elas resolvem problemas reais.</p>
                    <button className='botao-work' onClick={() => navigate("/contato")}>
                        Open to work! - diga olá
                    </button>
                    <hr id='linha-inferior' />
                </div>
            </section>

            <section className='section2'>
                <div className='texto-section2'>
                    <h3>Projetos Recentes</h3>
                    <p>Estes são alguns dos meus projetos desenvolvidos durante o curso de Front-End com React no Centro de Pesquisa e Capacitação Tomorrow, da UFBA. Se quiser ver mais, vá para página de projetos.</p>
                </div>

                <div className='section2-elementos'>
                    <Elemento1
                        imagem={Space}
                        titulo="OrionX"
                        descricao="Projeto desenvolvido com React, utilizando Formik para gerenciamento de formulários e Yup para validação de dados"
                    />

                    <Elemento1
                        imagem={Poke}
                        titulo="Pokedex"
                        descricao="Projeto React que se conecta a PokeAPI, utilizando react hooks  pararealizar requisições assíncronas. Além disso, ele renderiza cards com informações detalhadas dos Pokémons"
                    />
                </div>
            </section>
        </div>
    )

}

export default Inicial;

