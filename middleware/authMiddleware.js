const passport = require("passport");

function isAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        next();
    }
    res.redirect("/auth/login");
}

module.exports = {
    isAuthenticated,
}