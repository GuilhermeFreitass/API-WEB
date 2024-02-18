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
    {
        endpoint: '/users/:id',
        method:'PUT',
        handler:userControllers.updateUser,
    },
    {
        endpoint: '/users/:id',
        method:'DELETE',
        handler:userControllers.deleteUser,
    },
];