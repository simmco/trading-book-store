const mongoose = require('mongoose')

const { Schema } = mongoose

mongoose.Promise = global.Promise

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    city: String,
    state: String,
    _books: [{ type: Schema.ObjectId, ref: 'Book'}]
})

const User = mongoose.model('User', userSchema)

module.exports = User