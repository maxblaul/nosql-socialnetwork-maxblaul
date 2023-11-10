const { Thought, User, Reaction } = require('../models');
const { Types } = require('mongoose');

// Define the ThoughtController object which will contain methods for handling Api requests relating to thoughts

const ThoughtController = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find({});
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Handles get thoughts
    async getThoughtsById(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });
            if (!thought) {
                res.status(404).json({ message: 'thought not found' });
            } else {
                res.json(thought);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Handler creates thoughts
    async createThought(req, res) {
        try {
            const thought = await Thought.create({ _id: req.params.thoughtId });
            res.status(201).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Handler for thought deletion
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete({ _id: req.params.thoughtId });
            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Handler for thought update
    async updateThoughtById(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate( req.params.thoughtId, req.body, {
                new: true,
            });
            if (!thought) {
                res.status(404).json({ message: 'thought not found' });
            } else {
                res.json(thought);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Handler for reaction creation
    async createReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );
            thought ? res.json(thought) : res.status(404).json({ message: notFound });
        } catch (e) {
            res.status(500).json(e);
        }
    },

    // Handler for reaction delete

    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            );

            thought ? res.json(thought) : res.status(404).json({ message: notFound });
        } catch (e) {
            res.status(500).json(e);
        }
    },

};
// Export thought controller
module.exports = ThoughtController;