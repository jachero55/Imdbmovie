import React, { useState } from 'react'
import styled from 'styled-components'

const image_url = 'https://image.tmdb.org/t/p/w200';
const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
`
const ImageContainer = styled.div`

`
const Image = styled.img`
    width: 280px;
    height: 400px;
    object-fit: cover;
    border-radius: .3rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`
const MovieDetails = styled.div`
    padding: .7rem;
    text-align: center;
    position: absolute;
    background: rgba(196, 73, 0, 0.6);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateY(100%);
    transition: all 0.5s ease;
`
const Card = styled.div`
border-radius: .3rem;
cursor: pointer;
transition: all 0.5s ease;
position: relative;
overflow: hidden;
&:hover ${MovieDetails}{
    transform: translateY(0%);
}
&:hover{
    transform: scale(1.1);
}
`

const MovieTitle = styled.h4`
    font-size: 1rem;
    color: #fff;
    line-height: 1.5rem;
`
const MovieReleaseDate = styled.h5`
    font-size: .6rem;
    color: #f2f2f2;
    padding-top: .6rem;
`

const Movies = ({ id, image, language, title, overview, popularity, release_date, vote_count }) => {
    // state for opening the modal
    const [openModal, setOpenModal] = useState(false)
    const openMovieModal = () => {

    }
    return (
        <Container>
            <Card onClick={openMovieModal}>
                <ImageContainer>
                    <Image src={image ? `${image_url}${image}` : `https://images.pexels.com/photos/3601453/pexels-photo-3601453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`} alt={`${title} Poster`} />
                </ImageContainer>
                <MovieDetails details>
                    <MovieTitle>{title}</MovieTitle>
                    <MovieReleaseDate>{release_date}</MovieReleaseDate>
                </MovieDetails>
            </Card>
        </Container>
    )
}

export default Movies
