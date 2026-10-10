
/*
    MIT License

    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
*/



import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

const Cockroach = sequelize.define("cockroaches", {
    Firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    LastName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    Gender: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Type: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Hp: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Address: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export { Cockroach, sequelize };

