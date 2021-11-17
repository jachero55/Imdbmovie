import React from 'react'
import styled from 'styled-components'
import Subscribe from '../form/Subscribe'
import { ImLocation } from 'react-icons/im'
import { MdLocalPhone } from 'react-icons/md'
import { FaEnvelope } from 'react-icons/fa'

const FooterContainer = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 1rem 0;
    background-color: #C44900;
    color: #f2f2f2;
`
const InnerFooterContainer = styled.div`
    margin: 0 auto;
    width: 65vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`
const Title = styled.h3`
    color: #f2f2f2;
`
const TitleFour = styled.h4`
margin-bottom: 1rem;
`
const FooterMiddle = styled.div`
    background-color: #111;
    padding: 2rem 0;
    width: 100%;
`
const InnerMiddleContainer = styled.div`
    margin: 0 auto;
    width: 65vw;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`
const FooterAbout = styled.div`
    
`
const Text = styled.p`

`
const Contact = styled.div`

`
const ContactDetails = styled.p`

`
const ContactSpan = styled.span`
    padding-right: .8rem;
    color: #fff;
`
const LatestMovies = styled.div`

`
const FooterCopyRight = styled.div`
    background-color: #f2f2f2;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    bottom: 0;
    position: absolute;
`
const CopyrightSpan = styled.span`
    color: #666;
`
const Footer = () => {
    return (
        <FooterContainer>
            <InnerFooterContainer>
                <Title>Subscribe To Our Newsletter</Title>
                <Subscribe />
            </InnerFooterContainer>
            <FooterMiddle>
                <InnerMiddleContainer>
                    <FooterAbout>
                        <TitleFour>About Us</TitleFour>
                        <Text>IMDB Movie is Web App created using Reactjs. I used react styled components to style my application.
                        This App allows you to search for movies by title.
                        </Text>
                    </FooterAbout>
                    <Contact>
                        <TitleFour>Contact</TitleFour>
                        <ContactDetails><ContactSpan>{<ImLocation />}</ContactSpan>4205 Long key Lane 3205</ContactDetails>
                        <ContactDetails><ContactSpan>{<FaEnvelope />}</ContactSpan>johnkennedy1868@yahoo.com</ContactDetails>
                        <ContactDetails><ContactSpan>{<MdLocalPhone />}</ContactSpan>+1 (515) - 400 - 40000</ContactDetails>
                    </Contact>
                    <LatestMovies>
                        <TitleFour>Latest Movies</TitleFour>
                        <ContactDetails>4205 Long key Lane 3205</ContactDetails>
                        <ContactDetails>johnkennedy1868@yahoo.com</ContactDetails>
                        <ContactDetails>+1 (515) - 400 - 40000</ContactDetails>
                    </LatestMovies>
                    <LatestMovies>
                        <TitleFour>Helpful Links</TitleFour>
                        <ContactDetails>4205 Long key Lane 3205</ContactDetails>
                        <ContactDetails>johnkennedy1868@yahoo.com</ContactDetails>
                        <ContactDetails>+1 (515) - 400 - 40000</ContactDetails>
                    </LatestMovies>
                </InnerMiddleContainer>
            </FooterMiddle>
            <FooterCopyRight>
                <CopyrightSpan>&copy;2021, IMDBMOVIE</CopyrightSpan>
            </FooterCopyRight>
        </FooterContainer>
    )
}

export default Footer
