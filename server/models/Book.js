const mongoose = require('mongoose')

const { Schema } = mongoose

mongoose.Promise = global.Promise

const bookSchema = new Schema({
    title: String,
    authors: [String],
    pic: String,
    _owner: { type: Schema.ObjectId, ref: 'User'},
    _requestedBy: { type: Schema.ObjectId, ref: 'User'},
    reqAccepted: { type: Boolean, default: false }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book