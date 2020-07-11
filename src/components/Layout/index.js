import React from 'react';

import MenuTop from '../MenuTop';
import BannerDownload from '../BannerDownload';
import BannerEasy from '../BannerEasy';
import BannerEasySell from '../BannerEasySell';
import BannerFriends from '../BannerFriends';
import CopyrightBanner from '../copyrightBanner';

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
            {/* <Wrapper>
                <CopyrightBanner/>
            </Wrapper> */}
        </Container>
    );
};

export default Layout;