const { DataTypes } = require('sequelize');
const  { sequelize } = require('../db');


module.exports = function (sequelize) {
    return sequelize.define('usernotice', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        status:{
            type:DataTypes.ENUM("accepted","delete"),
            allowNull: false
        },
    }, { timestamps: false }
    );
};