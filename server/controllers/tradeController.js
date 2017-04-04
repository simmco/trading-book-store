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
                user.requestedBooks.push(bookId)
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



module.exports = tradeController