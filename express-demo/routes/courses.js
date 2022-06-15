const express = require("express");
const router = express.Router();

const courses = [
  { id: 1, name: "Course 1" },
  { id: 2, name: "Course 2" },
  { id: 3, name: "Course 3" },
  { id: 4, name: "Course 4" },
];

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// app.get("/api/courses/:id", (req, res) => {
//   res.send(req.params.id);
// });

// app.get("/api/courses/:month/:year", (req, res) => {
//   res.send(req.params);
// });

// app.get("/api/posts/:year", (req, res) => {
//   //   res.send(req.params);
//   res.send(req.query);
// });

router.get("/", (req, res) => {
  res.send(courses);
});

router.get("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("Course with the given id doesn't exist");
  res.send(course);
});

router.post("/", (req, res) => {
  // if (!req.body.name || req.body.name.length < 3) {
  //   return res
  //     .status(400)
  //     .send("Name is required and should be min 3 character");
  // }
  const { error } = validateCourse(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

router.put("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("Course with the given id doesn't exist");

  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

router.delete("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("Course with the given id doesn't exist");

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(course);
}

module.exports = router;
