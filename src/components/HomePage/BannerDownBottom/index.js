import React from 'react';

import { Container, LoginBottom, DownloadBottom } from './styles';

function BannerDownBottom(){
    return (
       <Container>
           <img src="../../../svgs/logo.svg" alt="Near Pay" title="Near Pay" />
           <LoginBottom>
               <button>Iniciar Sessão ou criar uma conta</button>
           </LoginBottom>
           <DownloadBottom>
               <button>Descarregar APP</button>
           </DownloadBottom>
       </Container>
    );
};

export default BannerDownBottom;