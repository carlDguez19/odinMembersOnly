const {Router} = require("express");
const {isAuthenticated} = require("../middleware/authMiddleware");
const msgController = require("../controllers/messageController");
const msgRouter = Router();

msgRouter.post("/", isAuthenticated, msgController.createMessage);
msgRouter.get("/", msgController.getMessagesGET);