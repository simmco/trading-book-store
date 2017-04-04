import React from 'react'
import styled from 'styled-components'

export default function BookDetail(props) {
    return <div>
        <Wrapper>
            <Image />
            <Bottom>
                <Book>
                    {props.name}
                    <span>Author</span>
                </Book>
               <Icon>Icon</Icon>
            </Bottom>
        </Wrapper>
    </div>
}


const Wrapper = styled.div`
  width: 250px;
  height: 300px;
  margin: 1rem;
  border: 1px solid #ccc;
`

const Image = styled.div`
  background-color: palevioletred;
  height: 85%;
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

const Icon = styled.p`
    padding-right: 0.4rem;
`
