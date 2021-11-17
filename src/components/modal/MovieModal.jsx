import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 888889;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
`
const Container = styled.div`
    width: 40%;
    background: #fff;
    padding: 2rem;
    position: relative;
    border-radius: .3rem;
`
const Button = styled.button`
    background: #fff;
    padding: .2rem;
    border: none;
    font-size: 1.5rem;
    color: #C44900;
    position: absolute;
    top: -10%;
    right: 0;
    border-radius: .3rem;
    cursor: pointer;
    transition: all .5s ease;
    &:hover{
        background: #C44900;
        color: #fff;
    }
`
const ImageContainer = styled.div`

`
const Image = styled.img`

`
const Details = styled.div`

`
const Title = styled.h1`
    padding: .5rem 0;
    color: #C44900;
`
const Text = styled.p`

`

const MovieModal = () => {
    return (
        <Overlay>
            <Container>
                <Button>{<FaTimes />}</Button>
                <ImageContainer>
                    <Image src="https://images.pexels.com/photos/6633/car-superhero-symbol-batman.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Movie" />
                </ImageContainer>
                <Details>
                    <Title>Things Fall Apart</Title>
                    <Text>The base URL for all locations. If your app is served from a sub-directory on your server, you’ll want to set this to the sub-directory. A properly formatted basename should have a leading slash, but no trailing slash.</Text>
                </Details>
            </Container>
        </Overlay>
    )
}

export default MovieModal
