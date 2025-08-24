import React from "react";
import Menu from "../../Componentes/Menu";
import "../Contato/Contato.css";
import '../../pages/Menu.css';
import Email from '../../imagens/email.svg';
import Github from '../../imagens/github.svg';
import Linkedin from '../../imagens/linkedin.svg';
import Telefone from '../../imagens/phone.svg';
import FormularioContato from '../../Componentes/FormularioContato';



function Projetos() {
    return (
        <div className="App">
            <header>
                <Menu />
            </header>

            <main className="contato-container" >
                <section className="esquerda">
                    <div className="texto">
                        <h1>Entre em contato!</h1>
                        <p>Alanna Machado</p>
                        <p>
                            <img src={Telefone} className="icones-texto" alt="telefone" />
                            (71) 99171-9838
                        </p>
                        <p>
                            <a href="mailto:alannamachado84@gmail.com" className="email-link">
                                <img src={Email} className="icones-texto" alt="email" />
                                alannamachado84@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="socials">
                        <a href="mailto:alannamachado84@gmail.com" target="_blank" rel="noreferrer">
                            <img src={Email} className="logo-socials" alt="logo Email" />
                        </a>
                        <a href="https://github.com/AlannaFM" target="_blank" rel="noreferrer">
                            <img src={Github} className="logo-socials" alt="logo Github" />
                        </a>
                        <a href="https://www.linkedin.com/in/alannamachado/" target="_blank" rel="noreferrer">
                            <img src={Linkedin} className="logo-socials" alt="logo Linkedin" />
                        </a>
                    </div>

                </section>

                <section className="direita">
                    <FormularioContato />
                </section>
            </main>
        </div>
    );
}

export default Projetos;
