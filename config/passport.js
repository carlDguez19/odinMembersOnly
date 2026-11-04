const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const pool = require("../db/pool");
const bcrypt = require("bcryptjs");

passport.use(
    new localStrategy(async(username, password, done) => {
        try{

            const result = await pool.query(
                "SELECT * FROM users WHERE username = $1",[username]
            );
            
            if(result.rows.length === 0){
                return done(null, false, {message: "Incorrect username or password."});
            }

            const user = result.rows[0];
            const match = await bcrypt.compare(password, user.password);

            if(!match){
                return done(null, false, {message: "Incorrect username or password."});
            }
            return done(null, user);

        }catch(error){
            return done(error);
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    
    try{
        const result = await pool.query(
            `SELECT id, fname, lname, username, is_member, is_admin
            FROM users
            WHERE id = $1`, [id]
        );

        if (result.rows.length === 0){
            return done(null, false);
        }

        return done(null, result.rows[0]);

    }catch(error){
        return done(error);
    }

});