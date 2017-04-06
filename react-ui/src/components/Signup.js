import React from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux';
import * as actions from '../actions'

class Signup extends React.Component {
    state = {
        email: '',
        password: '',
        errors: {}
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
            this.props.signupUser(this.state.email, this.state.password)
        } else {
            this.setState({ errors })
        }

    }
    render() {
       if(this.props.authenticated) {
            return <Redirect to="/allbooks" />
        }

        const { errors } = this.state
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
            </Wrapper>
        )
    }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(Signup);


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