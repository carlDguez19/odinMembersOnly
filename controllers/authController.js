function signUpGET(req,res){
    res.render("signUp.ejs", {title: "Sign Up"});
}

module.exports = {
    signUpGET,
}