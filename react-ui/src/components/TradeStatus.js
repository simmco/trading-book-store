import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../actions'

class TradeStatus extends React.Component{
    componentDidMount = () => {
        this.props.requestedBooks()
    }
    render() {
        console.log(this.props.trade)
        return (
        <div>
            <h2>Trade request you made</h2>
                {this.props.trade.requestedBooks && this.props.trade.requestedBooks.map(trade => {
                    return <p>{trade.title} - {trade.authors}</p>
                })}
            <h2>Trade request for you</h2>
                {this.props.books && this.props.books.map(book => {
                    return <p>{book._requestedBy && <p>{book.title}</p>}</p>
                })}
        </div>
        )
    }

}

function mapStateToProps(state) {
  return { 
            trade: state.trade,
            books: state.myBooks
         }
}

export default connect(mapStateToProps, actions)(TradeStatus)