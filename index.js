const express = require("express");
const connectDatabase = require("./config/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/api"));

connectDatabase()
    .then(() => {
        console.log("Database connected and synchronized");
    })
    .catch((err) => {
        console.error("Database initialization failed:", err.message);
    });

module.exports = app;