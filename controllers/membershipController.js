function membershipGET(req, res){
    res.render("membership.ejs", {title: "Membership signup"});
}

module.exports = {
    membershipGET,
}