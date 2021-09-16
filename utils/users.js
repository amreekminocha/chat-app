const users = [];

// addUser, removeUser, getUser, getUsers

const addUser = ({ id, username, room }) => {
    // Clean the data
    username = username.trim().toLowerCase();
    room = room;

    // Validate data
    if (!username || !room) {
        return {
            error: 'Username and room required'
        };
    }
    // Check for existing users
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username;
    });

    if (existingUser) {
        return {
            error: 'Username already exists'
        };
    }

    // Save user
    const user = { id, username, room };
    users.push(user);
    return { user };

};

const removeUser = (id) => {
    const userIndex = users.findIndex((user) => {
        return user.id === id;
    });
    if (userIndex < 0) {
        return {
            error: 'User does not exist'
        };
    }
    return users.splice(userIndex, 1)[0];

};

const getUser = (id) => {
    return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
    return users.filter(user => user.room === room);
};

module.exports = {
    addUser, removeUser, getUser, getUsersInRoom
};

