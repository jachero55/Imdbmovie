import React from 'react'
import styled from 'styled-components'
import { ImSpinner7 } from 'react-icons/im'

const Container = styled.div`

`
const Title = styled.h2`

`
const Loading = () => {
    return (
        <Container>
            <Title>Loading ...</Title>
        </Container>
    )
}

export default Loading
