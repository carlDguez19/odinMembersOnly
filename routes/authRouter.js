const {Router} = require("express");
const authController = require("../controllers/authController");
const authRouter = Router();

authRouter.get("/sign-up", authController.signUpGET); //render signup form route

module.exports = authRouter;