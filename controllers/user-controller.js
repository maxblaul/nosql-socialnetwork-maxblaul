const { User } = require('../models');

const UserController = {
    // Get all users
    getAllUsers(req, res) {
        User.find({})
        .then(userData => res.json(userData))
        .catch(err => res.status(500).json(err));
    },

    // Get a user by ID
    getUserById(req, res) {
        User.findById(req.params.userId)
        .then(userData => res.json(userData))
        .catch(err => res.status(500).json(err));
    },

    // Create user
    createUser(req, res) {
        User.create(req.body)
        .then(userData => res.json(userData))
        .catch(err => res.status(500).json(err));
    },

    // Update user
    updateUserById(req, res) {
        User.findOneAndUpdate(req.params.id, req.body, { new: true })
        .then(userData => {
            if (!userData) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(userData);
        })
        .catch(err => res.status(500).json(err));
    },

    // Delete user
    deleteUserById(req, res) {
        User.findOneAndDelete(req.params.id)
        .then(userData => {
            if (!userData) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json({ message: 'User has been successfully deleted' });
        })
        .catch(err => res.status(500).json(err));
    },

    // Add a new friend to user's friends list
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $addToSet: { friends: req.body.friendId || req.params.friendId } },
            { new: true }
        )
        .then((dbUserData) => {
            if (!dbUserData) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(dbUserData);
        })
        .catch((err) => res.status(400).json(err));
    },


    removeFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
        .then((dbUserData) => {
            if (!dbUserData) {
                return res.status(404).json({ message: 'No user with this ID!' });
            }
            // check for removal
            const removed = !dbUserData.friends.includes(params.friendId);
            if (removed) {
                res.json({ message: "Friend successfully removed!", dbUserData });
            } else {
                res.json(dbUserData);
            }
        })
        .catch((err) => res.status(400).json(err));
    },
};


// Export controller

module.exports = UserController;
