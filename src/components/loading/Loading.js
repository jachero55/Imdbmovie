import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ImSpinner } from 'react-icons/im'

const Container = styled.div`

`
const Title = styled.h2`
text-align: center;
color: #f2f2f2;
font-size: 2rem;
`
const KeyFrames = keyframes`
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
`
const SpinSpan = styled.span`
    color: #f2f2f2;
    font-size: 2.5rem;
    display: block;
    margin-right: 1rem;
    animation-name: ${KeyFrames};
    animation-duration: 3000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Loading = () => {
    return (
        <Container>
            <LoadingContainer>
                <SpinSpan>{<ImSpinner />}</SpinSpan>
                <Title>Loading ...</Title>
            </LoadingContainer>
        </Container>
    )
}

export default Loading
