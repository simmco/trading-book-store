import React from 'react'
import styled from 'styled-components'

export default function BookDetail(props) {
    return <div>
        <Wrapper>
            <Image style={{ 'backgroundImage': 'url('+ props.pic + ')'}}>
            </Image>
            <Bottom>
                <Book>
                    {props.title}<br/>
                    {props.authors}
                </Book>
               <Icon>Icon</Icon>
            </Bottom>
        </Wrapper>
    </div>
}


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

const Icon = styled.p`
    padding-right: 0.4rem;
`
