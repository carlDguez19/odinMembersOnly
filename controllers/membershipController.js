function membershipGET(req, res){
    res.render("membership.ejs", {title: "Membership signup"});
}

async function membershipPOST(req, res){
    let message = "";
    if(req.body.riddle.toLowerCase() === "ring"){
        message = "You are now a member.";

        //await logic to turn is_member true

        return res.redirect("/membership", {message: message});
    }else{
        message = "Try again";

        return res.redirect("/membership", {message:message});
    }
}

module.exports = {
    membershipGET,
    membershipPOST,
}