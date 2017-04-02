const userController = {};

const db = require('../models')


userController.get = (req, res) => {
  db.User.findById(req.params.id)
    .then(user => {
        res.status(200).json({user})
    })
    .catch(err => {
        res.status(500).json({
            message: err
        })
    })
};


userController.signup = (req, res) => {
    const { email, password } = req.body

    if(!email || !password)
        return res.status(422).send({error: 'You must provide email and password'})

    db.User.findOne({ email })
                .then(existingUser => {
                    if(existingUser)
                        return res.status(422).send({ error: 'Email is in use' })

                    const user = new db.User({
                        email: email, 
                        password: password
                    })

                    user.save()
                        .then(user => {
                            res.json({user})
                        })
                })
                .catch(err => {
                    res.status(500).json({
                        message: err
                    })
                })
}

module.exports = userController