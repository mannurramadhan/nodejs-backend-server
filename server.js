const express = require("express");
require("dotenv").config();

const app = express();

const itemRoutes = require("./routes/itemRoutes");

app.use(itemRoutes);

app.get("/", (req, res) => {
    res.send("Bonjour le monde");
});

const PORT = process.env.PORT || 4000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
