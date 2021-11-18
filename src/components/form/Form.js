import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/Context'
import { BsSearch } from 'react-icons/bs'

const FormContainer = styled.form`
padding-bottom: 1.3rem;
display: flex;
width: 100%;
`
const FormControls = styled.div`
width: 100%;
`
const Input = styled.input`
    padding: 1rem;
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
padding: .8rem 2rem;
background: #C44900;
color: #fff;
font-size: 1.2rem;
border: none;
text-align: center;
cursor: pointer;
border-bottom-right-radius: .3rem;
border-top-right-radius: .3rem;
`

const Form = () => {
    const { setSearchTerm } = useGlobalContext();
    const [value, setValue] = useState('')

    const searchMovies = (event) => {
        setValue(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setSearchTerm(value)
    }
    return (
        <FormContainer>
            <FormControls>
                <Input type="text" id="search" name="search" placeholder="Search for Movies ..." onChange={searchMovies} />
            </FormControls>
            <Button onClick={handleFormSubmit}>{<BsSearch />}</Button>
        </FormContainer>
    )
}

export default Form
