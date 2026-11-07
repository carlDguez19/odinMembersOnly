const {Router} = require("express");
const midware = require("../middleware/authMiddleware");
const memberRouter = Router();



module.exports = memberRouter;