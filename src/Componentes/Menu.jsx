import '../pages/Inicial/Inicial.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Email from '../imagens/email.svg';
import Github from '../imagens/github.svg';
import Linkedin from '../imagens/linkedin.svg';


export default function Menu() {


    return (
        <div className='menu'>
            <div className='menu-esquerda'>
                <h1>Alanna Machado</h1>
                <Link to="/" className="menu-item">
                    <p>Inicio</p>
                </Link>
                <Link to="/projetos" className="menu-item">
                    <p>Projetos</p>
                </Link>
                <Link to="/contato" className="menu-item">
                    <p>Contato</p>
                </Link>
            </div>

            <div className="menu-direita">
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
        </div>
    )
}