const Item = require("../models/itemModel");

/*
@desc   Mengambil semua data item
@route  GET /api/items
@access public
*/
exports.getAllItems = async (req, res, next) => {
    try {
        const item = await Item.findAll();
        res.status(200).json({
            success: true,
            message: "Semua data item berhasil dipanggil",
            data: item,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Terjadi sebuah kesalahan yang tak terduga pada server",
        });
    }
};

/*
@desc   Mengambil satu data item spesifik
@route  GET /api/items/id
@access public
*/
exports.getItem = async (req, res, next) => {
    try {
        const item = await Item.findByPk(req.params.id);
        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Data item tidak ditemukan",
            });
        }
        res.status(200).json({
            success: true,
            message: `Data item dengan id = ${req.params.id} berhasil dipanggil`,
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
exports.updateItem = async (req, res, next) => {
    try {
        const item = await Item.findByPk(req.params.id);
        if (!item) {
            res.status(404).json({
                success: false,
                message: "Data item tidak ditemukan",
            });
        }

        await (await item).update(req.body);

        res.status(200).json({
            success: true,
            message: `Data item dengan id = ${req.params.id} berhasil diperbaharui`,
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
@desc   Menghapus data item spesifik
@route  DELETE /api/items
@access public
*/
exports.deleteItem = async (req, res, next) => {
    try {
        const item = await Item.findByPk(req.params.id);
        if (!item) {
            res.status(404).json({
                success: false,
                message: "Data item tidak ditemukan",
            });
        }
        await (await item).destroy();

        res.status(200).json({
            success: true,
            message: `Data item dengan id = ${req.params.id} berhasil dihapus`,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Terjadi sebuah kesalahan yang tak terduga pada server",
        });
    }
};
