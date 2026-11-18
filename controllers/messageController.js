const messageModel = require("../models/messages");


async function getMessagesGET(req, res){
    const messages = messageModel.getAllMessages()
    res.render("/", {title: "Home", messages: messages});
}