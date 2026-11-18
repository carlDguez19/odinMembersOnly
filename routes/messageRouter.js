const {Router} = require("express");
const msgController = require("../controllers/messageController");
const msgRouter = Router();

msgRouter.post("/", msgController.createMessage);