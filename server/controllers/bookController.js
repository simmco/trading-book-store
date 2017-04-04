const bookController = {}

const db = require('../models')

bookController.get = (req, res) => {
  db.Book.findById(req.params.id)
    .then(book => {
        res.status(200).json({book})
    })
    .catch(err => {
        res.status(500).json({
            message: err
        })
    })
};

bookController.getAll = (req, res) => {
  db.Book.find({})
    .then(books => {
        res.status(200).json({books})
    })
    .catch(err => {
        res.status(500).json({
            message: err
        })
    })
};

bookController.addBook = (req, res) => {

    const { title, authors, pic } = req.body
    const { userId } = req.params

    const book = new db.Book({
        title,
        authors,
        pic,
        _owner: userId
    })

    book.save()
        .then(book => {
            db.User.findById(userId)
                .then(user => {
                    user.books.push(book._id)
                    user.save().then(user => {
                        res.send({
                            user,
                            book
                        })
                    })
                })
        })
        .catch(err => {
            res.send({err})
        })

}


module.exports = bookController