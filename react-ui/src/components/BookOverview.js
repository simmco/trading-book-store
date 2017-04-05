import React from 'react'
import styled from 'styled-components'


import BookDetail from './BookDetail'

export default function BookOverview (props) {
    return <div>
        <Wrapper>
            {props.books.map(book => (
                    <BookDetail key={book._id} {...book} />
            ))}
        </Wrapper>
    </div>
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`