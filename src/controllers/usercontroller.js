const mongoose = require('mongoose')
require('../models/user.model')
const User = mongoose.model('User')

module.exports.create = (req, res, next) => {
    var user = new User();
    //console.log(req.body)
    user.name = req.body.name
    user.email = req.body.email
    user.coins = req.body.coins
    user.Steps = req.body.Steps
    user.save((err, doc) => {
        if (!err)
            res.status(200).send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}
module.exports.getAll = (req, res) => {
    User.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(data)
        }
    })
}