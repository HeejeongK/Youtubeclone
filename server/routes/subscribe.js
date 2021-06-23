const express = require('express');
const router = express.Router();
const { Subscriber } = require("../models/Subscriber");
/* const multer = require("multer");
const { auth } = require("../middleware/auth");
var ffmpeg = require("fluent-ffmpeg") 
 const upload = multer({ storage: storage }).single("file");
 */
//=================================
//             Subscribe
//=================================

router.post('/subscribeNumber', (req, res) => {
    Subscriber.find({ 'userTo': req.body.userTo })
    .exec((err, subscribe) => {
        if(err) return res.status(400).send(err);
        return res.status(200).json({ success: true, subscribeNumber: this.subscribe.length })
    })
   


});

router.post("/subscribed", (req, res) => {
 
    Subscriber.find({ 'userTo': req.body.userTo, 'userForm': req.body.userForm })
    .exec((err, subscribe) => {
        if(err) return res.status(400).send(err);
        let result = false
        if(subscribe.length !== 0) {
            result = true
        }
        res.status(200).json({ success: true, subscribed: result })

        })
 
});





module.exports = router;