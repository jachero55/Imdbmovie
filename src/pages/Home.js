import React from 'react'
import styled from 'styled-components'
import Footer from '../components/footer/Footer'
import Form from '../components/form/Form'
import MovieList from '../components/movies/MovieList'

const Main = styled.main`
    margin: 0 auto;
    width: 90vw;
    padding-top: 3rem;
`
const Title = styled.h1`
    font-size: 3rem;
    padding: 2rem 0 1.5rem 0;
    text-align: center;
    color: #f2f2f2;
`
const Container = styled.div`
    
`
const Banner = styled.div`
    position: absolute;
    color: #fff;
    padding: 1rem;
    bottom: 0;
    width: 50vw;
    text-align: center;
    border-top-right-radius: 0.3rem;
    border-top-left-radius: 0.3rem;
    background: #222;
`
const Hero = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        url(https://images.pexels.com/photos/7706429/pexels-photo-7706429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
    height: 50vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Home = () => {
    return (
        <>
            <Hero>
                <Banner>
                    <Title>Search List of Movies</Title>
                    <Form />
                </Banner>
            </Hero>
            <Main>
                <Container>
                    <MovieList />
                </Container>
            </Main>
        </>
    )
}

export default Home
