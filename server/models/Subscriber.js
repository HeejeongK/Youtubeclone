const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscriberSchema = mongoose.Schema({
    userTo: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userForm: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

    
}, { timestamps: true })



module.exports = mongoose.model('Subscriber', SubscriberSchema);

//const Video = mongoose.model('Subscriber', SubscriberSchema);
//const Video = mongoose.model('Video', VideoSchema);

//module.exports = { Subscriber }