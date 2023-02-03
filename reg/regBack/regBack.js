const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Löööft http://${hostname}:${port}/`);
});

const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "registrierung",
});

app.post("/register", (req, res) => {
  const { firstName, lastName, email, course } = req.body;

  const insertQuery = `INSERT INTO users (first_name, last_name, email, course)
VALUES ('${firstName}', '${lastName}', '${email}', '${course}')`;

  connection.query(insertQuery, (error, results) => {
    if (error) throw error;
    res.send("Erfolgreich registriert!");
  });
});

app.listen(3000, () => {
  console.log("Löööft auf Port 3000");
});
