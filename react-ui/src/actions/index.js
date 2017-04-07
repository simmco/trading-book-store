import axios from 'axios'
import { ADD_BOOK, AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE, GET_ALL_BOOKS, GET_MY_BOOKS, GET_REQ_BOOKS, DELETE_REQ } from './types'

// const ROOT_URL = 'https://lit-brook-10809.herokuapp.com/api'
const ROOT_URL = 'http://localhost:5000/api'

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
      axios.post(`${ROOT_URL}/user/${id}/addbook`, {title, authors, pic}, 
      {
      headers: { authorization: localStorage.getItem('token') }
      })
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

//get books which are requested by other users
export function requestedBooks(){
  const id = localStorage.getItem('id')
  return function(dispatch){
    axios.get(`${ROOT_URL}/user/${id}`)
            .then(res => {
              console.log('action:')
              console.log(res)
                dispatch({ 
                    type: GET_REQ_BOOKS,
                    payload: res.data.user.requestedBooks
                })
            })
            .catch(error => {
                console.log(error)
            })
  }
}


export function requestBook(bookId) {
  const userId = localStorage.getItem('id')
  return function(dispatch){
    axios.patch(`${ROOT_URL}/book/${bookId}/request`,{ userId })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function cancelReq (bookId, requestId) {
  return function(dispatch){
    axios.patch(`${ROOT_URL}/book/${bookId}/cancelreq`, { userId: requestId })
      .then(res => {
        console.log(res.data[0]._bookId)
        dispatch({
          type: DELETE_REQ,
          payload: bookId
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}


export function updateProfileInfo(city, state) {
  const userId = localStorage.getItem('id')
  return function(dispatch){
    axios.patch(`${ROOT_URL}/user/${userId}/updateinfo`,{ city, state })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}