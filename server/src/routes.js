const UserController = require('./controllers/UserController')
const CategoryController = require('./controllers/CategoryController')
const PostController = require('./controllers/PostController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./policie/isAuthenController')

let multer = require("multer")

module.exports = (app) => {

    let storage = multer.diskStorage({
        destination: function(req, file, callback) {
            callback(null, "./public/uploads");
        },
        filename: function(req, file, callback) {
            // callback(null, file.fieldname + '-' + Date.now());
            console.log(file);
            callback(null, file.originalname);
        }
    })

    let upload = multer({ storage: storage }).array("userPhoto", 10)
    // upload
    app.post("/upload", function(req, res) {
        // isUserAuthenticated,
        upload(req, res, function(err) {
            if (err) {
                return res.end("Error uploading file.");
            }
            res.end("File is uploaded");
        })
    })

    //delete file uploaded function
    app.post('/upload/delete', async function (req, res) {
        try {
            const fs = require('fs');      

            console.log(req.body.filename)
            fs.unlink(process.cwd() + '/public/uploads/' + req.body.filename, (err) => {
                if (err) throw err;
                res.send("Delete sucessful")
                // console.log('successfully deleted material file');
            });
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to delete file the material'
            })
        }
    }),

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
        isAuthenController, 
        UserController.index
    )

    // view user by Id
    app.get('/user/:userId', 
        UserController.show
    )

    // user register
    app.post('/register',
        UserAuthenController.register
    )

    // user login
    app.post('/login',
        UserAuthenController.login
    )



    // category section
    // ============
    // create category
    app.post('/category',
        CategoryController.create
    )

    // update category
    app.put('/category/:categoryId', 
        CategoryController.put
    )

    // delete category
    app.delete('/category/:categoryId', 
        CategoryController.remove
    )

    // view category
    app.get('/categories', 
        CategoryController.index
    )

    // view category by Id
    app.get('/category/:categoryId', 
        CategoryController.show
    )




    // post section
    // ============
    // create post
    app.post('/post',
        PostController.create
    )

    // update post
    app.put('/post/:postId', 
        PostController.put
    )

    // delete post
    app.delete('/post/:postId', 
        PostController.remove
    )

    // view post
    app.get('/posts', 
        PostController.index
    )

    // view post by Id
    app.get('/post/:postId', 
        PostController.show
    )


}