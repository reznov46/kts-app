require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected"));

app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));
const gunsRouter = require("./routes/guns");
app.use("/guns", gunsRouter);
const trainingRouter = require("./routes/trainings");
app.use("/trainings", trainingRouter);
const ammoRouter = require("./routes/ammo");
app.use('/ammo', ammoRouter)
const usersRouter = require("./routes/users");
app.use("/users", usersRouter)

app.listen(3000, () => console.log("Server started"));

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
