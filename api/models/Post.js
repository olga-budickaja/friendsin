const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        body: {
            type: String,
            max: 500
        },
        tag: {
            type: String,
            max: 70
        },
        postImg: {
            type: String
        },
        altImg: {
            type: String
        },
        likes: {
            type: Array,
            default: []
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("Post", PostSchema);