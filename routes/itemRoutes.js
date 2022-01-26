const express = require("express");

const router = express.Router();

router.get("/api/items", (req, res) => {
    res.json({
        success: true,
        massage: "Memanggil semua data items",
    });
});

module.exports = router;
