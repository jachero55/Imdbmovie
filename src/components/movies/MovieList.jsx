import React from 'react'
import styled from 'styled-components'
import Loading from '../loading/Loading'
import { useGlobalContext } from '../../context/Context'
import Movie from '../movies/Movies'

const Container = styled.div`

`
const Title = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
`
const MoviesContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
`
const MovieList = () => {
    const { movies, loading } = useGlobalContext();
    console.log("These are the movies ", movies)
    // use condition to show if the movies have been loaded
    if (loading) {
        return <Loading />
    }
    // if movies length is less than one or no match during such, we display no movie found
    if (movies.length < 1) {
        return (
            <Title>No movies matching search!</Title>
        )
    }
    // Else we are returning the movies/ the results of the movies found
    return (
        <Container>
            <MoviesContainer>
                {movies.map((movie) => {
                    return <Movie key={movie.id}{...movie} />
                })}
            </MoviesContainer>
        </Container>
    )
}

export default MovieList
