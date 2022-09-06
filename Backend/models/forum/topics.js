const { default: mongoose } = require("mongoose");
const express = require("express")
const Post = require("../../models/forum/posts")
const Topic = require("../../models/forum/topics")
const router = express.Router()

const topicSchema = mongoose.Schema(
    {
        
        _id: {type: String, required: true},
        dateCreation: {type: Date, required: true, default: Date.now},
        createdBy: {type: String, required: true, default: "admin"},
        posts: {type: Number, required: true, default: 0}
    }
)

module.exports = mongoose.model("topics",topicSchema)