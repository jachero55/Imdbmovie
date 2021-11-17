import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import './navbar.scss'
import styled from 'styled-components'

const Container = styled.div`
    
    width: 100%;
`
const NavBgContainer = styled.div`
    background-color: #111;
    width: 100%;
    padding: 1.5rem;
    position: relative;
    border-bottom: 1px solid #C44900;
`
const NavContainer = styled.div`
    margin: 0 auto;
    width: 60vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled(NavLink)`
    color: #C44900;
    text-decoration: none;
    font-size: 2rem;
    font-family: "Anton", sans-serif;
    font-weight: 800;
    letter-spacing: 0.1rem;
`
const SocialIcons = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`
const IconSpan = styled.span`
    font-size: 1.5rem;
    padding-left: 1rem;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        opacity: 0.5;
    }
`
const LogoSpan = styled.span`
    color: #f2f2f2;
`
const Button = styled.button`
    font-size: 1.6rem;
    color: #fff;
    display: block;
    border: none;
    background: transparent;
    padding-right: 2rem;
    cursor: pointer;
`
const Navbar = () => {
    return (
        <Container>
            <NavBgContainer>
                <NavContainer>
                    <Logo to="/">I<LogoSpan>M</LogoSpan>D<LogoSpan>B</LogoSpan></Logo>
                    <SocialIcons>
                        <Button>{<BsSearch />}</Button>
                        <IconSpan>{<FaFacebookF />}</IconSpan>
                        <IconSpan>{<AiOutlineTwitter />}</IconSpan>
                        <IconSpan>{<AiFillInstagram />}</IconSpan>
                    </SocialIcons>
                </NavContainer>
            </NavBgContainer>
        </Container>
    )
}

export default Navbar
