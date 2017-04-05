import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import styled from 'styled-components'

import Home from './components/Home'
import AllBooks from './containers/AllBooksContainer'
import MyBooks from './containers/MyBooksContainer'
import Signup from './components/Signup'
import Signin from './components/Signin'

const token = localStorage.getItem('token')


const BasicExample = (props) => (
  <Router>
    <App>
      <Nav>
        <Title>The Book Trading App</Title>
        {!token && <Navbar>
          <Li><StyledLink to="/allbooks">All Books</StyledLink></Li>
          <Li><StyledLink to="/signup">Sign up</StyledLink></Li>
          <Li><StyledLink to="/signin">Sign in</StyledLink></Li>
        </Navbar> }

        {token && <Navbar>
          <Li><StyledLink to="/allbooks">All Books</StyledLink></Li>
          <Li><StyledLink to="/mybooks">My Books</StyledLink></Li>
          <Li><StyledLink to="/signout">Log out</StyledLink></Li>
        </Navbar> }

      </Nav>

      <Route exact path="/" component={Home}/>
      <Route path="/allbooks" component={AllBooks}/>
      <Route path="/mybooks" component={MyBooks}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/signout" render={() => <div> <h1>Logged out!</h1> {localStorage.removeItem('token')}</div> } />

    </App>
  </Router>
)

export default BasicExample;


const App = styled.nav`
  background-color: #ffefd5;
  margin: 0;
  padding: 0 10px;
  font-family: Helvetica, Arial, sans-serif;
  min-height: 100vh;
`

const Nav = styled.nav`
  display: flex;
  max-height: 45px;
  margin-bottom: 1rem;
  color: palevioletred;
`

const Title = styled.p`
  flex: 1;
  font-size: 1.2rem;
  margin: 0.5em 0;
  font-weight: bold;
`

const Navbar = styled.ul`
  list-style-type: none;
  text-align: right;

  @media (max-width: 800px) {
    display: none;
  }
`

const Li = styled.li`
  display: inline-block;
  padding-right: 2rem;
`

const StyledLink = styled(Link)`
  color: palevioletred;
  margin: 0.5em 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;