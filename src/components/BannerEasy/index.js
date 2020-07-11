import React from 'react';

import { Container, Texts } from './styles';

function BannerEasy(){
    return (
       <Container>
           <Texts>
               <h1>Simples e Rapido</h1>
               <p>Para fazer qualquer pagamento,
basta abrir a APP clicar em Pagar
e encostar o telemóvel ao terminal
de pagamento, ou ler o
QrCode.</p>
           </Texts>
           <img src="../../svgs/pay.svg" alt="Facil e Rapido" title="Facil e Rapido" />
       </Container>
    );
};

export default BannerEasy;