import React from 'react';

import { Container, Texts } from './styles';

function BannerFriends(){
    return (
       <Container>
           <Texts>
               <h1>Os seus amigos</h1>
               <p>Com a NearPay, podes realizar transferências entre amigos sem quaisqueres custos, e consegues dividir a conta de qualquer pagamento com quem quiseres, desde que a pessoa tenha o Near Pay.</p>
           </Texts>
           <img src="../../svgs/friends.svg" alt='Não fiques mais a "ver"' title='Não fiques mais a "ver"' />
       </Container>
    );
};

export default BannerFriends;