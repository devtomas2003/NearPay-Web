import React from 'react';

import MenuTop from '../MenuTop';
import BannerDownload from '../BannerDownload';
import BannerEasy from '../BannerEasy';

import { Container, Wrapper } from './styles';

function Layout(){
    return (
        <Container>
            <Wrapper>
                <MenuTop />
            </Wrapper>
            <Wrapper>
                <BannerDownload />
            </Wrapper>
            <Wrapper>
                <BannerEasy/>
            </Wrapper>
        </Container>
    );
};

export default Layout;