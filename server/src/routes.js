const UserController = require('./controllers/UserController')

module.exports = (app) => {
    // user section
    // ============
    // create user
    app.post('/user',
        UserController.create
    )

    // update user
    app.put('/user/:userId', 
        UserController.put
    )

    // delete user
    app.delete('/user/:userId', 
        UserController.remove
    )

    // view user
    app.get('/users', 
        UserController.index
    )

    // view user by Id
    app.get('/user/:userId', 
        UserController.show
    )




    // category section
    // ============
    // create category
    app.post('/category',
        UserController.create
    )

    // update category
    app.put('/category/:categoryId', 
        UserController.put
    )

    // delete category
    app.delete('/category/:categoryId', 
        UserController.remove
    )

    // view category
    app.get('/categories', 
        UserController.index
    )

    // view category by Id
    app.get('/category/:categoryId', 
        UserController.show
    )
}