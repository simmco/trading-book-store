import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../actions'

class BookDetail extends React.Component {
    state = {
        isRequested: !!this.props._requestedBy
    }
    tradeRequest = () => {
        this.props.requestBook(this.props._id)
        this.setState({
            isRequested: true
        })
    }
    render() {
        const isOwner = this.props._owner === localStorage.getItem('id') ? true : false
    return (
        <div>
            <Wrapper>
                <Image style={{ 'backgroundImage': 'url('+ this.props.pic + ')'}}>
                </Image>
                <Bottom>
                    <Book>
                        <BookTitle>{this.props.title.substring(0,20)}</BookTitle>
                        <BookAuthor>{this.props.authors}</BookAuthor>
                    </Book>
                {!isOwner && !this.state.isRequested && <Button onClick={this.tradeRequest}>Trade</Button> }
                </Bottom>
            </Wrapper>
        </div>
    )

    }
}

export default connect(null, actions)(BookDetail)


const Wrapper = styled.div`
  width: 180px;
  height: 280px;
  margin: 1rem;
  padding: 0.5rem;
  border: 1px solid black;
  box-shadow: 2px 2px 2px black;
  font-size: 0.9rem;
  background-color: white;
`

const Image = styled.div`
  background-size: fit;
  background-repeat: no-repeat;
  background-position: center; 
  height: 70%;
  margin: 0 auto;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #ccc;
  padding: 0.5rem;
`

const Bottom = styled.div`
  display: flex;
  align-items: center; 
  height: 30%;
`

const Book = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const BookTitle = styled.p`
    margin:0;
    font-size: 0.9rem;
`
const BookAuthor = styled.p`
    margin:0;
    font-size: 0.8rem;
    color: #ccc;
`

const Button = styled.button`
    margin: 0.5rem; 
    border: 1px solid black;
    border-radius: 4px;
    width: 45px;
    height: 35px;
    background-color: palevioletred;
    text-align: center;
    cursor: pointer;
`