let express = require('express')
const app = express()
let port = 8080

app.get('/status', (req, res) => {
    res.send('hello nodeJs server')
})

// user section
// ============
// create
app.post('/user', (req, res) => {
    res.send('Ok I create user')
})

// update
app.put('/user/:userId', (req, res) => {
    res.send('Ok I updated user')
})

// delete
app.delete('/user/:userId', (req, res) => {
    res.send('Ok I delete user')
})

// view
app.get('/users', (req, res) => {
    res.send('view all users')
})

// view by Id
app.get('/user/:userId', (req, res) => {
    res.send('view user by Id')
})






app.listen(port, () => {
    console.log('server is running ' + port)
})