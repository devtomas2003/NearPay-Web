import React from 'react';

import MenuTop from '../../GeneralComponents/MenuTop';
import BannerDownload from '../../HomePage/BannerDownload';
import BannerEasy from '../../HomePage/BannerEasy';
import BannerEasySell from '../../HomePage/BannerEasySell';
import BannerFriends from '../../HomePage/BannerFriends';
import BannerDownBottom from '../../HomePage/BannerDownBottom';
import CopyrightBanner from '../../HomePage/copyrightBanner';

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
            <Wrapper>
                <BannerEasySell/>
            </Wrapper>
            <Wrapper>
                <BannerFriends/>
            </Wrapper>
            <Wrapper>
                <BannerDownBottom/>
            </Wrapper>
            <Wrapper>
                <CopyrightBanner/>
            </Wrapper>
        </Container>
    );
};

export default Layout;