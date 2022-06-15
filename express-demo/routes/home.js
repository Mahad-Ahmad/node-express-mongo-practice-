const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //   res.send(courses);
  res.render("index", { title: "My Express App", message: "Hello Boi" });
});

module.exports = router;
