import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../actions'

class BookDetail extends React.Component {
    tradeRequest = () => {
        console.log(this.props._id)
        this.props.requestBook(this.props._id)
    }
    render() {
        const isOwner = this.props._owner === localStorage.getItem('id') ? true : false
        console.log(isOwner)
    return (
        <div>
            <Wrapper>
                <Image style={{ 'backgroundImage': 'url('+ this.props.pic + ')'}}>
                </Image>
                <Bottom>
                    <Book>
                        {this.props.title}<br/>
                        {this.props.authors}
                    </Book>
                {!isOwner && <Button onClick={this.tradeRequest}>Trade</Button> }
                </Bottom>
            </Wrapper>
        </div>
    )

    }
}

export default connect(null, actions)(BookDetail)


const Wrapper = styled.div`
  width: 180px;
  height: 340px;
  margin: 1rem;
  border: 1px solid black;
  font-size: 0.9rem;
background-color: white;
`

const Image = styled.div`
  background-color: palevioletred;
  background-size: contain;
  height: 80%;
  border-bottom: 1px solid black;
`

const Bottom = styled.div`
  display: flex;
`

const Book = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
`

const Button = styled.button`
    border: 1px solid black;
    border-radius: 4px;
    width: 35px;
    height: 35px;
    background-color: palevioletred;
    text-align: center;
    cursor: pointer;
`