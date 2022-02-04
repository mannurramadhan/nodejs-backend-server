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
exports.createItem = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "Berhasil membuat data item baru",
    });
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
