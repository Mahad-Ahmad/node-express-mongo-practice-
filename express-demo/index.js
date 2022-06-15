const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const Joi = require("joi");
const courses = require("./routes/courses");
const home = require("./routes/home");
const logger = require("./middleware/logger");
const express = require("express");
const app = express();

// process.env.NODE_ENV
// app.get('env)

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // input change
app.use(express.static("public")); // text file
app.use(helmet());
app.use(logger);
app.use("/api/courses", courses);
app.use("/", home);

if (app.get("env") === "production") {
  app.use(morgan("tiny"));
  startupDebugger("morgan enabled");
}

// database
dbDebugger("connecting to the database...");

// pug
app.set("view engine", "pug");
app.set("views", "./views"); // optional

// configuration
console.log(`App Name: ${config.get("name")} `);
console.log(`App Host: ${config.get("mail.host")} `);
console.log(`App Password: ${config.get("mail.password")} `);

const port = process.env.port || 3000;
app.listen(port, () => console.log(`listening on port ${port} `));
