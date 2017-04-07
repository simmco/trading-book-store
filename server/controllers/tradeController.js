const tradeController = {}

const db = require('../models')

tradeController.reqbook = (req, res) => {
    const { userId } = req.body
    const { bookId } = req.params

    db.Book.findById(bookId)
    .then(book => {
        book._requestedBy = userId
        book.save()
        .then(book => {
            db.User.findById(userId)
            .then(user => {
                console.log(book)
                user.requestedBooks.push( {title: book.title, authors: book.authors, _bookId: book._id } )
                console.log(user)
                user.save()
                    .then(user => {
                        res.json({
                            user,
                            book
                        })
                    })
            })
    })
    .catch(err => res.json({err}))
    })
    .catch(err => res.json({err}))
}

tradeController.cancelReq = (req, res) => {
    const { bookId } = req.params
    const { userId } = req.body

    db.Book.findById(bookId)
        .then(book => {
            console.log(book)
            book._requestedBy = undefined
            book.save()
            .then(book => {
                db.User.findByIdAndUpdate(userId, { $pull: { "requestedBooks": { _bookId: bookId } } }, { safe: true, upsert: true })
                        .then(user => {
                            res.status(200).json(user.requestedBooks);
                        })
                        .catch(err => {
                            res.json({err})
                        })
            })
        })
}

tradeController.acceptReq = (req, res) => {
    
}



module.exports = tradeController