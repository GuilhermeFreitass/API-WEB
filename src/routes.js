const userControllers = require('./controllers/userControllers');

module.exports = [
    {
        endpoint: '/users',
        method:'GET',
        handler:userControllers.listUsers,
    },
    {
        endpoint: '/users/:id',
        method:'GET',
        handler:userControllers.getUserbyId,
    },
    {
        endpoint: '/users',
        method:'POST',
        handler:userControllers.createUser,
    },
];