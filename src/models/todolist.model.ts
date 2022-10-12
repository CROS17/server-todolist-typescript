import { DataTypes } from 'sequelize';
import db from '../config/bd.config';

const Tarea = db.define('Tareas', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Tarea;