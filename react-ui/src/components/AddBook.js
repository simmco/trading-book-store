import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { connect } from 'react-redux';
import * as actions from '../actions'


import BookSearchResults from './BookSearchResults'

class AddBook extends React.Component {
    state = {
        title: '',
        author: '',
        books: []
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    searchBook = (e) => {
        e.preventDefault()
        const { title, author } = this.state
        axios(`https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&maxResults=5`)
        .then(res => {
            console.log(res.data)
            this.setState({
                books: res.data.items
            })
        })
    }
    addBook = (title, authors, pic) => {
        const id = localStorage.getItem('id')
        this.props.addBook(id, title, authors, pic)
    }
    render() {
        return (
        <div>
            <h2>Add Book:</h2>
            <form onSubmit={this.searchBook}>
                Book-Title:<br/>
                <Input name="title" type="text" onChange={this.handleChange} value={this.state.title} /><br/>
                Book-Author(optional):<br/>
                <Input name="author" type="text" onChange={this.handleChange} value={this.state.author} /> <br/>
                <Button type="submit">Search</Button>
            </form>
            {this.state.books && this.state.books.map(book => {
                let picture = true
                if(book.volumeInfo.imageLinks === undefined) {
                    picture = false
                }
                return <BookSearchResults picture={picture} addBook={this.addBook} key={book.id} {...book} />
            })}
        </div>
        )
    }
}

export default connect(null, actions)(AddBook)

const Input = styled.input`
    width: 200px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin: 0.3rem 0;
    padding: 0.2rem;
`


const Button = styled.button`
    margin: 0.5rem 0;
    padding: 0.3rem 1rem;
    border: 1px solid black;
    border-radius: 4px;
    background-color: palevioletred;
    text-align: center;
    font-size: 1rem;
`