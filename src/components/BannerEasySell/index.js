import React from 'react';

import { Container, Texts } from './styles';

function BannerEasySell(){
    return (
       <Container>
            <img src="../../svgs/cart.svg" alt="Nunca foi tão simples vender!" title="Nunca foi tão simples vender!" />
           <Texts>
               <h1>Nunca foi tão facil vender!</h1>
               <p>Para realizar uma venda, adira a parte de vendas aqui no nosso site e depois siga todos os passos que nôs dizemos.</p>
           </Texts>
       </Container>
    );
};

export default BannerEasySell;