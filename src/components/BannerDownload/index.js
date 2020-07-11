import React from 'react';

import { Container, ActionsBox, DownloadIcon } from './styles';

function BannerDownload(){
    return (
       <Container>
           <img src="../../svgs/mainPage.svg" alt="Faça download da APP" title="Faça download da APP" />
           <ActionsBox>
           <h1>Com a APP do NEAR PAY, nunca ficou tão facil e incrivél fazer pagamentos!</h1>
           <button>
           <DownloadIcon />
            <p>Descarregar APP</p>
           </button>
           </ActionsBox>
       </Container>
    );
};

export default BannerDownload;