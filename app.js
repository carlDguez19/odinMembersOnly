const express = require("express");
const app = express();
const path = require("node:path");
const pool = require("./db/pool");

app.use(express.urlencoded({ extended: true }));
const authRouter = require("./routes/authRouter");

const session = require("express-session");
const passport = require("passport");
require("./config/passport");
const pgSession = require("connect-pg-simple")(session);

const sessionStore = new pgSession({
  pool: pool,
  createTableIfMissing: true,
});

app.use(session({
  store: sessionStore,
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

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