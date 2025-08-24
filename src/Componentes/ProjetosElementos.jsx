import '../pages/Projetos/Projetos.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';



export default function ProjetosElementos(props) {
    const navigate = useNavigate();


    const handleVerMais = () => {
        const id = props.titulo
            .toLowerCase()
            .normalize("NFD") // remove acentos
            .replace(/[\u0300-\u036f]/g, "") 
            .replace(/\s/g, '');
        navigate(`/projetodetalhes/${id}`);
    };

    return (
        <div className='container-projetos'>
            <img src={props.imagem} alt="imagem-elemento" className='img-elemento' />
            <h3>{props.titulo}</h3>
            <p>{props.descricao}</p>
            <button className='botao-elementos' onClick={handleVerMais}>
                Ver mais
            </button>
        </div>
    )
}