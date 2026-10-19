const pool = require("./db/pool");

async function testConnection(){
    try{
        const result = await pool.query("SELECT NOW()");
        console.log(result.rows[0]);
    }catch(error){
        console.error("Database connection failed: ", error.messsage);
    }finally{
        await pool.end();
    }
}

testConnection();