const {User} = require('../models')

module.exports = {
    index(req, res) {
        res.send('view all users')
    },

    create(req, res) {
        res.send('create user')
    },

    put(req, res) {
        res.send('update user')
    },

    remove(req, res) {
        res.send('delete user')
    },

    show(req, res) {
        res.send('show user by id')
    }

}