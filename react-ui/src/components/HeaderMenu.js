import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'


class HeaderMenu extends React.Component {
    render() {
        return (
            <div>
                {this.props.authenticated ? (
                    <Navbar>
                        <Li><StyledLink to="/allbooks">All Books</StyledLink></Li>
                        <Li><StyledLink to="/mybooks">My Books</StyledLink></Li>
                        <Li><StyledLink to="/signout" onClick={() => {this.props.signoutUser()}}>Sign out</StyledLink></Li>
                    </Navbar> 
                   
          ) : (
                    <Navbar>
                        <Li><StyledLink to="/allbooks">All Books</StyledLink></Li>
                        <Li><StyledLink to="/signup">Sign up</StyledLink></Li>
                        <Li><StyledLink to="/signin">Sign in</StyledLink></Li>
                   </Navbar> 
          )}

            </div>
        )
    }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect (mapStateToProps, actions)(HeaderMenu)

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

const AuthButton = withRouter(({ history }) => (
    <p>
      <StyledLink to="/signout" onClick={() => {
        this.props.signoutUser()(() => history.push('/'))
      }}>
      Sign out
      </StyledLink>
    </p>
  ) 
)