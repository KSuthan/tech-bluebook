const { User } = require('../models');

const userData = [
    {
        username: "test1",
        email: "test1@gmail.com",
        password: "password1"
    },
    {
        username: "test2",
        email: "test2gmail.com",
        password: "password12"
    },
    {
        username: "test3",
        email: "test3@gmail.com",
        password: "password123"
    },
    
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;