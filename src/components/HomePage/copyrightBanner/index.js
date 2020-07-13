import React from 'react';

import { Container } from './styles';

function CopyrightBanner(){
    return (
       <Container>
           <p><label>Copyright © 2020 -</label> Near Pay <label>powered by</label> IMM Telecom</p>
           <a href="https://google.pt/">Contatos</a> 
       </Container>
    );
};

export default CopyrightBanner;