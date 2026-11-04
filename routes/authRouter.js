const {Router} = require("express");
const authController = require("../controllers/authController");
const authRouter = Router();

//sign up page
authRouter.get("/sign-up", authController.signUpGET);
authRouter.post("/sign-up", authController.signUpPOST);

//log in page
authRouter.get("/login", authController.logInGET);
authRouter.post("/login", authController.logInPOST);

module.exports = authRouter;