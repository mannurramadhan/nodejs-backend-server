const express = require("express");
require("dotenv").config();
const sequelize = require("./utils/database");
require("./models/itemModel");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

app.use(express.json());

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

sequelize
    .authenticate()
    .then(() => {
        sequelize.sync().then(() => {
            console.log("Database has connected!");
            app.listen(
                PORT,
                console.log(
                    `Server running in ${process.env.NODE_ENV} on port ${PORT}`
                )
            );
        });
    })
    .catch(() => {
        console.log("Database disconnected!");
    });
