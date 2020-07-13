import React from 'react';

import MenuTop from '../../GeneralComponents/MenuTop';
import ErrorBanner from '../BannerError';

import { Container, Wrapper } from './styles';

function Layout(){
    return (
        <Container>
            <Wrapper>
                <MenuTop />
            </Wrapper>
            <Wrapper>
                <ErrorBanner />
            </Wrapper>
        </Container>
    );
};

export default Layout;