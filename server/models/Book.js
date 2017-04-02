const mongoose = require('mongoose')

const { Schema } = mongoose

mongoose.Promise = global.Promise

const bookSchema = new Schema({
    name: String,
    _owner: { type: Schema.ObjectId, ref: 'User'}
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book