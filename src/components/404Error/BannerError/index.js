import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
function BannerEasy(){
    return (
       <Container>
           <img src="../../../svgs/404.svg" title="Erro 404" alt="Erro 404" /> 
            <h1>Erro 404 - Pagina não encontrada!</h1>
            <p>Pelos vistos a pagina que procuras não anda por aqui.</p>
            <Link to="/">
                Voltar para a pagina inicial
            </Link>
       </Container>
    );
};

export default BannerEasy;