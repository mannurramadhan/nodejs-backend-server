const Item = require("../models/itemModel");

/*
@desc   Mengambil semua data item
@route  GET /api/items
@access public
*/
exports.getAllItems = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "Berhasil mengambil semua data item",
        middleware: req.hello,
    });
};

/*
@desc   Mengambil satu data item spesifik
@route  GET /api/items/id
@access public
*/
exports.getItem = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Berhasil mengambil data item dengan id = ${req.params.id}`,
    });
};

/*
@desc   Membuat data item baru
@route  POST /api/items
@access public
*/
exports.createItem = async (req, res, next) => {
    try {
        const item = await Item.create(req.body);
        res.status(200).json({
            success: true,
            message: "Data item baru berhasil ditambahkan",
            data: item,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

/*
@desc   Mengubah data item spesifik
@route  PUT /api/items
@access public
*/
exports.updateItem = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Berhasil mengubah data item dengan id = ${req.params.id}`,
    });
};

/*
@desc   Menghapus data item spesifik
@route  DELETE /api/items
@access public
*/
exports.deleteItem = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Berhasil menghapus data item dengan id = ${req.params.id}`,
    });
};
