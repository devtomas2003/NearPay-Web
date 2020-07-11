import React from 'react';

import { Container, Header, Actions } from './styles';

function MenuTop(){
    return (
       <Container>
           <Header>
                <h1>NearPay</h1>
                <p>By IMM Telecom</p>
           </Header>
           <Actions>
                <a href="https://google.pt/">Sou Vendedor</a>
                <a href="https://google.pt/">Aplicação</a>
                <a href="https://google.pt/">Criar uma conta</a>
                <button>
                    Iniciar Sessão
                </button>
           </Actions>
       </Container>
    );
};

export default MenuTop;