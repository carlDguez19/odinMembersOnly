const {Router} = require("express");
const {isAuthenticated} = require("../middleware/authMiddleware");
const membershipController = require("../controllers/membershipController");
const memberRouter = Router();

memberRouter.get("/membership", isAuthenticated, membershipController.membershipGET);
memberRouter.post("/membership", isAuthenticated, membershipController.membershipPOST);

module.exports = memberRouter;