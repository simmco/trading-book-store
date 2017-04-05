import axios from 'axios'
import { ADD_BOOK, AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE, GET_ALL_BOOKS, GET_MY_BOOKS } from './types'

const ROOT_URL = 'https://lit-brook-10809.herokuapp.com/api'

export function signinUser(email, password) {
  return function(dispatch) {

    axios.post(`${ROOT_URL}/user/signin`,{ email, password })
        .then(res => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('id', res.data.id)
            dispatch({ type: AUTH_USER })
        })
        .catch(error => {
            dispatch(authError(error.response.data.error))
        })
  }
}

export function signupUser(email, password) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/user/signup`, {email, password})
      .then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('id', res.data.id)
        dispatch({ type: AUTH_USER })
      })
      .catch(error => {
          dispatch(authError(error.response.data.error))
      })

  }
}

export function signoutUser() {
  localStorage.removeItem('token')
  return {
    type: UNAUTH_USER
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}


export function getAllBooks() {
  return function(dispatch){
    axios.get(`${ROOT_URL}/books`)
            .then(res => {
                dispatch({ 
                    type: GET_ALL_BOOKS,
                    payload: res.data.books
                })
            })
            .catch(error => {
                console.log(error)
            })
  }
}

export function getMyBooks() {
  const id = localStorage.getItem('id')
  return function(dispatch){
    axios.get(`${ROOT_URL}/user/${id}`)
            .then(res => {
                dispatch({ 
                    type: GET_MY_BOOKS,
                    payload: res.data.user.books
                })
            })
            .catch(error => {
                console.log(error)
            })
  }
}

export function addBook(id, title, authors, pic) {
   
   return function(dispatch){
      axios.post(`${ROOT_URL}/user/${id}/addbook`, {title, authors, pic})
        .then(res => {
            dispatch({ 
              type: ADD_BOOK,
              payload: res.data.book
          })
        })
        .catch(err => {
            console.log(err)
        })
   }
}