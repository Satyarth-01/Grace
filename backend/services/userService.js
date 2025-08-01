const User = require("../models/user");

async function createUser(data) {
    try {
        const user = new User(data);
        await user.save();
        return user;
    } catch (error) {
        throw error;
    }
}

async function readUsers(filter = {}) {
    try {
        const users = await User.find(filter);
        return users;
    } catch (error) {
        throw error;
    }
}

async function updateUser(filter = {}, data = {}) {
    try {
        const user = await User.findOneAndUpdate(filter, data, {
            new: true,
        });
        return user;
    } catch (error) {
        throw error;
    }
}

async function deleteUser(filter = {}) {
    try {
        await User.deleteOne(filter);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    readUsers,
    updateUser,
    deleteUser,
};
