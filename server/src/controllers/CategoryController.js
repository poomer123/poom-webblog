const {Category} = require('../models')

module.exports = {
    // get all
    async index(req, res) {
        try {
            const category = await Category.findAll()
            res.send(category)
        } catch (err){
            res.status(500).send({
                error: 'The category information was incorrect'
            })
        }
    },

    // create
    async create(req, res) {
        try {
            const category = await Category.create(req.body)
            res.send(category.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'Create category incorrect'
            })
        }
    },

    // update
    async put(req, res) {
        try {
            await Category.update(req.body, {
                where: {
                    id: req.params.userId
                }
            })
            res.send(req.body)
        } catch (err) {
            req.status(500).send({
                error: 'Update category incorrect'
            })
        }
    },

    // delete
    async remove(req, res) {
        try {
            const category = await Category.findOne({
                where: {
                    id: req.params.categoryId
                }
            })

            if(!categoryId){
                return res.status(403).send({
                    error: 'The category information was incorrect'
                })
            }

            await category.destroy()
            res.send(category)
        } catch (err) {
            req.status(500).send({
                error: 'The category information was incorrect'
            })
        }
    },

    // get by id
    async show(req, res) {
        try {
            const category = await Category.findById(req.params.categoryId)
            res.send(category)
        } catch (err) {
            req.status(500).send({
                error: 'The category information was incorrect'
            })
        }
    }

}