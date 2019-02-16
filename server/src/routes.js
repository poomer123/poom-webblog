const UserController = require('./controllers/UserController')

module.exports = (app) => {
    // user section
    // ============
    // create
    app.post('/user', 
        UserController.create
    )

    // update
    app.put('/user/:userId', 
        UserController.put
    )

    // delete
    app.delete('/user/:userId', 
        UserController.remove
    )

    // view
    app.get('/users', 
        UserController.index
    )

    // view by Id
    app.get('/user/:userId', 
        UserController.show
    )

}