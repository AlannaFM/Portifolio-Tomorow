import '../pages/Inicial/Inicial.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Elemento1(props) {
    const navigate = useNavigate();

    const handleVerMais = () => {
        const id = props.titulo.toLowerCase().replace(/\s/g, '');
        navigate(`/projetodetalhes/${id}`);
    };

    return (
        <div className='elementos'>
            <div className='direita'>
                <img src={props.imagem} alt="imagem-elemento" className='img-elemento' />
            </div>
            <div className='esquerda'>
                <h3>{props.titulo}</h3>
                <p>{props.descricao}</p>
                <button className='botao-elementos' onClick={handleVerMais}>
                    Ver mais
                </button>
            </div>
        </div>
    );
}
