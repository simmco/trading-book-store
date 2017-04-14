import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../actions'

class TradeStatus extends React.Component{
    componentDidMount = () => {
        this.props.requestedBooks()
    }
    declineReq = (bookId, requestId) => {
        const placeholder = requestId || localStorage.getItem('id')
        this.props.cancelReq(bookId, placeholder)
    }
    rejectReq = (bookId, requestId) => {
        this.props.rejectReq(bookId, requestId)
    }
    render() {
        console.log(this.props.books)
        return (
        <div>
            <h2>Trade request you made</h2>
                {this.props.trade.requestedBooks && this.props.trade.requestedBooks.map(trade => {
                    return trade && <div key={trade._id}>
                        <Trade><TradeInfo>{trade.title} - {trade.authors}</TradeInfo><TradeDecline onClick={() => this.declineReq(trade._bookId)}> X</TradeDecline> </Trade>
                    </div>
                })}
            <h2>Trade request for you</h2>
                {this.props.books && this.props.books.map(book => {
                    return book._requestedBy && <div key={book._id}>
                        <Trade><TradeInfo>{book.title}</TradeInfo><TradeDecline onClick={() => this.rejectReq(book._id, book._requestedBy)}> X</TradeDecline><TradeConfirm><Link to={{ pathname:`/trade/${book._id}`}}>&#x2714;</Link></TradeConfirm></Trade>
                        </div>
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

const Trade = styled.p`
    margin: 0.5rem;
    background-color: white;
    padding: 0.2rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    align-items: center;
`

const TradeInfo = styled.span`
    flex: 1;
`

const TradeDecline = styled.span`
    color: red;
    cursor: pointer;
`

const TradeConfirm = styled.span`
    color: green;
    padding-left: 0.2rem;
    cursor: pointer;
`