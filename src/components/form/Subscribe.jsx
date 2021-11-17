import React from 'react'
import styled from 'styled-components'
import { MdOutlineSend } from 'react-icons/md'

const FormContainer = styled.form`
padding-bottom: 1.3rem;
display: flex;
width: 40%;
`
const FormControls = styled.div`
width: 100%;
`
const Input = styled.input`
    padding: .7rem;
    outline: none;
    border-radius: none;
    font-size: 1rem;
    border: 1px solid #C44900;
    flex-grow: 6; 
    width: 100%;
    display: block;
    border-bottom-left-radius: .3rem;
    border-top-left-radius: .3rem;
    letter-spacing: .1rem;
`
const Button = styled.button`
padding: .5rem 2rem;
background: #111;
color: #fff;
font-size: 1.3rem;
border: none;
text-align: center;
cursor: pointer;
border-bottom-right-radius: .3rem;
border-top-right-radius: .3rem;
`
const Subscribe = () => {
    return (
        <FormContainer>
            <FormControls>
                <Input type="text" id="search" name="search" placeholder="john@gmail.com" />
            </FormControls>
            <Button>{<MdOutlineSend />}</Button>
        </FormContainer>
    )
}

export default Subscribe
