let express = require('express')
let bodyParser = require('body-parser')

const { sequelize } = require('./models')

const config = require('./config/config')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


let port = process.env.PORT || config.port

require('./routes')(app)

app.get('/status', (req, res) => {
    res.send('hello nodeJs server')
})


sequelize.sync({force: false}).then(
    () => {
        app.listen(port, () => {
            console.log('server is running ' + port)
        })
    }
)