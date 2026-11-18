const messageModel = require("../models/messages");


async function getMessagesGET(req, res){
    const messages = await messageModel.getAllMessages()
    res.render("home.ejs", {title: "Home", messages: messages, user: req.user});
}

module.exports = {
    getMessagesGET,
}