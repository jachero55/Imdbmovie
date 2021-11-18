import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { BsArrowLeft } from 'react-icons/bs'

const Container = styled.div`
    height: calc(100vh - 560px);
    position: relative;
    background: rgba(0, 0, 0, 0.4);
`
const Image = styled.img`
height: calc(100vh - 86px);
object-fit: cover;
`
const ErrorContent = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: calc(100vh - 86px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.4); 
`
const Title = styled.h1`
    color: #fff;
    font-size: 4rem;
`
const Button = styled.button`
    font-size: 2.3rem;
    cursor: pointer;
    border: 2px solid #fff;
    color: #fff;
    font-weight: 800;
    padding: .2rem 1.2rem;
    display: block;
    margin-top: 1rem;
    background: transparent;
`
const ErrorPage = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }
    return (
        <Container>
            <Image src="https://images.pexels.com/photos/8605923/pexels-photo-8605923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            <ErrorContent>
                <Title>Page Not Found</Title>
                <Button onClick={handleClick}>{<BsArrowLeft />}</Button>
            </ErrorContent>
        </Container>
    )
}

export default ErrorPage
