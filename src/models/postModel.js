const { ObjectID, Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const postModel = new mongoose.Schema({
    judul: {
        type: String,
        trim: true,
        required: true

    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: ObjectID
    },
    createdAt: {
        type: Date
      }

});
const PostModel = mongoose.model('PostModelModel', postModel);

module.exports = PostModel;