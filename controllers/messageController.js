const messageModel = require("../models/messages");


async function getMessagesGET(req, res){
    const messages = await messageModel.getAllMessages()
    res.render("home.ejs", {title: "Home", messages: messages, user: req.user});
}

async function createMessage(req, res, next){
    const {msgTitle: title, msg: message} = req.body;

    if(!title || !message){
        return res.status(400).send("Please complete all fields");
    }
    
    try{
        const newMsg = await messageModel.createMessage(title, message, req.user.id);
        return res.redirect("/");
    }catch(error){
        next(error);
    }
    
}

module.exports = {
    getMessagesGET,
}