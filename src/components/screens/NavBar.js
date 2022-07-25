import React from 'react';
import styled from 'styled-components';

export default function NavBar() {
    return(
        <>
            <Header>
                    <HeaderWrapper className = "wrapper">
                        <Logo>
                            <LogoLink>
                                <LogoHeading>m<LogoHeadingColor>ok</LogoHeadingColor>e.</LogoHeading>
                            </LogoLink>
                        </Logo>
                        <LoginButton>Login</LoginButton>
                    </HeaderWrapper>
            </Header>
        </>
    )
}

const Header =  styled.header`
    height: 100px;
    padding: 3% 0;
`
const HeaderWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.h1`
    width: 30%;
`
const LogoLink = styled.a`

`
const LoginButton = styled.a`
    background-color: #0270fb;
    color: #fff;
    padding: 15px 50px;
    display: inline-block;
    font-size: 20px;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
`
const LogoHeading = styled.h3`
    color: #cfcfcf;
    font-size: 40px;
    font-weight: 600;
`
const LogoHeadingColor = styled.span`
    color: #0270fb;
`