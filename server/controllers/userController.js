const userController = {};
const jwt = require('jwt-simple');

const config = require('../config');
const db = require('../models')


userController.get = (req, res) => {
  db.User.findById(req.params.id)
    .populate('books')
    .then(user => {
        res.status(200).json({user})
    })
    .catch(err => {
        res.status(500).json({
            message: err
        })
    })
};

// SIGN IN AND SIGN UP

function tokenForUser(user) {
  const timestamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

userController.signin = (req, res) => {
    const { user } = req
    res.json({ token: tokenForUser(user), email: user.email, id: user._id})
}

userController.signup = (req, res) => {
    const { email, password } = req.body

    if(!email || !password)
        return res.status(422).send({error: 'You must provide email and password'})

    db.User.findOne({ email })
                .then(existingUser => {
                    if(existingUser)
                        return res.status(422).json({ error: 'Email is in use' })

                    const user = new db.User({
                        email: email, 
                        password: password
                    })

                    user.save()
                        .then(user => {
                            res.json({
                                    token: tokenForUser(user),
                                    email: user.email,
                                    id: user._id
                                })
                        })
                })
                .catch(err => {
                    res.status(500).json({
                        message: err
                    })
                })
}

userController.updateinfo = (req, res) => {
    const { city, state } = req.body
    const { userId } = req.params

    db.User.findById(userId)
        .then(user => {
          city && (user.city = city)
          state && (user.state = state)

          user.save()
            .then(user => {
                res.json({user})
            })
            .catch(err => {
                res.json({err})
            })
        })
}

module.exports = userController