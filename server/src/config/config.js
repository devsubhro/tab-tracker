module.exports = {
    port: process.env.PORT || 8081,

    db: {
        database: process.env.DB_NAME || 'tab-tracker',
        username: process.env.DB_USER_NAME || 'root',
        password: process.env.DB_PASSWORD || 'user123',
        options: {
            host: process.env.DB_HOST || 'localhost',
            dialect: 'mysql'
        }
    }
};