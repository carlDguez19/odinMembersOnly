const pool = require("./db/pool.js");

async function findUserByUsername(username){
    const {rows} = await pool.query(`SELECT * FROM users
        WHERE users.username = $1`, [username]);
    return rows[0];
}

async function createUser(firstName, lastName, uname, hashedPassword){
    const {rows} = await pool.query(`INSERT INTO users
        (fname, lname, username, password) VALUES ($1,$2,$3,$4)
        RETURNING id, fname, lname, username`, [firstName, lastName, uname, hashedPassword]);
        
    return rows[0];
}

async function becomeMember(userId){
    await pool.query(`UPDATE users
        SET is_member = TRUE
        WHERE id = $1`, [userId]);
}

async function becomeAdmin(userId){
    await pool.query(`UPDATE users
        SET is_admin = TRUE
        WHERE id = $1`, [userId]);
}

module.exports = {
    findUserByUsername,
    createUser,
    becomeMember,
    becomeAdmin
};