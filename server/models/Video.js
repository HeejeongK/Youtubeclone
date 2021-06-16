const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = mongoose.Schema({

    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    description :{
        type: String
    },
    privacy: {
        type: Number
    },
    filePath: {
        type: String
    },
    category: {
        type: String
    },
    views: {
        type: Number,
        default: 0
    },
    duraton: {
        type: String,
    },
    thumbnail: {
        type: String
    }
    
}, { timestamps: true })




const Video = mongoose.model('videos', VideoSchema);
//const Video = mongoose.model('Video', VideoSchema);

module.exports = { Video }