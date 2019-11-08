module.exports = {
    PORT: process.env.PORT || 8000,
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres@localhost/noteful',
    // TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://postgres@localhost/noteful-test'
}