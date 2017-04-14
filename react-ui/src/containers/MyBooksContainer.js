import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { connect } from 'react-redux';
import * as actions from '../actions'

import BookOverview from '../components/BookOverview'
import InfoField from '../components/InfoField'

class MyBooksContainer extends React.Component {
    componentDidMount = () => {
      this.props.getMyBooks()
    }

    render() {
        return (
            <Wrapper>
                <Books>
                    <h2>My Books:</h2>
                    <BookOverview books={this.props.books} />
                </Books>
                <Info>
                    <InfoField  />
                </Info> 
            </Wrapper>
        )
    }
}

function mapStateToProps(state) {
  return { books: state.myBooks };
}

export default connect(mapStateToProps, actions)(MyBooksContainer)

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
`

const Books = styled.div`
    flex: 3;
`

const Info = styled.div`
    flex: 1;
    border-left: 1px solid #ccc;
    padding: 1rem;

    @media (max-width: 475px) {
        border-left: none;
        border-bottom: 1px solid #ccc;
    }
`