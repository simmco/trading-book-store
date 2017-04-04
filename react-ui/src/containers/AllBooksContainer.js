import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

import BookOverview from '../components/BookOverview'
import InfoField from '../components/InfoField'

export default class AllBooksContainer extends React.Component {
    state = {
        books : [],
        error : ''
    }
    componentDidMount = () => {
        axios.get('/api/books')
            .then(response => {
                this.setState({
                    books: response.data.books
                })
            })
            .catch(error => {
                this.setState({
                    error
                })
            });
    }
    render() {
        return (
            <Wrapper>
                <Books>
                    <BookOverview books={this.state.books}/>
                </Books>
                {this.state.trades && 
                <Info>
                    <InfoField />
                </Info> }
            </Wrapper>
        )
    }
}

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