const mysql = require("mysql2");
require("dotenv").config();

// Koneksi ke MySQL yang sudah diatur di Railway
const db = mysql.createConnection({
  host: process.env.MYSQLHOST,      // Variabel dari Railway
  user: process.env.MYSQLUSER,      // Variabel dari Railway
  password: process.env.MYSQLPASSWORD,  // Variabel dari Railway
  database: process.env.MYSQLDATABASE,  // Variabel dari Railway
  port: process.env.MYSQLPORT       // Port (default: 3306)
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Database connected!");
  }
});

module.exports = db;
