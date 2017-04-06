import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { connect } from 'react-redux';
import * as actions from '../actions'

import BookOverview from '../components/BookOverview'
import InfoField from '../components/InfoField'

class AllBooksContainer extends React.Component {
    componentDidMount = () => {
        this.props.getAllBooks()
        
    }
    render() {
        return (
            <Wrapper>
                <Books>
                    <BookOverview books={this.props.books}/>
                </Books>
                {this.props.authenticated && <Info>
                    <InfoField />
                </Info> }
            </Wrapper>
        )
    }
}

function mapStateToProps(state) {
  return { 
           books: state.allBooks,
           authenticated: state.auth.authenticated 
        };
}

export default connect(mapStateToProps, actions)(AllBooksContainer)


const Wrapper = styled.div`
    display: flex;
`

const Books = styled.div`
    flex: 3;
`

const Info = styled.div`
    flex: 1;
    border-left: 1px solid #ccc;
    padding: 0.5rem;
`