import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { BsArrowLeft } from 'react-icons/bs'
import Footer from '../components/footer/Footer'

const Main = styled.main`
    margin: 0 auto;
    width: 90vw;
    padding-top: 3rem;
`
const Container = styled.div`
    margin: 0 auto;
    width: 60vw;
`
const MovieContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
`
const MoviePosterContainer = styled.div`
    
`
const Image = styled.img`
    width: 550px;
    height: auto;
    border-radius: .3rem;
`
const MovieDetails = styled.div`
    flex: 2;
`
const HeadingOne = styled.h2`
    color: #C44900;
    font-size: 1.5rem;
    padding-bottom: .5rem;
`
const Overview = styled.p`
    color: #f2f2f2;
`
const Button = styled.button`
    background: transparent;
    border: none;
    font-size: 1.7rem;
    display: block;
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid #C44900;
    padding: .3rem 1rem;
    color: #fff;
    cursor: pointer;
    text-align: center;
    &:hover {
        color: #C44900;
    }
`
const Details = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    margin: 1rem 0;
`
const DetailsContent = styled.div`
    text-align: center;
`

const DetailsTitle = styled.h4`
color: #C44900;
margin-bottom: .5rem;
`
const ContentSpan = styled.span`

`

const SingleMovie = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }
    return (
        <>
            <Main>
                <Container>
                    <MovieContainer>
                        <MoviePosterContainer>
                            <Image src="https://images.pexels.com/photos/7672276/pexels-photo-7672276.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="movie" />
                        </MoviePosterContainer>
                        <MovieDetails>
                            <HeadingOne>Title: Bat Man and Friends</HeadingOne>
                            <Details>
                                <DetailsContent>
                                    <DetailsTitle>Language</DetailsTitle>
                                    <ContentSpan>English</ContentSpan>
                                </DetailsContent>
                                <DetailsContent>
                                    <DetailsTitle>Release_Date</DetailsTitle>
                                    <ContentSpan>2021-08-12</ContentSpan>
                                </DetailsContent>
                                <DetailsContent>
                                    <DetailsTitle>Popularity</DetailsTitle>
                                    <ContentSpan>12367</ContentSpan>
                                </DetailsContent>
                            </Details>
                            <Overview>Overview: A portal is necessary here due to accessibility. The HTML for a modal dialog element should not be nested inside of other elements, and instead should be appended to the end of the DOM. A portal allows us to append the modal component to the outside of the inner elements.</Overview>
                            <Button onClick={handleClick}>{<BsArrowLeft />}</Button>
                        </MovieDetails>
                    </MovieContainer>
                </Container>
            </Main>
            <Footer />
        </>
    )
}

export default SingleMovie
