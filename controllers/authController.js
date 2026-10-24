async function signUpGET(req,res,next){
    try{
        res.render("views/signUp.ejs", {title: "Sign Up"});
    }catch(err){
        next(err);
    }
}