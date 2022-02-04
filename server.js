const express = require("express");
require("dotenv").config();

const app = express();

const itemRoutes = require("./routes/itemRoutes");

app.use((req, res, next) => {
    req.hello = "Bonjour le monde";
    console.log("This is middleware");

    next();
});

app.use("/api/item", itemRoutes);

app.get("/", (req, res) => {
    res.send("Bonjour le monde");
});

const PORT = process.env.PORT || 4000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
