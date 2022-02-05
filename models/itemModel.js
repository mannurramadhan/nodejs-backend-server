const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Item = sequelize.define(
    "Item",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        inven_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        desc: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        underscored: true,
    }
);

module.exports = Item;
