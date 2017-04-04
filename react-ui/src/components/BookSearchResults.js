import React from 'react'
import styled from 'styled-components'


export default function BookSearchResults(props) {
    return <Wrapper>
        <BookInfo>
            <Text>{props.volumeInfo.title}</Text> 
            <Text>{props.volumeInfo.authors &&
                   props.volumeInfo.authors.length > 1 ? 
                   props.volumeInfo.authors.join(" & ") :
                   props.volumeInfo.authors
                }</Text>
        </BookInfo>
        {props.picture && <Button onClick={() => props.addBook(props.volumeInfo.title, props.volumeInfo.authors, props.volumeInfo.imageLinks.thumbnail)}>Add</Button>}
        {!props.picture && <Button onClick={() => props.addBook(props.volumeInfo.title, props.volumeInfo.authors)}>Add</Button>}
    </Wrapper>
}

const Wrapper = styled.div`
    padding: 0.5rem;
    border-bottom: 1px solid black;
    display: flex;
`
const Text = styled.p`
    margin: 0;
`

const BookInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const Button = styled.button`
    border: 1px solid black;
    border-radius: 4px;
    width: 35px;
    height: 35px;
    background-color: palevioletred;
    text-align: center;
`