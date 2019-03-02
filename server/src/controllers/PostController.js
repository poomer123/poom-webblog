const {Post} = require('../models')

module.exports = {
    // get all
    async index(req, res) {
        try {
            const posts = await Post.findAll()
            res.send(posts)
        } catch (err){
            res.status(500).send({
                error: 'The posts information was incorrect'
            })
        }
    },

    // create
    async create(req, res) {
        try {
            const post = await Post.create(req.body)
            res.send(post.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'Create post incorrect'
            })
        }
    },

    // update
    async put(req, res) {
        try {
            await Post.update(req.body, {
                where: {
                    id: req.params.postId
                }
            })
            res.send(req.body)
        } catch (err) {
            req.status(500).send({
                error: 'Update post incorrect'
            })
        }
    },

    // delete
    async remove(req, res) {
        try {
            const post = await Post.findOne({
                where: {
                    id: req.params.postId
                }
            })

            if(!post){
                return res.status(403).send({
                    error: 'The post information was incorrect'
                })
            }

            await post.destroy()
            res.send(post)
        } catch (err) {
            req.status(500).send({
                error: 'The post information was incorrect'
            })
        }
    },

    // get by id
    async show(req, res) {
        try {
            const post = await Post.findById(req.params.postId)
            res.send(post)
        } catch (err) {
            req.status(500).send({
                error: 'The post information was incorrect'
            })
        }
    }

}