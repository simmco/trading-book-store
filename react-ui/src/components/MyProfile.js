import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import * as actions from '../actions'

class MyProfile extends React.Component {
    state = {
        city: '',
        state: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    updateInfo = (e) => {
        e.preventDefault()
        const {city, state} = this.state
        this.props.updateProfileInfo(city, state)
    }
    render() {
        return(
            <Wrapper>
                <form onSubmit={this.updateInfo}>
                    <h2>Update Profile</h2>
                    <InputHeader>City:</InputHeader>
                    <Input onChange={this.handleChange} value={this.state.city} type="text" name="city"/>
                    <InputHeader>State:</InputHeader>
                    <Input onChange={this.handleChange} value={this.state.state} type="text" name="state"/> <br />
                    <Button type="submit">Save</Button>
                </form>
                <form onSubmit={this.updateInfo}>
                    <h2>Change Password</h2>
                    <InputHeader>Current Password:</InputHeader>
                    <Input />
                    <InputHeader>New Password:</InputHeader>
                    <Input /><br />
                    <Button type="submit">Save</Button>
                </form>
            </Wrapper>
        )
    }
}

// function mapStateToProps(state){
//     return { user:}
// }

export default connect(null, actions)(MyProfile)

const Wrapper = styled.div`
    padding: 1rem;
    border: 1px solid black;
    border-radius: 4px;
    max-width: 250px;
    margin: 0 auto;
`

const InputHeader = styled.p`
    margin: 0.5rem ;
    font-size: 1.2rem;
`

const Input = styled.input`
    border-radius: 4px;
    border: 1px solid #ccc;
    margin: 0.3rem;
    padding: 0.2rem;
    width: 180px;
`

const Button = styled.button`
    font-size: 1.2rem;
    border: 1px solid black;
    border-radius: 4px;
    width: 80px;
    height: 30px;
    background-color: palevioletred;
    text-align: center;
    cursor: pointer;
    margin: 0.5rem 0.4rem 0rem;
`