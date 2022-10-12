"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const bd_config_1 = __importDefault(require("../config/bd.config"));
const Tarea = bd_config_1.default.define('Tareas', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Tarea;
