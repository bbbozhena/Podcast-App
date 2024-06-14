"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: Object,
        url: String,
        publicId: String
    },
    favorites: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Audio"
        }],
    followers: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Users"
        }],
    followings: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Users"
        }],
    tokens: [String]
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Users", userSchema);
