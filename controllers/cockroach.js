
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
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/


import { Cockroach } from "../models/Cockroach.js";

const cockroach = {
// Display index
index: async (req, res) => {
res.send("Cockroach Index Page");
},


// Insert
insert: async (req, res) => {
    try {
        const {
            Firstname,
            LastName,
            Age,
            Gender,
            Type,
            Hp,
            Address
        } = req.body;

        const data = await Cockroach.create({
            Firstname,
            LastName,
            Age,
            Gender,
            Type,
            Hp,
            Address
        });

        res.status(201).json({
            success: true,
            message: "Cockroach added successfully",
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
},

// Retrieve all
get: async (req, res) => {
    try {
        const data = await Cockroach.findAll();

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
},

// Update
update: async (req, res) => {
    try {
        const { id } = req.params;

        const data = await Cockroach.findByPk(id);

        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Cockroach not found"
            });
        }

        await data.update(req.body);

        res.status(200).json({
            success: true,
            message: "Cockroach updated successfully",
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
},

// Delete
delete: async (req, res) => {
    try {
        const { id } = req.params;

        const data = await Cockroach.findByPk(id);

        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Cockroach not found"
            });
        }

        await data.destroy();

        res.status(200).json({
            success: true,
            message: "Cockroach deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


};

export { cockroach };
