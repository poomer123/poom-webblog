module.exports = {
    port: 8081,
    db: {
        database: 'poom-webblog-db',
        user: 'root',
        password: '',
        options: {
            dialect: 'sqlite',
            host: 'localhost',
            storage: './poomdb.sqlite'
        }
    }
}