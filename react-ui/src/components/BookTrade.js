import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../actions'

class BookTrade extends React.Component {   
    componentDidMount = () => {
        this.props.getTradePartner(this.props.match.params.id)
    }
    render() {
        const { book } = this.props.info
        const { user } = this.props.info
        return (
            <Wrapper>
                {book && 
                <BookInfo>
                    <h3>Book Overview:</h3>
                    <img src={book.pic} />
                    <p>{book.title}</p>
                    <p>{book.authors}</p> 
                </BookInfo>}
               {user && 
                <UserInfo>
                    <h3>Info about trade request</h3>
                    <p>email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
                    {user.city && <p>email: </p>}
                    {user.state && <p>email: {user.state}</p>}
                </UserInfo>}
            </Wrapper>
        )
    }
}

function mapStateToProps(state) {
    return {
        info: state.tradeInfo
    }
}

export default connect(mapStateToProps, actions)(BookTrade)

const Wrapper = styled.div`
    border: 1px solid black;
    box-shadow: 1px solid black;
    background-color: white;
    width: 60%;
    padding: 1rem;
    margin 0 auto;
    display: flex;
`

const BookInfo = styled.div`
    flex: 2;
`

const UserInfo = styled.div`
    flex: 1;
`