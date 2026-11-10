const pool = require("../db/pool");

function membershipGET(req, res){

    const message = req.session.message;
    delete req.session.message;
    res.render("membership.ejs", {title: "Membership signup", message: message});
}

async function membershipPOST(req, res, next){
    if(req.body && typeof req.body.riddle === "string" && req.body.riddle.trim().toLowerCase() === "ring"){

        try{
            await pool.query(
                "UPDATE users SET is_member = true WHERE id = $1",
                [req.user.id]
            );

            req.session.message = "You are now a member";
            return res.redirect("/membership");
        }catch (error){
            next(error);
        }
    }else{

        req.session.message = "Try again";
        return res.redirect("/membership");
    }
}

module.exports = {
    membershipGET,
    membershipPOST,
}