
import { Sequelize } from "sequelize";
import { sequelize } from "./models/db.js";
import { User } from "./models/userModel.js";
import { Cockroach } from "./models/Cockroach.js";
import inquirer from "inquirer";

const rootSequelize = new Sequelize(
    "mysql://root:@localhost:3306/"
);

const { createDb } = await inquirer.prompt([
    {
        type: "confirm",
        name: "createDb",
        message: "Database 'CRUD08' may not exist. Create it?",
        default: true,
    },
]);

try {
    if (createDb) {
        await rootSequelize.query(
            "CREATE DATABASE IF NOT EXISTS CRUD08;"
        );

        console.log("Database created (if it did not exist)");
    }

    await rootSequelize.close();

    await sequelize.authenticate();
    console.log("Connected to MySQL database!");

    await sequelize.sync();
    console.log("Tables created for all models!");

} catch (err) {
    console.error("Migration failed:", err);
} finally {
    await sequelize.close();
}

