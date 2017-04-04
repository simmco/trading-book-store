const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose

mongoose.Promise = global.Promise

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    city: String,
    state: String,
    books: [{ type: Schema.ObjectId, ref: 'Book'}],
    requestedBooks: [{ type: Schema.ObjectId, ref: 'Book'}]
})

userSchema.pre('save', function(next) {
  // get access to the user model
  const user = this;

  if (!user.isModified('password')) return next();

  // genrate a salt then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }

    // hash(encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if(err) { return next(err); }

      // overwrite plain text password with encrypted password
      user.password = hash;
      next();
    })
  })
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err) }

    callback(null, isMatch)
  })
}

const User = mongoose.model('User', userSchema)

module.exports = User