import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


export default class Signup extends React.Component {
    state = {
        email: '',
        password: '',
        errors: {},
        serverMessage: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm = (e) => {
        e.preventDefault()
        this.setState({errors: {}})
        const errors = validate(this.state)

        if(Object.keys(errors).length === 0 && errors.constructor === Object) {
            axios.post('/api/user/signup',{ email: this.state.email, password: this.state.password })
             .then(res => {
                 localStorage.setItem('token', res.data.token)
             }).catch(error => {
                 console.log(error.response.data)
                 const errorType = error.response.data.error
                 this.setState({ serverMessage : errorType })
             })
        } else {
            this.setState({ errors })
        }

    }
    render() {
        console.log(this.state)
        const { errors, serverMessage } = this.state
        return(
            <Wrapper>
                <Form onSubmit={this.submitForm}>
                    <InputHeader>Email:</InputHeader>
                    <Input onChange={this.handleChange} value={this.state.email} type="email" name="email" /> <br/>
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                    <InputHeader>Password:</InputHeader>
                    <Input onChange={this.handleChange} value={this.state.password} type="password" name="password"/> <br/>
                    {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}<br/>
                    <Button type="submit">Sign up</Button>
                </Form>
                {serverMessage && <p>{serverMessage}</p>}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 4px;
    width: 400px;
`

const Form = styled.form`
    text-align:center;
    padding: 1rem 2rem;
`

const InputHeader = styled.p`
    margin: 0.5rem 0;
    font-size: 1.2rem;
`

const Input = styled.input`
    width: 250px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin: 0.3rem;
    padding: 0.2rem;
`

const ErrorMessage = styled.p`
    margin: 0;
    color: red;
    padding-bottom: 0.3rem;
`

const Button = styled.button`
    background-color: palevioletred;
    border: 1px solid black;
    border-radius: 4px;
    width: 100px;
    height: 30px;
    cursor: pointer;
    font-size: 1.2rem;
`


const validate = (state) => {
    let errors = {}

    if (state.email === '' ) {
        errors.email = 'Please provide a email'
    }
    if (state.password === '' ) {
        errors.password = 'You need a password'
    }
    return errors;
}