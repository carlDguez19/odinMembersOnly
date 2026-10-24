const express = require("express");
const app = express();
const path = require("node:path");
const authRouter = require("./routes/authRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/auth", authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app listening on port ${PORT}!`);
});

// const pool = require("./db/pool");

// async function testConnection(){
//     try{
//         const result = await pool.query("SELECT NOW()");
//         console.log(result.rows[0]);
//     }catch(error){
//         console.error("Database connection failed: ", error.messsage);
//     }finally{
//         await pool.end();
//     }
// }

// testConnection();