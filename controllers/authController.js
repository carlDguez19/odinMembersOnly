const bcrypt = require("bcryptjs");
const pool = require("../db/pool");

function signUpGET(req,res){
    res.render("signUp.ejs", {title: "Sign Up"});
}

async function signUpPOST(req,res) {
    const {firstName, lastName, username, password, cpassword} = req.body;

    if(!firstName || !lastName || !username || !password || !cpassword){
        return res.status(400).send("Please complete all fields.");
    }

    if(password !== cpassword){
        return res.status(400).send("Passwords do not match.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try{
        
        const result = await pool.query(
            `INSERT INTO users (fname, lname, username, password)
            VALUES ($1, $2, $3, $4)
            RETURNING id`,
            [firstName, lastName, username, hashedPassword]
        );

        return res.redirect("/");

    }catch(error){
        
        if(error.code === "23505"){
            return res.status(409).send("That username is already taken.");
        }

        throw error;
    }
}

function logInGET(req,res){
    res.render("logIn.ejs", {title: "Log In"});
}

async function logInPOST(req, res){
    
}

module.exports = {
    signUpGET,
    signUpPOST,
    logInGET,
    logInPOST,
}