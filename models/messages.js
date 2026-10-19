const pool = require("./db/pool.js");

async function getAllMessages(){
    const {rows} = await pool.query(`SELECT *.messages, users.fname, users.lname
        FROM messages JOIN users ON users.id = messages.author_id `);
    
    return rows;
}

async function createMessage(title, message, authorId){
    const {rows} = await pool.query(`INSERT INTO messages
        (title, message, author_id) VALUES ($1,$2,$3)
        RETURNING *)`, [title, message, authorId]);

    return rows[0];
}

async function updateMessage(title, message, id, authorId){
    const {rows} = await pool.query(`UPDATE messages
        SET title = $1, message = $2
        WHERE id = $3 AND author_id = $4
        RETURNING *`, [title, message, id, authorId]);

    return rows[0];
}

async function deleteMessage(id){
    const {rows} = await pool.query(`DELETE FROM messages
        WHERE id = $1
        RETURNING *`, [id])

    return rows[0];
}

module.exports = {
    getAllMessages,
    createMessage,
    updateMessage,
    deleteMessage
};