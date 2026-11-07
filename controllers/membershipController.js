function membershipGET(req, res){

    const message = req.session.message;
    delete req.session.message;
    res.render("membership.ejs", {title: "Membership signup", message: message});
}

async function membershipPOST(req, res){
    let message = "";
    if(req.body.riddle.toLowerCase() === "ring"){

        //await logic to turn is_member true

        req.session.message = "You are now a memeber";
        return res.redirect("/membership");
    }else{

        req.session.message = "Try again";
        return res.redirect("/membership");
    }
}

module.exports = {
    membershipGET,
    membershipPOST,
}